"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inputStyle: React.CSSProperties = {
    background: "#0a1628",
    border: "1px solid rgba(0,212,255,0.18)",
    color: "#c8e8f0",
    fontFamily: "Space Mono, monospace",
    fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)",
    padding: "0.7rem 1rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
  };

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <section
        id="contact"
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "80vh",
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
          05 · Contact
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
          Let's Connect
        </h2>

        <div className="contact-grid">
          {/* Left — links */}
          <div className="reveal-left delay-2">
            <p
              style={{
                fontSize: "clamp(0.7rem, 1.5vw, 0.78rem)",
                color: "#5a9aaa",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Always open to new opportunities, collaborations, or just chatting
              about tech and design!
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                {
                  label: "Li",
                  text: "linkedin.com/in/rachen-ziyad-zechran",
                  href: PERSONAL.linkedin,
                },
                {
                  label: "Gh",
                  text: "github.com/Aclekk",
                  href: PERSONAL.github,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    textDecoration: "none",
                    color: "#4a7a8a",
                    fontSize: "clamp(0.6rem, 1.3vw, 0.7rem)",
                    letterSpacing: "0.05em",
                    padding: "0.65rem",
                    border: "1px solid transparent",
                    transition: "all 0.3s",
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00D4FF";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                    e.currentTarget.style.background = "rgba(0,212,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4a7a8a";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      background: "#0a1628",
                      border: "1px solid rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      color: "#00D4FF",
                      fontFamily: "Orbitron, monospace",
                      flexShrink: 0,
                    }}
                  >
                    {l.label}
                  </div>
                  {l.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="reveal-right delay-2"
            style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
          >
            <input
              style={inputStyle}
              type="text"
              placeholder="// Name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00D4FF")}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)")
              }
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="// Email"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00D4FF")}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)")
              }
            />
            <textarea
              style={{ ...inputStyle, resize: "vertical", minHeight: "90px" }}
              placeholder="// Message"
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              onFocus={(e) => (e.currentTarget.style.borderColor = "#00D4FF")}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,212,255,0.18)")
              }
            />
            <button
              className="clip-btn"
              style={{
                alignSelf: "flex-start",
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#00D4FF")
              }
              onClick={() => {
                const subject = encodeURIComponent(
                  "Portfolio Contact — " + form.name,
                );
                const body = encodeURIComponent(
                  `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
                );
                window.open(
                  `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`,
                );
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
