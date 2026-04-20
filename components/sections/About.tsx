"use client";

import { useEffect } from "react";
import { PERSONAL, TRAITS } from "@/lib/data";
import { useScrollReveal } from "@/lib/useScrollReveal";

const S: React.CSSProperties = {
  position: "relative",
  zIndex: 10,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "6rem 3rem 4rem",
  maxWidth: "960px",
  margin: "0 auto",
};

function SLabel({
  n,
  text,
  cls = "reveal-left",
}: {
  n: string;
  text: string;
  cls?: string;
}) {
  return (
    <div
      className={cls}
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
        style={{ width: 18, height: 1, background: "#00D4FF", flexShrink: 0 }}
      />
      {n} · {text}
    </div>
  );
}

function STitle({
  children,
  cls = "reveal-left delay-1",
}: {
  children: React.ReactNode;
  cls?: string;
}) {
  return (
    <h2
      className={cls}
      style={{
        fontFamily: "Orbitron, monospace",
        fontSize: "clamp(1.4rem, 3vw, 2rem)",
        fontWeight: 900,
        color: "#fff",
        marginBottom: "2rem",
      }}
    >
      {children}
    </h2>
  );
}

export default function About() {
  useScrollReveal();
  return (
    <section id="about" style={S}>
      <SLabel n="01" text="About" />
      <STitle>Who Am I?</STitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        <p
          className="reveal-left delay-2"
          style={{ fontSize: "0.78rem", lineHeight: 1.9, color: "#5a9aaa" }}
        >
          {PERSONAL.bio}
          <br />
          <br />
          {PERSONAL.bio2}
        </p>
        <div
          className="reveal-right delay-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.7rem",
          }}
        >
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
  );
}
