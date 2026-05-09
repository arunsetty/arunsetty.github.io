import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"cinematic" | "terminal">("cinematic");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "cinematic" | "terminal" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggle = () => {
    const next = theme === "cinematic" ? "terminal" : "cinematic";

    // Create flash overlay
    const flash = document.createElement("div");
    flash.className = `theme-flash theme-flash--${next}`;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);

    localStorage.setItem("theme", next);

    // Scroll to top and reload so GSAP ScrollTrigger animations re-initialize
    window.scrollTo(0, 0);
    setTimeout(() => window.location.reload(), 150);
  };

  const isTerminal = theme === "terminal";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isTerminal ? "cinematic" : "terminal"} theme`}
      style={{
        background: "none",
        border: `1px solid ${isTerminal ? "rgba(0, 255, 65, 0.3)" : "var(--border-color)"}`,
        borderRadius: isTerminal ? "0" : "8px",
        padding: "6px 12px",
        cursor: "pointer",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        textShadow: isTerminal ? "0 0 8px rgba(0, 255, 65, 0.4)" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-primary)";
        e.currentTarget.style.color = "var(--accent-primary)";
        e.currentTarget.style.boxShadow = `0 0 15px var(--glow-color)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isTerminal
          ? "rgba(0, 255, 65, 0.3)"
          : "var(--border-color)";
        e.currentTarget.style.color = "var(--text-secondary)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {isTerminal ? "$ exit" : "[ terminal ]"}
    </button>
  );
}
