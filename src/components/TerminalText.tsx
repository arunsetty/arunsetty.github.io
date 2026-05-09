import { useEffect, useState, useRef } from "react";

interface Props {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  onComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function TerminalText({
  lines,
  speed = 40,
  lineDelay = 300,
  onComplete,
  className,
  style,
}: Props) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const completed = useRef(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      if (!completed.current) {
        completed.current = true;
        onComplete?.();
      }
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, speed + Math.random() * 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay, onComplete]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className} style={{ fontFamily: "var(--font-mono)", ...style }}>
      {displayedLines.map((line, i) => (
        <div key={i} style={{ minHeight: "1.5em", whiteSpace: "pre-wrap" }}>
          {line}
          {i === currentLine && (
            <span
              style={{
                color: "var(--accent-primary)",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              _
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
