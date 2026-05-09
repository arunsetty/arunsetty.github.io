import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TerminalText from "./TerminalText";

gsap.registerPlugin(ScrollTrigger);

function useTheme() {
  const [theme, setTheme] = useState<string>("cinematic");

  useEffect(() => {
    const update = () => {
      setTheme(document.documentElement.getAttribute("data-theme") || "cinematic");
    };
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

// ===== CINEMATIC HERO =====
function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const nameCharsRef = useRef<HTMLSpanElement[]>([]);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.inOut" }
      );

      tl.from(
        greetingRef.current,
        { opacity: 0, y: 20, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

      tl.from(
        nameCharsRef.current,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.04,
        },
        "-=0.2"
      );

      tl.from(
        taglineRef.current,
        { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

      tl.from(
        descRef.current,
        { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

      tl.from(
        statusRef.current,
        { opacity: 0, scale: 0.8, duration: 0.4, ease: "back.out(2)" },
        "-=0.3"
      );

      tl.from(
        ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

      tl.from(
        scrollRef.current,
        { opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.1"
      );

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        opacity: 0,
        scale: 0.95,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nameText = "Arun Setty";

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div ref={contentRef} style={{ position: "relative", zIndex: 2, maxWidth: "1000px" }}>
        <div
          ref={lineRef}
          style={{
            width: "60px",
            height: "2px",
            background: "var(--accent-gradient)",
            margin: "0 auto 24px",
            transformOrigin: "left center",
          }}
        />

        <p
          ref={greetingRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--accent-primary)",
            marginBottom: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Hello, I'm
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 800,
            margin: "0 0 20px",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            perspective: "600px",
          }}
        >
          {nameText.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) nameCharsRef.current[i] = el;
              }}
              className="gradient-text"
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          ref={taglineRef}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--text-secondary)",
            margin: "0 0 20px",
            lineHeight: 1.5,
            fontWeight: 400,
            letterSpacing: "0.02em",
          }}
        >
          Fullstack Developer &amp; Product Architect
        </p>

        <p
          ref={descRef}
          style={{
            fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
            color: "var(--text-muted)",
            margin: "0 auto 20px",
            lineHeight: 1.8,
            maxWidth: "550px",
          }}
        >
          I build beautiful, scalable web applications and think deeply about the
          systems that shape our world.
        </p>

        <div
          ref={statusRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "20px",
            border: "1px solid var(--border-color)",
            marginBottom: "32px",
            background: "var(--bg-card)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)",
              animation: "statusPulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.05em",
            }}
          >
            Currently building at{" "}
            <a
              href="https://brokenatom.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-primary)", textDecoration: "none" }}
            >
              Broken
            </a>
          </span>
        </div>

        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/work" className="glass-card cta-button">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "6px" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/writing" className="glass-card cta-button cta-secondary">
            Read My Writing
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "6px" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/journey" className="glass-card cta-button cta-secondary">
            My Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "6px" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "10px",
            border: "1.5px solid var(--border-color)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "8px",
              borderRadius: "2px",
              background: "var(--accent-primary)",
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scrollDot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes scrollDot {
          0% { top: 6px; opacity: 1; }
          50% { top: 18px; opacity: 0.3; }
          100% { top: 6px; opacity: 1; }
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-primary);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px var(--glow-color);
        }
        .cta-secondary {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}

