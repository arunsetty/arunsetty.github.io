interface Thought {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  number: number;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  duration?: string;
}

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

export function RecentThoughts({ thoughts, total }: { thoughts: Thought[]; total: number }) {
  return (
    <section className="recent-thoughts-section">
      <div className="container narrow">
        <header className="rt-header">
          <span className="eyebrow">Recent</span>
          <h2 className="rt-title">Ephemeral Thoughts</h2>
          <p className="rt-blurb">Things I think before I forget.</p>
        </header>

        {thoughts.length === 0 ? (
          <p className="rt-empty">Nothing here yet — first thought coming soon.</p>
        ) : (
          <ol className="rt-list">
            {thoughts.map((t) => (
              <li key={t.slug} className="rt-item">
                <a href={`/thoughts/${t.slug}`} className="rt-link">
                  <span className="rt-num">{String(t.number).padStart(2, "0")}.</span>
                  <div className="rt-body">
                    <h3 className="rt-item-title">{t.title}</h3>
                    <p className="rt-item-desc">{t.description}</p>
                    <time className="rt-item-date">{formatDate(t.pubDate)}</time>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        )}

        <div className="rt-footer">
          <a href="/thoughts" className="rt-all">
            All {total} {total === 1 ? "thought" : "thoughts"} →
          </a>
        </div>
      </div>

      <style>{`
        .recent-thoughts-section { padding: 80px 0; }
        .rt-header { margin-bottom: 48px; }
        .rt-title {
          font-family: var(--font-sans);
          font-size: clamp(1.7rem, 3.4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 8px 0 8px;
          color: var(--text-primary);
        }
        .rt-blurb {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--text-secondary);
          font-style: italic;
          margin: 0;
        }
        .rt-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--rule-color);
        }
        .rt-item {
          border-bottom: 1px solid var(--rule-color);
        }
        .rt-link {
          display: flex;
          align-items: baseline;
          gap: 20px;
          padding: 22px 0;
          text-decoration: none;
          color: inherit;
          transition: padding 0.18s ease;
        }
        .rt-link:hover {
          padding-left: 6px;
        }
        .rt-link:hover .rt-item-title {
          color: var(--accent-primary);
        }
        .rt-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          min-width: 36px;
          letter-spacing: 0.02em;
        }
        .rt-body { flex: 1; min-width: 0; }
        .rt-item-title {
          font-family: var(--font-sans);
          font-size: 1.18rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 6px;
          letter-spacing: -0.01em;
          transition: color 0.18s ease;
        }
        .rt-item-desc {
          font-family: var(--font-serif);
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin: 0 0 10px;
          line-height: 1.55;
        }
        .rt-item-date {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
        .rt-empty {
          color: var(--text-muted);
          font-style: italic;
          padding: 24px 0;
        }
        .rt-footer {
          margin-top: 32px;
        }
        .rt-all {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-primary);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(232, 182, 88, 0.4);
          letter-spacing: 0.04em;
        }
        .rt-all:hover {
          border-bottom-color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}

export function CurrentlyBuilding({ projects }: { projects: Project[] }) {
  return (
    <section className="cb-section">
      <div className="container narrow">
        <header className="cb-header">
          <span className="eyebrow">Building</span>
          <h2 className="cb-title">Things I'm working on</h2>
        </header>

        <ul className="cb-list">
          {projects.map((p) => (
            <li key={p.slug} className="cb-item">
              <a href={`/work/${p.slug}`} className="cb-link">
                <div className="cb-head">
                  <h3 className="cb-name">{p.title}</h3>
                  {p.duration && <span className="cb-duration">{p.duration}</span>}
                </div>
                <p className="cb-desc">{p.description}</p>
                <div className="cb-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="cb-tag">{t}</span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="cb-footer">
          <a href="/work" className="cb-all">All work →</a>
        </div>
      </div>

      <style>{`
        .cb-section { padding: 80px 0; }
        .cb-header { margin-bottom: 40px; }
        .cb-title {
          font-family: var(--font-sans);
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 8px 0 0;
        }
        .cb-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cb-item {
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          border-radius: 4px;
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .cb-item:hover {
          border-color: var(--accent-quiet);
          background: var(--bg-card-hover);
        }
        .cb-link {
          display: block;
          padding: 22px 24px;
          text-decoration: none;
          color: inherit;
        }
        .cb-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .cb-name {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }
        .cb-duration {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
        .cb-desc {
          font-family: var(--font-serif);
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin: 0 0 14px;
          line-height: 1.55;
        }
        .cb-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cb-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 2px 8px;
          border: 1px solid var(--border-color);
          border-radius: 3px;
          color: var(--text-muted);
        }
        .cb-footer { margin-top: 32px; }
        .cb-all {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-primary);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(232, 182, 88, 0.4);
          letter-spacing: 0.04em;
        }
        .cb-all:hover {
          border-bottom-color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}
