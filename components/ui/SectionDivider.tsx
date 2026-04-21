// SectionDivider.tsx
export default function SectionDivider({ label }: { label: string }) {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 10,
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(1.25rem, 5vw, 3rem)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
        }}
      />
      <span
        style={{
          fontFamily: "Orbitron, monospace",
          fontSize: "clamp(0.42rem, 1.2vw, 0.5rem)",
          letterSpacing: "0.3em",
          color: "#00D4FF",
          background: "#020812",
          padding: "0 1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}
