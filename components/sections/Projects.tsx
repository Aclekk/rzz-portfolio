"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  useScrollReveal();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`,
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`,
    );
  };

  return (
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        id="projects"
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
          className="reveal-left"
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
          03 · Projects
        </div>

        <h2
          className="reveal-left delay-1"
          style={{
            fontFamily: "Orbitron, monospace",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "2rem",
          }}
        >
          Featured Work
        </h2>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal-zoom-out delay-${(i % 3) + 1}`}
              onMouseMove={handleMouseMove}
              style={{
                background: "#0a1628",
                border: "1px solid rgba(0,212,255,0.18)",
                padding: "1.3rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition:
                  "border-color 0.3s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00D4FF";
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 24px 24px 0",
                  borderColor: "transparent #00D4FF transparent transparent",
                }}
              />

              {/* Number */}
              <div
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "0.5rem",
                  color: "rgba(0,212,255,0.3)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.6rem",
                }}
              >
                [ {String(i + 1).padStart(2, "0")} ]
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.3rem",
                  marginBottom: "0.8rem",
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "Orbitron, monospace",
                      fontSize: "0.48rem",
                      letterSpacing: "0.08em",
                      padding: "0.16rem 0.5rem",
                      background: "rgba(0,212,255,0.07)",
                      border: "1px solid rgba(0,212,255,0.18)",
                      color: "#00D4FF",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                  color: "#fff",
                  letterSpacing: "0.04em",
                  marginBottom: "0.45rem",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#4a7a8a",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
