import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import WelcomeEmail from '@/emails/WelcomeEmail';

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!; // e.g. "us21"
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
async function sendWelcomeEmail(email: string, name?: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const unsubscribeUrl = `https://notality.co.uk/api/unsubscribe?e=${Buffer.from(email).toString('base64url')}`;
  const html = await render(WelcomeEmail({ name, unsubscribeUrl }));
  const text = await render(WelcomeEmail({ name, unsubscribeUrl }), { plainText: true });

  const { error } = await resend.emails.send({
    from: 'notality <welcome@notality.co.uk>',
    to: email,
    subject: 'Welcome to notality 🎵',
    html,
    text,
  });

  if (error) {
    console.error('Welcome email failed:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const mcRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: name ? { FNAME: name } : undefined,
      }),
    });

    const data = await mcRes.json();

    if (!mcRes.ok) {
      if (data.title === 'Member Exists') {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }
      console.error('Mailchimp error:', data);
      return NextResponse.json(
        { error: data.detail || 'Could not subscribe. Please try again.' },
        { status: mcRes.status }
      );
    }

    try {
      await sendWelcomeEmail(email, name);
    } catch (emailErr: any) {
      return NextResponse.json({
        ok: true,
        emailError: emailErr?.message ?? String(emailErr),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mailchimp subscribe failed:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
