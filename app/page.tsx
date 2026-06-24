import MarketingSignupForm from '@/components/MarketingSignupForm';

export default function Home() {
  return (
    <>
      {/* ── Fixed Header ── */}
      <header className="site-header">
        <nav className="nav">
          <a href="/" className="nav-logo">
            <img src="/assets/images/logo-transparent.png" alt="Notality" className="logo-img" />
          </a>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#craft" className="nav-link">Why Notality</a>
            </div>
            <a href="#waitlist" className="btn-nav">Join the waitlist</a>
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <div className="hero">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Music theory toolkit · Coming soon
            </div>
            <h1>
              <span className="hero-gradient-word">Tonality</span>
              {' '}through Notality
            </h1>
            <p className="hero-lead">
              True music is made when craft meets creativity. Notality handles the craft — so you can focus on the music.
            </p>
            <div className="hero-ctas">
              <a href="#waitlist" className="btn-primary">Join the waitlist</a>
              <a href="#features" className="btn-outline">See the tools</a>
            </div>
            <p className="hero-fine">Free to join. No credit card required.</p>
          </div>

          <div className="hero-right">
            <div className="hero-glow" />
            <div className="hero-chip chip-tuner">
              <span className="hero-chip-dot" />
              Tuner · In tune · F4
            </div>
            <div className="phone-wrap">
              <img src="/assets/images/phonedemo-main.png" alt="Notality app demo" className="phone-demo-img" />
            </div>
            <div className="hero-chip chip-chord">
              <span className="hero-chip-dot" />
              Chord builder · Cmaj7 saved
            </div>
          </div>
        </div>

        {/* ── Trust Strip ── */}
        <div className="trust-strip">
          <div className="trust-inner">
            <span className="trust-item">🎸 For practicing musicians</span>
            <span className="trust-item">🎹 Any instrument</span>
            <span className="trust-item">♿ Accessible high-contrast mode</span>
            <span className="trust-item">🛠️ Built by musicians</span>
          </div>
        </div>

        {/* ── Features ── */}
        <section id="features">
          <div className="section-wrap">
            <p className="section-eyebrow">THE TOOLKIT</p>
            <h2 className="section-h2">Play in tune, in key, in time.</h2>
            <p className="section-lead">Five tools built for real musicians — designed to keep you in flow, not slow you down.</p>

            <div className="features-grid">
              <div className="feat-card">
                <div className="feat-icon-box">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="7" y2="12" />
                    <line x1="17" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h3>Tuner</h3>
                <p>A responsive chromatic tuner that shows instantly whether you&apos;re sharp, flat, or perfectly in tune.</p>
              </div>

              <div className="feat-card">
                <div className="feat-icon-box">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <h3>Chord builder</h3>
                <p>Build and explore chords by type and voicing — see every note and how they stack across any instrument.</p>
              </div>

              <div className="feat-card">
                <div className="feat-icon-box">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="12" r="5" />
                    <path d="M13 12h8M19 10v4" />
                  </svg>
                </div>
                <h3>Key finder</h3>
                <p>Tell Notality the chords you&apos;re playing and it&apos;ll identify the key — instantly clarify the harmonic landscape.</p>
              </div>

              <div className="feat-card">
                <div className="feat-icon-box">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h14a2 2 0 0 1 2 2v16l-7-4-7 4V5a2 2 0 0 1 2-2z" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                  </svg>
                </div>
                <h3>Saved sequences</h3>
                <p>Bookmark your best chord progressions and revisit them anytime — build your personal musical library.</p>
              </div>

              <div className="feat-card">
                <div className="feat-icon-box">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3L5 21h14L12 3z" />
                    <path d="M12 9l5 8" />
                    <circle cx="12" cy="9" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3>Metronome</h3>
                <p>A clean, distraction-free metronome for locking in your tempo — from slow practice to performance speed.</p>
              </div>

              <div className="feat-card feat-card-cta">
                <h3>Five tools.<br />One pocket.</h3>
                <a href="#waitlist" className="feat-cta-link">
                  Get early access
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Notality ── */}
        <section id="craft" className="craft-section">
          <div className="craft-band">
            <p className="section-eyebrow">WHY NOTALITY</p>
            <h2 className="section-h2">
              Spend less time figuring it out,<br />
              and more time <span className="craft-gradient-text">making it.</span>
            </h2>
            <p className="craft-lead">
              Notality puts the theory in your pocket — so inspiration never has to wait for understanding.
            </p>
            <div className="craft-steps">
              <div className="craft-step">
                <div className="craft-step-num">01</div>
                <h4>Capture the idea</h4>
                <p>Hear something you like? Open Notality and capture the chord or melody before the moment&apos;s gone.</p>
              </div>
              <div className="craft-step">
                <div className="craft-step-num">02</div>
                <h4>Understand it</h4>
                <p>Use the chord builder and key finder to decode what you&apos;re hearing — and understand exactly why it works.</p>
              </div>
              <div className="craft-step">
                <div className="craft-step-num">03</div>
                <h4>Save &amp; build</h4>
                <p>Bookmark your discoveries, build on progressions, and grow your musical vocabulary one session at a time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Waitlist ── */}
        <section id="waitlist" className="waitlist-section">
          <div className="waitlist-panel">
            <div className="waitlist-left">
              <h2 className="section-h2">Be first to play.</h2>
              <p className="waitlist-lead">
                Notality is almost ready. Join the waitlist and we&apos;ll tell you the moment it launches.
              </p>
              <ul className="waitlist-benefits">
                <li className="waitlist-benefit">
                  <span className="benefit-check">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  First access when Notality launches
                </li>
                <li className="waitlist-benefit">
                  <span className="benefit-check">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Exclusive updates straight from the team
                </li>
                <li className="waitlist-benefit">
                  <span className="benefit-check">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  No spam — unsubscribe anytime
                </li>
              </ul>
            </div>
            <div className="waitlist-right">
              <div className="signup-form-wrap">
                <MarketingSignupForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col-brand">
              <div className="footer-logo">
                <img src="/assets/images/logo-transparent.png" alt="Notality" className="footer-logo-img" />
              </div>
              <p className="footer-tagline">
                Tonality through Notality. A music theory toolkit for practicing musicians.
              </p>
            </div>

            <div>
              <h3 className="footer-heading">ENQUIRY</h3>
              <a href="mailto:notality.app@gmail.com" className="footer-link">notality.app@gmail.com</a>
            </div>

            <div>
              <h3 className="footer-heading">SOCIALS</h3>
              <div className="social-icons">
                <a href="https://www.tiktok.com/@notality_music?_r=1&_t=ZN-97Q79yUr86A" className="social-btn social-tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.01-2.82h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07V9.66a5.66 5.66 0 0 0-.73-.05A5.62 5.62 0 1 0 15.54 15.2V8.99a7.27 7.27 0 0 0 4.25 1.36V7.26a4.28 4.28 0 0 1-3.19-1.44z" />
                  </svg>
                </a>
                <a href="https://youtube.com/@notality_music?si=wFX-M0pkt4BMS8Ol" className="social-btn social-youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M23 12s0-3.2-.4-4.74a2.5 2.5 0 0 0-1.77-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.83.39A2.5 2.5 0 0 0 1.4 7.26C1 8.8 1 12 1 12s0 3.2.4 4.74a2.5 2.5 0 0 0 1.77 1.77c1.53.39 8.83.39 8.83.39s7.3 0 8.83-.39a2.5 2.5 0 0 0 1.77-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
                <a href="https://x.com/notality_music?s=11&t=GlkY4qi2Ww5eXV0f1NIDEQ" className="social-btn social-x" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25h6.83l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/notality_music/" className="social-btn social-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.44c-3.14 0-3.52.01-4.76.07-.95.04-1.46.2-1.8.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.13.34-.3.85-.34 1.8-.06 1.24-.07 1.62-.07 4.76s.01 3.52.07 4.76c.04.95.2 1.46.34 1.8.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.13.85.3 1.8.34 1.24.06 1.62.07 4.76.07s3.52-.01 4.76-.07c.95-.04 1.46-.2 1.8-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.13-.34.3-.85.34-1.8.06-1.24.07-1.62.07-4.76s-.01-3.52-.07-4.76c-.04-.95-.2-1.46-.34-1.8a3.02 3.02 0 0 0-.73-1.12 3.02 3.02 0 0 0-1.12-.73c-.34-.13-.85-.3-1.8-.34-1.24-.06-1.62-.07-4.76-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 9.81a3.86 3.86 0 1 0 0-7.72 3.86 3.86 0 0 0 0 7.72zm7.57-10.05a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="copyright">© 2026 Notality. Tonality through Notality. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
