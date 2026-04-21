"use client";

import { useScrollReveal, useSkillBars } from "@/lib/useScrollReveal";
import { SKILLS, CERTIFICATIONS } from "@/lib/data";

export default function Skills() {
  useScrollReveal();
  useSkillBars();

  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
          gap: 0.65rem;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.65rem;
          margin-top: 1rem;
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        id="skills"
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
          className="reveal-zoom-in"
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
          02 · Skills
        </div>

        <h2
          className="reveal-zoom-in delay-1"
          style={{
            fontFamily: "Orbitron, monospace",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "2rem",
          }}
        >
          Core Competencies
        </h2>

        {/* Skill bars */}
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className={`reveal-zoom-in delay-${(i % 4) + 1}`}
              style={{
                background: "#0a1628",
                border: "1px solid rgba(0,212,255,0.18)",
                padding: "0.9rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00D4FF";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)";
                e.currentTarget.style.transform = "";
              }}
            >
              <div
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "clamp(0.48rem, 1.2vw, 0.55rem)",
                  letterSpacing: "0.06em",
                  color: "#c8e8f0",
                  marginBottom: "0.5rem",
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  height: "1.5px",
                  background: "rgba(0,212,255,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="skill-fill"
                  data-width={s.pct}
                  style={{
                    height: "100%",
                    background: "#00D4FF",
                    width: 0,
                    transition: "width 1.3s ease",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "#00D4FF",
                  textAlign: "right",
                  marginTop: "0.25rem",
                }}
              >
                {s.pct}%
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: "3rem" }}>
          <h3
            className="reveal-zoom-in"
            style={{
              fontFamily: "Orbitron, monospace",
              fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
              fontWeight: 700,
              color: "#c8e8f0",
              marginBottom: "0.5rem",
              letterSpacing: "0.1em",
            }}
          >
            Certifications & Awards
          </h3>

          <div className="certs-grid">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.name}
                className={`reveal-zoom-in delay-${(i % 3) + 1}`}
                style={{
                  background: "#0a1628",
                  border: "1px solid rgba(0,212,255,0.12)",
                  padding: "0.75rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)")
                }
              >
                <div
                  style={{
                    fontFamily: "Orbitron, monospace",
                    fontSize: "clamp(0.48rem, 1.2vw, 0.56rem)",
                    color: "#c8e8f0",
                    letterSpacing: "0.05em",
                    lineHeight: 1.4,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontSize: "0.58rem",
                    color: "#00D4FF",
                    opacity: 0.7,
                  }}
                >
                  {c.issuer} · {c.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
