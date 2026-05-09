import { EXPERIENCE } from "../consts";

export default function Timeline() {
  return (
    <div className="timeline">
      <ol className="timeline-list">
        {EXPERIENCE.map((item) => (
          <li key={item.company} className="timeline-item">
            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-content">
              <div className="timeline-row">
                <h3 className="timeline-company">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                </h3>
                <time className="timeline-time">{item.time}</time>
              </div>
              <p className="timeline-role">{item.position}</p>

              <ul className="timeline-points">
                {item.points.map((point, j) => (
                  <li key={j} className="timeline-point">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <style>{`
        .timeline { padding: 0; }
        .timeline-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .timeline-item {
          display: flex;
          gap: 20px;
          padding-bottom: 40px;
          position: relative;
        }
        .timeline-item:last-child .timeline-line {
          height: 16px;
        }
        .timeline-line {
          width: 1px;
          background: var(--rule-color);
          position: relative;
          flex-shrink: 0;
          min-height: 100%;
        }
        .timeline-dot {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1.5px solid var(--accent-primary);
          box-shadow: 0 0 0 4px var(--bg-primary);
        }
        .timeline-content {
          flex: 1;
          min-width: 0;
          padding-left: 8px;
        }
        .timeline-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }
        .timeline-company {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .timeline-company a {
          color: var(--text-primary);
          text-decoration: none;
        }
        .timeline-company a:hover {
          color: var(--accent-primary);
        }
        .timeline-time {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          letter-spacing: 0.03em;
        }
        .timeline-role {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-primary);
          margin: 0 0 14px;
          letter-spacing: 0.02em;
        }
        .timeline-points {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-serif);
        }
        .timeline-point {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.6;
          margin-bottom: 8px;
          padding-left: 16px;
          position: relative;
        }
        .timeline-point::before {
          content: "·";
          position: absolute;
          left: 0;
          color: var(--text-quiet);
        }
      `}</style>
    </div>
  );
}
