'use client';

import { useState, type SyntheticEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MarketingSignupForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState('');
  const [consented, setConsented] = useState(false);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailError('');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailVal = formData.get('email')?.toString().trim() ?? '';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    const firstName = formData.get('firstName')?.toString().trim();
    const lastName = formData.get('lastName')?.toString().trim();
    const name = [firstName, lastName].filter(Boolean).join(' ') || undefined;

    const payload = { name, email: emailVal };

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
      <div className="form-success">
        <div className="form-success-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h4>You&apos;re on the list!</h4>
        <p>Thanks for signing up. We&apos;ll be in touch the moment Notality launches.</p>
        <p style={{ marginTop: '10px', fontSize: '13px' }}>Please check your junk mail for the Notality welcome email.</p>
      </div>
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
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          className={emailError ? 'input-error' : ''}
        />
        {emailError && <p className="field-error">{emailError}</p>}
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

      {status === 'error' && <p className="form-error-msg">{errorMsg}</p>}

      <button
        type="submit"
        className="btn-submit"
        disabled={!consented || status === 'submitting'}
      >
        {status === 'submitting' ? 'Signing up…' : 'Sign up'}
      </button>

      <p className="form-fine">We&apos;ll only use your email to tell you about Notality.</p>
    </form>
  );
}
