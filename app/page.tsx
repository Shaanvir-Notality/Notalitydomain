import MarketingSignupForm from '@/components/MarketingSignupForm';

export default function Home() {
  return (
    <>
<header className="site-header">
        <nav className="nav">
          <a href="/" className="nav-logo">
            <img src="/assets/images/logo-transparent.png" alt="Notality" className="logo-img" />
          </a>
          <div className="nav-right">
            <a href="/" className="nav-link">Home</a>
            <a href="#signup" className="btn-nav">Sign up now</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="content-grid">

          <div className="content-left">

            <section className="hero">
              <h1>
                <span className="accent-letter">T</span>o<span className="accent-letter">n</span>ality through{' '}
                <span className="accent-letter">N</span>o<span className="accent-letter">t</span>ality
              </h1>
              <p className="hero-sub">
                True music is made when craft meets creativity. Notality handles the craft, so you can handle the creativity.
              </p>
            </section>

            <section className="signup" id="signup">
              <h2>Sign up now</h2>
              <p className="signup-desc">
                Please register your interest below and we will contact you as soon as the app is released.
              </p>
              <MarketingSignupForm />
            </section>

          </div>

          <div className="content-right">
            <div className="phone-sticky">
              <img src="/assets/images/phonedemo-main.png" alt="Notality app demo" className="phone-demo-img" />
              <ul className="features-list">
                <li><span className="feat-check">✓</span> Tuner</li>
                <li><span className="feat-check">✓</span> Chord builder</li>
                <li><span className="feat-check">✓</span> Key finder</li>
                <li><span className="feat-check">✓</span> Saved sequences</li>
                <li><span className="feat-check">✓</span> Metronome</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-cols">
            <div className="footer-col">
              <h3 className="footer-heading">ENQUIRY</h3>
              <a href="mailto:notality.app@gmail.com" className="footer-link">notality.app@gmail.com</a>
            </div>
            <div className="footer-col">
              <h3 className="footer-heading">SOCIALS</h3>
              <div className="social-icons">
                <a href="https://www.tiktok.com/@notality_music?_r=1&_t=ZN-97Q79yUr86A" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                </a>
                <a href="https://youtube.com/@notality_music?si=wFX-M0pkt4BMS8Ol" className="social-icon youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.8 31.8 0 000 12a31.8 31.8 0 00.5 5.81 3.02 3.02 0 002.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.8 31.8 0 0024 12a31.8 31.8 0 00-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
                </a>
                <a href="https://x.com/notality_music?s=11&t=GlkY4qi2Ww5eXV0f1NIDEQ" className="social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/notality_music/" className="social-icon instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <hr className="footer-rule" />
          <p className="copyright">© 2026 Notality. Tonality through Notality. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
