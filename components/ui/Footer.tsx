import { PERSONAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "2rem clamp(1.25rem, 5vw, 3rem)",
        borderTop: "1px solid rgba(0,212,255,0.15)",
      }}
    >
      <div
        style={{
          fontFamily: "Orbitron, monospace",
          fontSize: "clamp(0.42rem, 1vw, 0.5rem)",
          letterSpacing: "0.15em",
          color: "rgba(100,150,160,0.4)",
          marginBottom: "0.8rem",
        }}
      >
        © 2025 {PERSONAL.name.toUpperCase()} · ALL RIGHTS RESERVED
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "GitHub", href: PERSONAL.github },
          { label: "LinkedIn", href: PERSONAL.linkedin },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Orbitron, monospace",
              fontSize: "0.48rem",
              letterSpacing: "0.12em",
              color: "rgba(0,212,255,0.35)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(0,212,255,0.35)")
            }
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
