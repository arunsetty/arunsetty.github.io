interface Thought {
  title: string;
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

interface LogEntry {
  title: string;
  type: string;
  rating?: number;
  status: string;
  firstWatched: Date;
  slug: string;
  creator?: string;
}

const formatShort = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

const formatYear = (d: Date) =>
  d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

// ============================================================
// RECENT THOUGHTS — dense numbered list
// ============================================================
export function RecentThoughts({
  thoughts,
  total,
}: {
  thoughts: Thought[];
  total: number;
}) {
  return (
    <section className="rt-section">
      <div className="container">
        <header className="rt-header">
          <span className="eyebrow">Recent</span>
          <h2 className="rt-title">Ephemeral Thoughts</h2>
          <p className="rt-blurb">Things I think before I forget. New essay most days.</p>
        </header>

        {thoughts.length === 0 ? (
          <p className="rt-empty">Nothing here yet — first thought coming soon.</p>
        ) : (
          <ol className="rt-list">
            {thoughts.map((t) => (
              <li key={t.slug} className="rt-item">
                <a href={`/thoughts/${t.slug}`} className="rt-link">
                  <span className="rt-num">{String(t.number).padStart(2, "0")}.</span>
                  <span className="rt-title-text">{t.title}</span>
                  <span className="rt-rule" aria-hidden="true"></span>
                  <time className="rt-date">{formatShort(t.pubDate)}</time>
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
        .rt-section { padding: 80px 0 64px; }
        .rt-header { margin-bottom: 36px; max-width: 720px; }
        .rt-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.02em;
          margin: 8px 0 10px;
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
        }
        .rt-item {
          border-bottom: 1px solid var(--rule-color);
        }
        .rt-item:first-child {
          border-top: 1px solid var(--rule-color);
        }
        .rt-link {
          display: grid;
          grid-template-columns: 56px minmax(0, auto) 1fr auto;
          align-items: baseline;
          gap: 16px;
          padding: 18px 0;
          text-decoration: none;
          color: inherit;
          transition: padding 0.18s ease;
        }
        .rt-link:hover {
          padding-left: 8px;
        }
        .rt-link:hover .rt-title-text {
          color: var(--accent-primary);
        }
        .rt-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.02em;
          font-variant-numeric: tabular-nums;
        }
        .rt-title-text {
          font-family: var(--font-display);
          font-size: 1.18rem;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.25;
          transition: color 0.18s ease;
        }
        .rt-rule {
          height: 1px;
          background: var(--rule-color);
          align-self: center;
          opacity: 0.7;
        }
        .rt-date {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
        .rt-empty {
          color: var(--text-muted);
          font-style: italic;
          padding: 24px 0;
        }
        .rt-footer { margin-top: 32px; }
        .rt-all {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-primary);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(184, 54, 45, 0.4);
          letter-spacing: 0.04em;
        }
        .rt-all:hover {
          border-bottom-color: var(--accent-primary);
        }
        @media (max-width: 600px) {
          .rt-link {
            grid-template-columns: 36px minmax(0, 1fr) auto;
          }
          .rt-rule { display: none; }
          .rt-num { font-size: 0.72rem; }
          .rt-title-text { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// BUILDING + LATELY — 2-column row
// ============================================================
export function BuildingAndLately({
  projects,
  log,
}: {
  projects: Project[];
  log: LogEntry[];
}) {
  return (
    <section className="bl-section">
      <div className="container">
        <div className="bl-grid">
          {/* Building */}
          <div className="bl-col">
            <header className="bl-col-header">
              <span className="eyebrow">Building</span>
              <h2 className="bl-col-title">Currently shipping</h2>
            </header>

            <ul className="bl-list">
              {projects.map((p) => (
                <li key={p.slug} className="bl-item bl-item-project">
                  <a href={`/work/${p.slug}`} className="bl-link">
                    <div className="bl-row">
                      <h3 className="bl-name">{p.title}</h3>
                      {p.duration && <span className="bl-side-meta">{p.duration}</span>}
                    </div>
                    <p className="bl-desc">{p.description}</p>
                    <div className="bl-tags">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="bl-tag">{t}</span>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <a href="/work" className="bl-all">All work →</a>
          </div>

          {/* Lately (log) */}
          <div className="bl-col">
            <header className="bl-col-header">
              <span className="eyebrow">Lately</span>
              <h2 className="bl-col-title">From the log</h2>
            </header>

            {log.length === 0 ? (
              <p className="bl-empty">Log is fresh — first entries on the way.</p>
            ) : (
              <ul className="bl-list">
                {log.map((entry) => (
                  <li key={entry.slug} className="bl-item bl-item-log">
                    <a href={`/log/${entry.slug}`} className="bl-link">
                      <div className="bl-row">
                        <h3 className="bl-name">{entry.title}</h3>
                        {typeof entry.rating === "number" && entry.rating > 0 && (
                          <span className="bl-rating">{entry.rating.toFixed(1)}</span>
                        )}
                      </div>
                      <p className="bl-meta">
                        <span className="bl-type">[{entry.type.toUpperCase()}]</span>
                        {entry.creator && <> · {entry.creator}</>}
                        {" · "}
                        <time>{formatYear(entry.firstWatched)}</time>
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <a href="/log" className="bl-all">Full log →</a>
          </div>
        </div>
      </div>

      <style>{`
        .bl-section { padding: 64px 0 96px; }
        .bl-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
        }
        @media (min-width: 880px) {
          .bl-grid {
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }
        }
        .bl-col-header {
          margin-bottom: 24px;
        }
        .bl-col-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.015em;
          margin: 6px 0 0;
          color: var(--text-primary);
        }
        .bl-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          border-top: 1px solid var(--rule-color);
        }
        .bl-item {
          border-bottom: 1px solid var(--rule-color);
        }
        .bl-link {
          display: block;
          padding: 18px 0;
          text-decoration: none;
          color: inherit;
          transition: padding 0.18s ease;
        }
        .bl-link:hover {
          padding-left: 6px;
        }
        .bl-link:hover .bl-name {
          color: var(--accent-primary);
        }
        .bl-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 4px;
        }
        .bl-name {
          font-family: var(--font-display);
          font-size: 1.12rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
          transition: color 0.18s ease;
        }
        .bl-side-meta {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .bl-rating {
          font-family: var(--font-mono);
          font-variant-numeric: tabular-nums;
          font-size: 0.85rem;
          color: var(--accent-primary);
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .bl-desc {
          font-family: var(--font-serif);
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 4px 0 10px;
        }
        .bl-meta {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          margin: 0;
          letter-spacing: 0.03em;
        }
        .bl-type {
          color: var(--accent-primary);
        }
        .bl-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .bl-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 1px 7px;
          border: 1px solid var(--border-color);
          border-radius: 3px;
          color: var(--text-muted);
        }
        .bl-empty {
          color: var(--text-muted);
          font-style: italic;
          padding: 16px 0 24px;
          margin: 0;
        }
        .bl-all {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--accent-primary);
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(184, 54, 45, 0.4);
          letter-spacing: 0.04em;
          display: inline-block;
        }
        .bl-all:hover {
          border-bottom-color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
}
