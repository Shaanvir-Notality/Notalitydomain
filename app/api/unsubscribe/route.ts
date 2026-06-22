import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;

export async function GET(req: NextRequest) {
  const e = req.nextUrl.searchParams.get('e');

  if (!e) {
    return new NextResponse('Missing parameter.', { status: 400 });
  }

  let email: string;
  try {
    email = Buffer.from(e, 'base64url').toString('utf8');
  } catch {
    return new NextResponse('Invalid parameter.', { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new NextResponse('Invalid parameter.', { status: 400 });
  }

  const subscriberHash = createHash('md5').update(email.toLowerCase()).digest('hex');
  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: 'unsubscribed' }),
  });

  if (!res.ok) {
    const data = await res.json();
    console.error('Mailchimp unsubscribe error:', data);
    return new NextResponse('Could not unsubscribe. Please try again.', { status: 500 });
  }

  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>Unsubscribed</title></head><body style="font-family:sans-serif;text-align:center;padding:60px 20px"><h1 style="color:#1d3557">You've been unsubscribed</h1><p style="color:#2d3748">You won't receive any more emails from Notality.</p></body></html>`,
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  );
}
