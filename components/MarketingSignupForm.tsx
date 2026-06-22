'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MarketingSignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [consented, setConsented] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get('firstName')?.toString().trim();
    const lastName = formData.get('lastName')?.toString().trim();
    const name = [firstName, lastName].filter(Boolean).join(' ') || undefined;

    const payload = {
      name,
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
      <p className="form-success">
        You&apos;re on the list — we&apos;ll be in touch soon! 🎵
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="signup-first-name">First name</label>
          <input id="signup-first-name" name="firstName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="signup-last-name">Last name</label>
          <input id="signup-last-name" name="lastName" type="text" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="signup-email">
          Email <span className="req">*</span>
        </label>
        <input id="signup-email" name="email" type="email" required />
      </div>

      <div className="form-group form-group--checkbox">
        <label className="checkbox-label" htmlFor="marketing-consent">
          <input
            id="marketing-consent"
            type="checkbox"
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
          />
          I&apos;d like to receive marketing emails about Notality, including updates, new features, and offers.
        </label>
      </div>

      {status === 'error' && <p className="form-error">{errorMsg}</p>}

      <button
        type="submit"
        className="btn-submit"
        disabled={!consented || status === 'submitting'}
      >
        {status === 'submitting' ? 'Signing up…' : 'Sign up'}
      </button>

    </form>
  );
}
