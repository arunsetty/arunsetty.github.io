export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <p className="hero-eyebrow">Software developer · Essayist</p>
          <h1 className="hero-name">Arun Setty</h1>
          <p className="hero-frame">
            Currently building{" "}
            <a href="https://brokenatom.io" target="_blank" rel="noopener noreferrer">
              Broken
            </a>
            , a no-code platform. IIT&nbsp;Bombay alum, eight years in the
            industry, somewhere between a fullstack engineer and a
            philosopher.
          </p>
          <p className="hero-frame">
            I write at <a href="/thoughts">Ephemeral Thoughts</a> — short
            essays on decisions, systems, and the spaces in between. Things I
            think before I forget.
          </p>

          <div className="hero-meta">
            <a href="/thoughts" className="hero-cta">Read the thoughts →</a>
            <span className="hero-sep">·</span>
            <a href="/work" className="hero-cta hero-cta-quiet">See the work</a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 140px;
          padding-bottom: 40px;
        }
        .hero-inner {
          max-width: 720px;
        }
        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 24px;
        }
        .hero-name {
          font-family: var(--font-sans);
          font-size: clamp(2.6rem, 7vw, 4.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.95;
          margin: 0 0 32px;
          color: var(--text-primary);
        }
        .hero-frame {
          font-family: var(--font-serif);
          font-size: 1.18rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 18px;
          max-width: 60ch;
        }
        .hero-frame a {
          color: var(--accent-primary);
          text-decoration: underline;
          text-decoration-color: rgba(232, 182, 88, 0.4);
          text-underline-offset: 4px;
        }
        .hero-meta {
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-cta {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          text-decoration: none;
          padding: 4px 0;
          border-bottom: 1px solid rgba(232, 182, 88, 0.4);
          transition: border-color 0.18s ease, color 0.18s ease;
        }
        .hero-cta:hover {
          border-bottom-color: var(--accent-primary);
        }
        .hero-cta-quiet {
          color: var(--text-secondary);
          border-bottom-color: var(--border-color);
        }
        .hero-cta-quiet:hover {
          color: var(--text-primary);
          border-bottom-color: var(--text-secondary);
        }
        .hero-sep {
          color: var(--text-quiet);
        }
      `}</style>
    </section>
  );
}
