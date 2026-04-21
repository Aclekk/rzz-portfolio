"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  useScrollReveal();

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem clamp(1.25rem, 5vw, 3rem) 4rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <div
        className="reveal-right"
        style={{
          fontFamily: "Orbitron, monospace",
          fontSize: "0.56rem",
          letterSpacing: "0.3em",
          color: "#00D4FF",
          textTransform: "uppercase",
          marginBottom: "0.7rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
        }}
      >
        <div style={{ width: 18, height: 1, background: "#00D4FF" }} />
        04 · Experience
      </div>

      <h2
        className="reveal-right delay-1"
        style={{
          fontFamily: "Orbitron, monospace",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 900,
          color: "#fff",
          marginBottom: "2rem",
        }}
      >
        Timeline
      </h2>

      <div
        style={{
          position: "relative",
          paddingLeft: "clamp(1.5rem, 4vw, 2rem)",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(0,212,255,0.18)",
          }}
        />

        {EXPERIENCE.map((e, i) => (
          <div
            key={e.role + e.date}
            className={`reveal-left delay-${Math.min(i + 1, 5)}`}
            style={{ position: "relative", paddingBottom: "2.2rem" }}
          >
            {/* Diamond dot */}
            <div
              style={{
                position: "absolute",
                left: "clamp(-1.85rem, -3.5vw, -2.3rem)",
                top: "0.28rem",
                width: 9,
                height: 9,
                border: "1px solid #00D4FF",
                background: "#00D4FF",
                transform: "rotate(45deg)",
                transition: "background 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.background = "transparent";
                ev.currentTarget.style.transform = "rotate(135deg)";
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.background = "#00D4FF";
                ev.currentTarget.style.transform = "rotate(45deg)";
              }}
            />

            <div
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(0.45rem, 1.2vw, 0.55rem)",
                color: "#00D4FF",
                letterSpacing: "0.15em",
                marginBottom: "0.25rem",
              }}
            >
              {e.date}
            </div>
            <div
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
                color: "#fff",
                letterSpacing: "0.04em",
                marginBottom: "0.18rem",
              }}
            >
              {e.role}
            </div>
            <div
              style={{
                fontSize: "clamp(0.6rem, 1.3vw, 0.68rem)",
                color: "#4a7a8a",
                marginBottom: "0.5rem",
              }}
            >
              {e.org}
            </div>
            <div
              style={{
                fontSize: "clamp(0.62rem, 1.3vw, 0.68rem)",
                color: "#5a9aaa",
                lineHeight: 1.8,
              }}
            >
              {e.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
