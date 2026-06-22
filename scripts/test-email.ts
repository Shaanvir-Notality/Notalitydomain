export {};

async function main() {
  const res = await fetch('http://localhost:3000/api/send-test-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: 'notality.app@gmail.com',
      message: 'Test email from the Notality Resend integration.',
    }),
  });

  const data = await res.json();

  if (res.ok) {
    console.log('Email sent successfully:', data);
  } else {
    console.error('Failed to send email:', data);
    process.exit(1);
  }
}

main();
