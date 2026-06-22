import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to, message } = await request.json();

    if (!to || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: to and message' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject: 'Test Email',
      text: message,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