// ===== TERMINAL HERO =====
function TerminalHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Scroll parallax
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        opacity: 0,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Auto-advance phases with delays
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),   // show prompt
      setTimeout(() => setPhase(2), 1800),   // show output
      setTimeout(() => setPhase(3), 2800),   // show system info
      setTimeout(() => setPhase(4), 4200),   // show commands
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const cursor = (
    <span style={{ color: "#00ff41", opacity: showCursor ? 1 : 0 }}>_</span>
  );

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          fontFamily: "var(--font-mono)",
        }}
      >
        {/* Terminal window frame */}
        <div
          style={{
            border: "1px solid rgba(0, 255, 65, 0.3)",
            background: "rgba(0, 0, 0, 0.8)",
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              padding: "8px 16px",
              borderBottom: "1px solid rgba(0, 255, 65, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.7rem",
              color: "#009922",
            }}
          >
            <span style={{ color: "#00ff41" }}>arun@portfolio</span>
            <span>:</span>
            <span style={{ color: "#00ffaa" }}>~</span>
            <span style={{ marginLeft: "auto", opacity: 0.5 }}>bash</span>
          </div>

          {/* Terminal content */}
          <div style={{ padding: "24px", lineHeight: 1.8, fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)" }}>
            {/* Prompt + whoami */}
            {phase >= 1 && (
              <div style={{ marginBottom: "4px" }}>
                <span style={{ color: "#00ff41" }}>arun@portfolio</span>
                <span style={{ color: "#009922" }}>:</span>
                <span style={{ color: "#00ffaa" }}>~</span>
                <span style={{ color: "#009922" }}>$ </span>
                <span style={{ color: "#00cc33" }}>whoami</span>
              </div>
            )}

            {/* Name output */}
            {phase >= 2 && (
              <div style={{ marginBottom: "20px" }}>
                <h1
                  style={{
                    fontSize: "clamp(2rem, 7vw, 4.5rem)",
                    fontWeight: 700,
                    margin: "8px 0",
                    lineHeight: 1,
                    color: "#00ff41",
                    textShadow: "0 0 20px rgba(0, 255, 65, 0.5), 0 0 60px rgba(0, 255, 65, 0.2)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Arun Setty
                </h1>
              </div>
            )}

            {/* System info block */}
            {phase >= 3 && (
              <div style={{ marginBottom: "20px", color: "#009922" }}>
                <div>
                  <span style={{ color: "#00ff41" }}>ROLE</span>
                  <span style={{ color: "#009922" }}>=</span>
                  <span style={{ color: "#00cc33" }}>"Fullstack Developer & Product Architect"</span>
                </div>
                <div>
                  <span style={{ color: "#00ff41" }}>STATUS</span>
                  <span style={{ color: "#009922" }}>=</span>
                  <span style={{ color: "#00cc33" }}>"Building at </span>
                  <a
                    href="https://brokenatom.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#00ff41",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Broken
                  </a>
                  <span style={{ color: "#00cc33" }}>"</span>
                </div>
                <div>
                  <span style={{ color: "#00ff41" }}>MISSION</span>
                  <span style={{ color: "#009922" }}>=</span>
                  <span style={{ color: "#00cc33" }}>"Building scalable systems that shape the world"</span>
                </div>
                <div style={{ marginTop: "8px", color: "#009922", fontSize: "0.85em" }}>
                  ---
                </div>
                <div style={{ color: "#009922", fontSize: "0.85em" }}>
                  uptime: 8+ years | companies: 8 | projects: 15+
                </div>
              </div>
            )}

            {/* Command links */}
            {phase >= 4 && (
              <>
                <div style={{ marginBottom: "4px" }}>
                  <span style={{ color: "#00ff41" }}>arun@portfolio</span>
                  <span style={{ color: "#009922" }}>:</span>
                  <span style={{ color: "#00ffaa" }}>~</span>
                  <span style={{ color: "#009922" }}>$ </span>
                  <span style={{ color: "#00cc33" }}>ls ./</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    marginBottom: "20px",
                    marginTop: "4px",
                  }}
                >
                  {[
                    { name: "work/", href: "/work", color: "#00ffaa" },
                    { name: "writing/", href: "/writing", color: "#00ffaa" },
                    { name: "journey/", href: "/journey", color: "#00ffaa" },
                    { name: "about.md", href: "/about", color: "#00cc33" },
                    { name: "now.md", href: "/now", color: "#00cc33" },
                    { name: "resume.pdf", href: "/resume.pdf", color: "#009922" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.name === "resume.pdf" ? "_blank" : undefined}
                      style={{
                        color: item.color,
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#00ff41";
                        e.currentTarget.style.textShadow = "0 0 10px rgba(0, 255, 65, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = item.color;
                        e.currentTarget.style.textShadow = "none";
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Waiting prompt */}
                <div>
                  <span style={{ color: "#00ff41" }}>arun@portfolio</span>
                  <span style={{ color: "#009922" }}>:</span>
                  <span style={{ color: "#00ffaa" }}>~</span>
                  <span style={{ color: "#009922" }}>$ </span>
                  {cursor}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Hint below terminal */}
        {phase >= 4 && (
          <div
            style={{
              textAlign: "center",
              marginTop: "32px",
              fontSize: "0.7rem",
              color: "#009922",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            scroll to explore
          </div>
        )}
      </div>
    </div>
  );
}

// ===== MAIN HERO — picks theme =====
export default function Hero() {
  const theme = useTheme();
  return theme === "terminal" ? <TerminalHero /> : <CinematicHero />;
}
