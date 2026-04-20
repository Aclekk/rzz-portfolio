"use client";

import Image from "next/image";
import { PERSONAL } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 3rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Left — text content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "Orbitron, monospace",
            fontSize: "0.5rem",
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
            fontSize: "0.62rem",
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
          style={{
            fontFamily: "Orbitron, monospace",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            opacity: 0,
            animation: "fadeUp 0.7s 1.65s forwards",
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

        {/* Role */}
        <p
          style={{
            fontFamily: "Orbitron, monospace",
            fontSize: "0.78rem",
            color: "rgba(100,160,180,0.7)",
            letterSpacing: "0.15em",
            marginTop: "0.6rem",
            opacity: 0,
            animation: "fadeUp 0.7s 1.8s forwards",
          }}
        >
          {PERSONAL.tagline}
        </p>

        {/* Description */}
        <p
          style={{
            maxWidth: "480px",
            marginTop: "1.4rem",
            fontSize: "0.78rem",
            lineHeight: 1.9,
            color: "#5a9aaa",
            opacity: 0,
            animation: "fadeUp 0.7s 1.95s forwards",
          }}
        >
          {PERSONAL.bio} {PERSONAL.bio2}
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.8rem",
            opacity: 0,
            animation: "fadeUp 0.7s 2.1s forwards",
          }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="clip-btn"
            style={{
              fontFamily: "Orbitron, monospace",
              fontSize: "0.55rem",
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
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00D4FF")}
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="clip-btn"
            style={{
              fontFamily: "Orbitron, monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.65rem 1.6rem",
              background: "transparent",
              color: "#00D4FF",
              border: "1px solid rgba(0,212,255,0.3)",
              cursor: "pointer",
              fontWeight: 700,
              transition: "all 0.3s",
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

      {/* Right — profile photo */}
      <div
        style={{
          flexShrink: 0,
          marginLeft: "4rem",
          opacity: 0,
          animation: "fadeUp 0.7s 1.5s forwards",
        }}
      >
        {/* Outer glow ring */}
        <div
          style={{
            position: "relative",
            width: 280,
            height: 340,
          }}
        >
          {/* Animated corner accents */}
          <div
            style={{
              position: "absolute",
              top: -6,
              left: -6,
              width: 24,
              height: 24,
              borderTop: "2px solid #00D4FF",
              borderLeft: "2px solid #00D4FF",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              width: 24,
              height: 24,
              borderTop: "2px solid #00D4FF",
              borderRight: "2px solid #00D4FF",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: -6,
              width: 24,
              height: 24,
              borderBottom: "2px solid #00D4FF",
              borderLeft: "2px solid #00D4FF",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -6,
              right: -6,
              width: 24,
              height: 24,
              borderBottom: "2px solid #00D4FF",
              borderRight: "2px solid #00D4FF",
              zIndex: 2,
            }}
          />

          {/* Glow behind image */}
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
            {/* Subtle cyan overlay at bottom */}
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

          {/* Scan line effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.015) 3px, rgba(0,212,255,0.015) 4px)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "3rem",
          display: "flex",
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
  );
}
