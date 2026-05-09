import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS, EXPERIENCE } from "../consts";

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

// ============================================
// SECTION 1: Featured Work — cards slide in
// ============================================
interface Project {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export function FeaturedWorkSection({ projects }: { projects: Project[] }) {
  const theme = useTheme();
  const isTerminal = theme === "terminal";
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 80,
          opacity: 0,
          rotateY: isTerminal ? 0 : -5,
          duration: 0.7,
          delay: i * 0.15,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isTerminal]);

  return (
    <div ref={sectionRef} style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <div ref={headerRef} style={{ marginBottom: "60px" }}>
          {isTerminal ? (
            <>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#009922", marginBottom: "12px" }}>
                <span style={{ color: "#00ff41" }}>$</span> cat ./work/featured.log
              </div>
              <h2
                className="gradient-text"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}
              >
                Selected Work
              </h2>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--accent-primary)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Selected Work
                </span>
              </div>
              <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}>
                Things I've Built
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "500px", margin: 0 }}>
                Each project taught me something different about building software that matters.
              </p>
            </>
          )}
        </div>

        {/* Project cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <a
              key={project.slug}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              href={`/work/${project.slug}`}
              className="glass-card"
              style={{
                display: "block",
                padding: isTerminal ? "24px" : "32px",
                textDecoration: "none",
                perspective: isTerminal ? undefined : "600px",
              }}
            >
              {isTerminal ? (
                <>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#009922", marginBottom: "8px" }}>
                    ./work/{project.slug}/
                  </div>
                  <h3 style={{ fontSize: "1.1rem", color: "#00ff41", margin: "0 0 8px", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "#00cc33", fontSize: "0.8rem", lineHeight: 1.6, margin: "0 0 16px", fontFamily: "var(--font-mono)" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "2px 8px",
                          fontSize: "0.65rem",
                          fontFamily: "var(--font-mono)",
                          color: "#009922",
                          border: "1px solid rgba(0, 255, 65, 0.2)",
                        }}
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {project.featured && (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "12px", display: "block" }}>
                      Featured
                    </span>
                  )}
                  <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", margin: "0 0 12px", fontWeight: 600 }}>
                    {project.title}
                    <span style={{ marginLeft: "8px", fontSize: "0.85rem", display: "inline-block", transition: "transform 0.3s" }}>&rarr;</span>
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 20px" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ padding: "2px 10px", borderRadius: "4px", fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </a>
          ))}
        </div>

        {/* View all link */}
        <div style={{ marginTop: "40px" }}>
          <a
            href="/work"
            className="glass-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--accent-primary)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              gap: "8px",
            }}
          >
            {isTerminal ? "$ ls ./work/" : "View All Work"}
            {!isTerminal && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION 2: Skills — orbit / flowing grid
// ============================================
export function SkillsFlowSection() {
  const theme = useTheme();
  const isTerminal = theme === "terminal";
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allCategories = [
    { label: "Languages", items: SKILLS.languages, cmd: "languages" },
    { label: "Frameworks", items: SKILLS.frameworks, cmd: "frameworks" },
    { label: "Tools", items: SKILLS.tools, cmd: "tools" },
    { label: "Design", items: SKILLS.design, cmd: "design" },
  ];

  return (
    <div ref={sectionRef} style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div ref={titleRef} style={{ marginBottom: "60px" }}>
          {isTerminal ? (
            <>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#009922", marginBottom: "12px" }}>
                <span style={{ color: "#00ff41" }}>$</span> pacman -Q --installed
              </div>
              <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}>
                Installed Packages
              </h2>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--accent-primary)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Toolbox
                </span>
              </div>
              <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}>
                Skills & Tools
              </h2>
            </>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {allCategories.map((cat, catIdx) => (
            <div
              key={cat.label}
              ref={(el) => { if (el) rowRefs.current[catIdx] = el; }}
            >
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "16px",
              }}>
                {isTerminal ? `# ${cat.cmd}/` : cat.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      padding: isTerminal ? "6px 14px" : "8px 18px",
                      borderRadius: isTerminal ? "0" : "8px",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-secondary)",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          border-color: var(--accent-primary) !important;
          color: var(--accent-primary) !important;
          box-shadow: 0 0 20px var(--glow-color);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

// ============================================
// SECTION 3: Stats / Quick facts
// ============================================
function AnimatedCounter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        className="gradient-text"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
        {label}
      </div>
    </div>
  );
}

// Terminal-style stat line
function TerminalStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "4px" }}>
      <span style={{ color: "#00ff41" }}>{label}</span>
      <span style={{ color: "#009922" }}>: </span>
      <span style={{ color: "#00cc33" }}>{value}</span>
    </div>
  );
}

