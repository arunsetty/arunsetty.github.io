import React from "react";

const COLORS = {
  bg: "#f5efe1",
  ink: "#1a1715",
  soft: "#5a534a",
  quiet: "#8a8175",
  accent: "#b8362d",
};

interface CardProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function Card({ title, description, eyebrow }: CardProps) {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        background: COLORS.bg,
        padding: "80px",
        fontFamily: "Fraunces",
        color: COLORS.ink,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            background: COLORS.accent,
            color: COLORS.bg,
            padding: "10px 20px",
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          A·S·K
        </div>
        {eyebrow && (
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: COLORS.quiet,
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: COLORS.ink,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            fontWeight: 400,
            lineHeight: 1.35,
            color: COLORS.soft,
            marginTop: "28px",
            maxWidth: "1000px",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: COLORS.quiet,
            fontWeight: 400,
          }}
        >
          arunsetty.github.io
        </div>
        <div
          style={{
            display: "flex",
            width: "120px",
            height: "4px",
            background: COLORS.accent,
          }}
        />
      </div>
    </div>
  );
}
