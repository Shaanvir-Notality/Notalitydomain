'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MarketingSignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [consented, setConsented] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!consented) {
      setStatus('error');
      setErrorMsg('Please tick the box to confirm you want to receive updates.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
    };

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      form.reset();
      setConsented(false);
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
        You're on the list! Check your inbox to confirm (if double opt-in is enabled).
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium mb-1">
          Name (optional)
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="marketing-consent"
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="marketing-consent" className="text-sm text-gray-700">
          I'd like to receive occasional updates about notality
        </label>
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {status === 'submitting' ? 'Signing up...' : 'Sign up'}
      </button>
    </form>
  );
}
