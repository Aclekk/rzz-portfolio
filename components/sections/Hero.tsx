"use client";

import Image from "next/image";
import { PERSONAL } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .hero-layout {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .hero-left {
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-right {
          flex-shrink: 0;
          margin-left: 2rem;
        }
        .hero-photo-frame {
          position: relative;
          width: 280px;
          height: 340px;
        }
        .hero-scroll-hint {
          display: flex;
        }

        /* Typewriter effect */
        .typewriter-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #00D4FF;
          animation: typewriter 2s steps(30, end) 2.2s both,
                     cursorBlink 0.8s step-end 2.2s infinite;
          max-width: fit-content;
        }

        /* Glitch on name hover */
        .hero-name:hover {
          animation: glitch1 0.4s linear;
        }

        @media (max-width: 900px) {
          .hero-layout {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
            padding-top: 6rem !important;
            padding-bottom: 3rem !important;
            gap: 2rem;
          }
          .hero-left {
            align-items: center;
          }
          .hero-right {
            margin-left: 0;
          }
          .hero-photo-frame {
            width: 200px;
            height: 240px;
          }
          .hero-scroll-hint {
            display: none;
          }
          .hero-desc {
            max-width: 100% !important;
            text-align: center !important;
          }
        }

        @media (max-width: 640px) {
          .hero-photo-frame {
            width: 160px;
            height: 195px;
          }
          .hero-btns {
            justify-content: center;
          }
        }
      `}</style>

      <section
        id="hero"
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.25rem, 5vw, 3rem)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div className="hero-layout" style={{ width: "100%" }}>
          {/* ── Left: text ───────────────────────────────── */}
          <div className="hero-left">
            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(0.42rem, 1.2vw, 0.5rem)",
                letterSpacing: "0.15em",
                color: "#00D4FF",
                padding: "0.3rem 0.8rem",
                border: "1px solid rgba(0,212,255,0.3)",
                marginBottom: "1.5rem",
                width: "fit-content",
                opacity: 0,
                animation: "fadeUp 0.7s 1.3s forwards",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00ff88",
                  animation: "blink 1.5s infinite",
                  flexShrink: 0,
                }}
              />
              {PERSONAL.status}
            </div>

            {/* Eyebrow */}
            <div
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(0.52rem, 1.5vw, 0.62rem)",
                letterSpacing: "0.3em",
                color: "#00D4FF",
                marginBottom: "1.2rem",
                opacity: 0,
                animation: "fadeUp 0.7s 1.5s forwards",
              }}
            >
              {PERSONAL.eyebrow}
            </div>

            {/* Name */}
            <h1
              className="hero-name"
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(1.8rem, 5.5vw, 4rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                opacity: 0,
                animation: "fadeUp 0.7s 1.65s forwards",
                cursor: "default",
              }}
            >
              {PERSONAL.name.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span style={{ color: "#00D4FF" }}>{word}</span>
                  ) : (
                    word
                  )}
                  <br />
                </span>
              ))}
            </h1>

            {/* Typewriter role */}
            <div
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "clamp(0.6rem, 1.5vw, 0.78rem)",
                color: "rgba(100,160,180,0.8)",
                letterSpacing: "0.15em",
                marginTop: "0.6rem",
                opacity: 0,
                animation: "fadeUp 0.7s 1.8s forwards",
              }}
            >
              <span className="typewriter-text">{PERSONAL.tagline}</span>
            </div>

            {/* SE-focused bio */}
            <p
              className="hero-desc"
              style={{
                maxWidth: "480px",
                marginTop: "1.4rem",
                fontSize: "clamp(0.68rem, 1.5vw, 0.78rem)",
                lineHeight: 1.9,
                color: "#5a9aaa",
                opacity: 0,
                animation: "fadeUp 0.7s 1.95s forwards",
              }}
            >
              <span
                style={{
                  color: "#00D4FF",
                  fontFamily: "Orbitron, monospace",
                  fontSize: "0.6rem",
                }}
              >
                &gt;_
              </span>{" "}
              Informatics student @{" "}
              <span style={{ color: "#c8e8f0" }}>
                Universitas Multimedia Nusantara
              </span>
              . Building scalable web systems and secure platforms with{" "}
              <span style={{ color: "#c8e8f0" }}>
                TypeScript, React, Next.js
              </span>
              .
              <br />
              <br />
              Currently interning as{" "}
              <span style={{ color: "#00D4FF", fontWeight: 700 }}>
                Software Engineer
              </span>{" "}
              at Diskominfo Kota Tangerang — shipping a full-scale IT service
              platform for all city ASNs, with{" "}
              <span style={{ color: "#c8e8f0" }}>AI chatbot integration</span>{" "}
              and multi-service infra.
            </p>

            {/* CTA */}
            <div
              className="hero-btns"
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1.8rem",
                opacity: 0,
                animation: "fadeUp 0.7s 2.1s forwards",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="clip-btn"
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "clamp(0.45rem, 1.2vw, 0.55rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.65rem 1.6rem",
                  background: "#00D4FF",
                  color: "#020812",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  transition: "background 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#00D4FF")
                }
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="clip-btn"
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "clamp(0.45rem, 1.2vw, 0.55rem)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.65rem 1.6rem",
                  background: "transparent",
                  color: "#00D4FF",
                  border: "1px solid rgba(0,212,255,0.3)",
                  cursor: "pointer",
                  fontWeight: 700,
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00D4FF";
                  e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                View Work
              </button>
            </div>
          </div>

          {/* ── Right: photo ──────────────────────────────── */}
          <div
            className="hero-right"
            style={{
              opacity: 0,
              animation: "fadeUp 0.7s 1.5s forwards",
            }}
          >
            <div className="hero-photo-frame">
              {/* Corner accents */}
              {[
                {
                  top: -6,
                  left: -6,
                  borderTop: "2px solid #00D4FF",
                  borderLeft: "2px solid #00D4FF",
                },
                {
                  top: -6,
                  right: -6,
                  borderTop: "2px solid #00D4FF",
                  borderRight: "2px solid #00D4FF",
                },
                {
                  bottom: -6,
                  left: -6,
                  borderBottom: "2px solid #00D4FF",
                  borderLeft: "2px solid #00D4FF",
                },
                {
                  bottom: -6,
                  right: -6,
                  borderBottom: "2px solid #00D4FF",
                  borderRight: "2px solid #00D4FF",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 24,
                    height: 24,
                    zIndex: 2,
                    ...s,
                  }}
                />
              ))}

              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />

              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(0,212,255,0.25)",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/rachenprofile.jpeg"
                  alt="Rachen Ziyad Zechran"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "brightness(0.95) contrast(1.05)",
                  }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(0,20,40,0.6) 0%, transparent 100%)",
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Scan lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.015) 3px, rgba(0,212,255,0.015) 4px)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="hero-scroll-hint"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "clamp(1.25rem, 5vw, 3rem)",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "Orbitron, monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.25em",
            color: "rgba(100,150,160,0.5)",
            opacity: 0,
            animation: "fadeUp 0.7s 2.4s forwards",
          }}
        >
          <div
            style={{
              width: 32,
              height: 1,
              background: "#00D4FF",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "#fff",
                animation: "scanline 2s infinite",
              }}
            />
          </div>
          SCROLL
        </div>
      </section>
    </>
  );
}
