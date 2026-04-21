"use client";

import { PERSONAL, TRAITS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .traits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.7rem;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .traits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        id="about"
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
          <div
            style={{
              width: 18,
              height: 1,
              background: "#00D4FF",
              flexShrink: 0,
            }}
          />
          01 · About
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
          Who Am I?
        </h2>

        <div className="about-grid">
          {/* Bio */}
          <div className="reveal-left delay-2">
            <p
              style={{
                fontSize: "clamp(0.7rem, 1.5vw, 0.78rem)",
                lineHeight: 1.9,
                color: "#5a9aaa",
              }}
            >
              {PERSONAL.bio}
              <br />
              <br />
              {PERSONAL.bio2}
            </p>

            {/* Quick stats */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "1.8rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "6+", label: "Projects Shipped" },
                { num: "3+", label: "Languages" },
                { num: "Top10", label: "Intl. Finalist" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "Orbitron, monospace",
                      fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                      fontWeight: 900,
                      color: "#00D4FF",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "Orbitron, monospace",
                      fontSize: "0.48rem",
                      letterSpacing: "0.1em",
                      color: "#4a7a8a",
                      marginTop: "0.2rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trait cards */}
          <div className="traits-grid reveal-right delay-2">
            {TRAITS.map((t) => (
              <div
                key={t.title}
                style={{
                  background: "#0a1628",
                  border: "1px solid rgba(0,212,255,0.18)",
                  padding: "1rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00D4FF";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 3,
                    height: "100%",
                    background: "#00D4FF",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Orbitron, monospace",
                    fontSize: "0.58rem",
                    color: "#00D4FF",
                    letterSpacing: "0.1em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#4a7a8a",
                    lineHeight: 1.6,
                  }}
                >
                  {t.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
