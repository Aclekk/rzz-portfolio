"use client";

import { useEffect, useState } from "react";
import { PERSONAL } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth <= 768);

    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <style>{`
        .nav-links-desktop {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          z-index: 201;
        }
        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #00D4FF;
          transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
          transform-origin: center;
        }
        .hamburger-btn.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .hamburger-btn     { display: flex; }
        }
      `}</style>

      {/* ── Top nav bar ─────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem clamp(1.25rem, 4vw, 2.5rem)",
          background: scrolled ? "rgba(2,8,18,0.95)" : "rgba(2,8,18,0.7)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(-8px)",
          transition: "opacity 0.6s ease, transform 0.6s ease, background 0.3s",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "Orbitron, monospace",
            fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
            fontWeight: 900,
            color: "#00D4FF",
            letterSpacing: "0.2em",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {PERSONAL.initials}
        </span>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                style={{
                  fontFamily: "Orbitron, monospace",
                  fontSize: "0.55rem",
                  color: "rgba(100,180,200,0.6)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                  padding: "0.25rem 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(100,180,200,0.6)")
                }
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile fullscreen menu ──────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 199,
          background: "rgba(2,8,18,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Grid background inside menu */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        {links.map((l, i) => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            style={{
              fontFamily: "Orbitron, monospace",
              fontSize: "clamp(1.2rem, 5vw, 1.6rem)",
              fontWeight: 700,
              color: menuOpen ? "#c8e8f0" : "transparent",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: `color 0.3s, transform 0.3s`,
              transitionDelay: menuOpen ? `${i * 0.06}s` : "0s",
              transform: menuOpen ? "none" : "translateY(20px)",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c8e8f0")}
          >
            <span
              style={{
                color: "#00D4FF",
                fontSize: "0.6rem",
                marginRight: "0.5rem",
                verticalAlign: "middle",
              }}
            >
              0{i + 1}.
            </span>
            {l.label}
          </button>
        ))}

        {/* Social links in menu */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            gap: "1.5rem",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s 0.3s",
          }}
        >
          {[
            { label: "GH", href: "https://github.com/Aclekk" },
            {
              label: "LI",
              href: "https://www.linkedin.com/in/rachen-ziyad-zechran-118352279",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Orbitron, monospace",
                fontSize: "0.6rem",
                color: "rgba(100,180,200,0.5)",
                textDecoration: "none",
                letterSpacing: "0.2em",
                border: "1px solid rgba(0,212,255,0.2)",
                padding: "0.4rem 0.8rem",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00D4FF";
                e.currentTarget.style.borderColor = "#00D4FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(100,180,200,0.5)";
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
