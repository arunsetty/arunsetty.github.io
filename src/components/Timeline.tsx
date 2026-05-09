import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE } from "../consts";

gsap.registerPlugin(ScrollTrigger);

function useTheme() {
  const [theme, setTheme] = useState<string>("cinematic");
  useEffect(() => {
    const update = () =>
      setTheme(document.documentElement.getAttribute("data-theme") || "cinematic");
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function TimelineNode({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "flex-start",
        marginBottom: "48px",
        position: "relative",
      }}
    >
      {/* Dot on the line */}
      <div
        className="timeline-dot"
        style={{
          flexShrink: 0,
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          border: "2px solid var(--accent-primary)",
          background: "var(--bg-primary)",
          position: "relative",
          top: "6px",
          zIndex: 2,
          boxShadow: "0 0 12px var(--glow-color)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Content */}
      <div className="glass-card" style={{ padding: "24px", flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {item.company}
              </a>
            </h3>
            <p
              style={{
                margin: "4px 0 0",
                color: "var(--accent-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
              }}
            >
              {item.position}
            </p>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            {item.time}
          </span>
        </div>

        <ul
          style={{
            margin: "12px 0 0",
            padding: "0 0 0 16px",
            listStyle: "none",
          }}
        >
          {item.points.map((point, i) => (
            <li
              key={i}
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                marginBottom: "6px",
                position: "relative",
                paddingLeft: "12px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent-primary)",
                  fontSize: "0.6rem",
                  top: "6px",
                }}
              >
                &#9656;
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ===== GIT LOG TERMINAL TIMELINE =====
function generateHash() {
  return Math.random().toString(16).slice(2, 9);
}

function TerminalTimeline() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div
        style={{
          color: "#009922",
          fontSize: "0.75rem",
          marginBottom: "24px",
          opacity: 0.6,
        }}
      >
        $ git log --oneline --author="arun" --all
      </div>

      {EXPERIENCE.map((item, i) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          style={{
            marginBottom: "20px",
            padding: "16px 20px",
            background: "rgba(0, 255, 65, 0.03)",
            border: "1px solid rgba(0, 255, 65, 0.1)",
            borderRadius: 0,
          }}
        >
          {/* Commit hash + date line */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span style={{ color: "#ffaa00", fontSize: "0.8rem" }}>
              {generateHash()}
            </span>
            <span style={{ color: "#009922", fontSize: "0.75rem" }}>
              {item.time}
            </span>
          </div>

          {/* Company + role */}
          <div style={{ marginBottom: "8px" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00ff41",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                textShadow: "0 0 8px rgba(0, 255, 65, 0.3)",
              }}
            >
              {item.company}
            </a>
            <span
              style={{
                color: "#00cc33",
                fontSize: "0.8rem",
                marginLeft: "12px",
              }}
            >
              ({item.position})
            </span>
          </div>

          {/* Points as commit message body */}
          <div style={{ paddingLeft: "4px" }}>
            {item.points.map((point, j) => (
              <div
                key={j}
                style={{
                  color: "#00cc33",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                  marginBottom: "2px",
                }}
              >
                <span style={{ color: "#009922", marginRight: "8px" }}>-</span>
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <div
        style={{
          color: "#009922",
          fontSize: "0.75rem",
          marginTop: "16px",
          opacity: 0.5,
        }}
      >
        // {EXPERIENCE.length} commits shown
      </div>
    </div>
  );
}

// ===== CINEMATIC TIMELINE =====
function CinematicTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        paddingLeft: "8px",
      }}
    >
      {/* Animated line */}
      <div
        style={{
          position: "absolute",
          left: "7px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "var(--border-color)",
        }}
      >
        <div
          ref={lineRef}
          style={{
            width: "100%",
            background: "var(--accent-gradient)",
            boxShadow: "0 0 8px var(--glow-color)",
          }}
        />
      </div>

      {EXPERIENCE.map((item, i) => (
        <TimelineNode key={item.company} item={item} index={i} />
      ))}
    </div>
  );
}

// ===== MAIN EXPORT =====
export default function Timeline() {
  const theme = useTheme();
  return theme === "terminal" ? <TerminalTimeline /> : <CinematicTimeline />;
}
