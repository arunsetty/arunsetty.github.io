interface FeaturedThought {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  number: number;
}

interface HeroProps {
  featured?: FeaturedThought;
}

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function Hero({ featured }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <p className="hero-eyebrow">Storyteller · Tinkerer · Thinker · Engineer</p>
            <h1 className="hero-name" aria-label="Arun Setty Kodavali">
              <span className="hero-mark">
                A<span className="hero-mark-dot">·</span>S<span className="hero-mark-dot">·</span>K
              </span>
              <span className="hero-name-full">Arun Setty Kodavali</span>
            </h1>
            <p className="hero-motto">
              <span className="hero-motto-mark">&ldquo;</span>Human with the excellence reflex.<span className="hero-motto-mark">&rdquo;</span>
            </p>

            <div className="hero-divider" aria-hidden="true"></div>

            <p className="hero-frame">
              Stories, mostly, in essays at{" "}
              <a href="/thoughts">Ephemeral Thoughts</a>, in code at{" "}
              <a href="https://ur-ai.net" target="_blank" rel="noopener noreferrer">
                Ur AI
              </a>
              {" "}(the AI startup where I'm CTO and co-founder), and in
              everything I read, watch, and play, logged at{" "}
              <a href="/log">A·S·K Log</a>.
            </p>
            <p className="hero-frame">
              <strong>New story most days.</strong> Previously founding
              engineer at Trupeer and Brokenatom. IIT Bombay alum, somewhere
              between a fullstack mind and a philosophical one.
            </p>

            <div className="hero-meta">
              <a href="/thoughts" className="hero-cta">Read the stories →</a>
              <span className="hero-sep">·</span>
              <a href="/log" className="hero-cta hero-cta-quiet">The log</a>
              <span className="hero-sep">·</span>
              <a href="/work" className="hero-cta hero-cta-quiet">Work</a>
            </div>
          </div>

          {featured && (
            <aside className="hero-featured">
              <a href={`/thoughts/${featured.slug}`} className="hero-featured-link">
                <div className="hero-featured-meta">
                  <span className="hero-featured-num">№ {String(featured.number).padStart(2, "0")}</span>
                  <span className="hero-featured-tag">Latest</span>
                </div>
                <h2 className="hero-featured-title">{featured.title}</h2>
                <p className="hero-featured-desc">{featured.description}</p>
                <div className="hero-featured-foot">
                  <time>{formatDate(featured.pubDate)}</time>
                  <span className="hero-featured-arrow">Read →</span>
                </div>
              </a>
            </aside>
          )}
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 120px;
          padding-bottom: 32px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (min-width: 980px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
            gap: 64px;
          }
        }
        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 28px;
        }
        .hero-name {
          margin: 0 0 36px;
          line-height: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .hero-mark {
          font-family: var(--font-display);
          font-size: clamp(3.4rem, 9vw, 6.2rem);
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--text-primary);
          line-height: 0.95;
          font-feature-settings: "ss01", "salt";
        }
        .hero-mark-dot {
          color: var(--accent-primary);
          font-weight: 400;
          margin: 0 0.05em;
        }
        .hero-name-full {
          font-family: var(--font-serif);
          font-size: clamp(0.95rem, 1.7vw, 1.05rem);
          font-style: italic;
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 0.01em;
          margin-top: 4px;
        }
        .hero-motto {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 1.9vw, 1.3rem);
          font-style: italic;
          font-weight: 400;
          color: var(--text-primary);
          margin: 18px 0 0;
          line-height: 1.4;
        }
        .hero-motto-mark {
          color: var(--accent-primary);
          font-weight: 600;
          font-style: normal;
        }
        .hero-divider {
          width: 48px;
          height: 1px;
          background: var(--accent-primary);
          margin: 28px 0 24px;
        }
        .hero-frame {
          font-family: var(--font-serif);
          font-size: 1.18rem;
          line-height: 1.65;
          color: var(--text-primary);
          margin: 0 0 18px;
          max-width: 56ch;
        }
        .hero-frame a {
          color: var(--accent-primary);
          text-decoration: underline;
          text-decoration-color: rgba(184, 54, 45, 0.4);
          text-underline-offset: 4px;
        }
        .hero-frame strong {
          font-weight: 600;
          color: var(--text-primary);
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
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          text-decoration: none;
          padding: 4px 0;
          border-bottom: 1px solid rgba(184, 54, 45, 0.4);
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

        /* Featured thought card */
        .hero-featured {
          border-top: 2px solid var(--text-primary);
          border-bottom: 1px solid var(--rule-color);
          padding: 0;
          background: transparent;
          align-self: start;
          position: relative;
        }
        @media (min-width: 980px) {
          .hero-featured {
            margin-top: 48px;
          }
        }
        .hero-featured-link {
          display: block;
          padding: 18px 0 22px;
          text-decoration: none;
          color: inherit;
        }
        .hero-featured-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 14px;
          font-family: var(--font-mono);
        }
        .hero-featured-num {
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          font-variant-numeric: tabular-nums;
        }
        .hero-featured-tag {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-primary);
        }
        .hero-featured-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          margin: 0 0 14px;
          transition: color 0.18s ease;
        }
        .hero-featured-link:hover .hero-featured-title {
          color: var(--accent-primary);
        }
        .hero-featured-desc {
          font-family: var(--font-serif);
          font-size: 1.02rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0 0 18px;
          max-width: 38ch;
        }
        .hero-featured-foot {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
        .hero-featured-arrow {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}