export function StatsSection() {
  const theme = useTheme();
  const isTerminal = theme === "terminal";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (isTerminal) {
    return (
      <div ref={ref} style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div
            className="glass-card"
            style={{ padding: "32px", fontFamily: "var(--font-mono)" }}
          >
            <div style={{ fontSize: "0.7rem", color: "#009922", marginBottom: "16px" }}>
              <span style={{ color: "#00ff41" }}>$</span> neofetch --stats
            </div>
            <div style={{ borderLeft: "2px solid rgba(0, 255, 65, 0.3)", paddingLeft: "16px" }}>
              <TerminalStat label="experience" value="8+ years" />
              <TerminalStat label="companies" value="8" />
              <TerminalStat label="projects" value="15+" />
              <TerminalStat label="roles" value="4" />
              <TerminalStat label="stack" value="fullstack" />
              <TerminalStat label="editor" value="vscode" />
              <TerminalStat label="shell" value="zsh" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
        <div className="glass-card" style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "40px" }}>
          <AnimatedCounter end={8} label="Years Coding" suffix="+" />
          <AnimatedCounter end={8} label="Companies" suffix="" />
          <AnimatedCounter end={15} label="Projects" suffix="+" />
          <AnimatedCounter end={4} label="Roles" suffix="" />
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION 4: Experience preview
// ============================================
export function ExperiencePreview() {
  const theme = useTheme();
  const isTerminal = theme === "terminal";
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const recent = EXPERIENCE.slice(0, 4);

  return (
    <div ref={sectionRef} style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div ref={titleRef} style={{ marginBottom: "60px" }}>
          {isTerminal ? (
            <>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#009922", marginBottom: "12px" }}>
                <span style={{ color: "#00ff41" }}>$</span> git log --oneline --author="arun"
              </div>
              <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}>
                Work History
              </h2>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--accent-primary)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Experience
                </span>
              </div>
              <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 16px", fontWeight: 700 }}>
                Where I've Worked
              </h2>
            </>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {recent.map((exp, i) => (
            <div
              key={exp.company}
              ref={(el) => { if (el) itemsRef.current[i] = el; }}
              className="glass-card"
              style={{ padding: isTerminal ? "20px" : "28px" }}
            >
              {isTerminal ? (
                <>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#009922", marginBottom: "8px" }}>
                    {exp.time}
                  </div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "1rem", fontWeight: 600, color: "#00ff41", fontFamily: "var(--font-mono)" }}>
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                      {exp.company}
                    </a>
                  </h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#00cc33", margin: 0 }}>
                    {exp.position}
                  </p>
                </>
              ) : (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                        {exp.company}
                      </a>
                    </h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)", margin: "0 0 4px" }}>
                    {exp.position}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", margin: 0 }}>
                    {exp.time}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="/journey"
            className="glass-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--accent-primary)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              gap: "8px",
            }}
          >
            {isTerminal ? "$ cat ./journey" : "Full Journey"}
            {!isTerminal && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION 5: Writing teaser
// ============================================
export function WritingTeaser() {
  const theme = useTheme();
  const isTerminal = theme === "terminal";
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} style={{ padding: "120px 0" }}>
      <div ref={contentRef} style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        {isTerminal ? (
          <>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#009922", marginBottom: "12px" }}>
              <span style={{ color: "#00ff41" }}>$</span> cat ./writing/README.md
            </div>
            <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 20px", fontWeight: 700 }}>
              ./writing/
            </h2>
            <p style={{ color: "#00cc33", fontSize: "1rem", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 36px", fontFamily: "var(--font-mono)" }}>
              // On building software, philosophy,<br />
              // and the spaces in between.
            </p>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--accent-primary)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                Writing
              </span>
              <div style={{ width: "40px", height: "1px", background: "var(--accent-primary)" }} />
            </div>
            <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 20px", fontWeight: 700 }}>
              Thoughts & Essays
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 36px" }}>
              On building software, philosophy, and the spaces in between.
              Slow thinking in a fast world.
            </p>
          </>
        )}
        <a
          href="/writing"
          className="glass-card"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "14px 32px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--accent-primary)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            gap: "8px",
          }}
        >
          {isTerminal ? "$ ls ./writing/" : "Read My Writing"}
          {!isTerminal && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
}
