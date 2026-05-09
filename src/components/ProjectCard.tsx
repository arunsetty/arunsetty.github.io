import { useEffect, useRef, useState } from "react";

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

interface Props {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

function CinematicCard({ title, description, tags, slug, featured, visible, cardRef }: Props & { visible: boolean; cardRef: React.RefObject<HTMLAnchorElement | null> }) {
  return (
    <a
      ref={cardRef}
      href={`/work/${slug}`}
      className="glass-card"
      style={{
        display: "block",
        padding: "32px",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {featured && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--accent-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: "12px",
            display: "block",
          }}
        >
          Featured
        </span>
      )}

      <h3
        style={{
          fontSize: "1.25rem",
          color: "var(--text-primary)",
          margin: "0 0 12px",
          fontWeight: 600,
          transition: "color 0.3s ease",
        }}
      >
        {title}
        <span
          style={{
            display: "inline-block",
            marginLeft: "8px",
            transition: "transform 0.3s ease",
            fontSize: "0.9rem",
          }}
        >
          &rarr;
        </span>
      </h3>

      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          margin: "0 0 20px",
        }}
      >
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "2px 10px",
              borderRadius: "4px",
              fontSize: "0.7rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              border: "1px solid var(--border-color)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function TerminalCard({ title, description, tags, slug, featured, visible, cardRef }: Props & { visible: boolean; cardRef: React.RefObject<HTMLAnchorElement | null> }) {
  return (
    <a
      ref={cardRef}
      href={`/work/${slug}`}
      style={{
        display: "block",
        padding: "16px 20px",
        textDecoration: "none",
        cursor: "pointer",
        background: "rgba(0, 255, 65, 0.03)",
        border: "1px solid rgba(0, 255, 65, 0.1)",
        borderRadius: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        fontFamily: "var(--font-mono)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 255, 65, 0.4)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 65, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 255, 65, 0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Directory path */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
        <span style={{ color: "#009922", fontSize: "0.75rem" }}>drwxr-xr-x</span>
        <span style={{ color: "#00ff41", fontSize: "0.9rem", fontWeight: 600 }}>
          ./work/{slug}/
        </span>
        {featured && (
          <span style={{ color: "#ffaa00", fontSize: "0.65rem", marginLeft: "auto" }}>
            [featured]
          </span>
        )}
      </div>

      {/* Description as comment */}
      <div style={{ color: "#00cc33", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "10px", paddingLeft: "4px" }}>
        # {description}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "1px 8px",
              fontSize: "0.65rem",
              color: "#009922",
              border: "1px solid rgba(0, 255, 65, 0.15)",
              borderRadius: 0,
            }}
          >
            [{tag}]
          </span>
        ))}
      </div>
    </a>
  );
}

export default function ProjectCard(props: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return theme === "terminal" ? (
    <TerminalCard {...props} visible={visible} cardRef={ref} />
  ) : (
    <CinematicCard {...props} visible={visible} cardRef={ref} />
  );
}
