'use client'

import { useEffect, useState } from 'react'
import { PERSONAL } from '@/lib/data'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Show nav after loader finishes (~1.2s)
    const t = setTimeout(() => setVisible(true), 1200)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2.5rem',
        background: scrolled ? 'rgba(2,8,18,0.9)' : 'rgba(2,8,18,0.7)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(0,212,255,0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(-8px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s',
      }}
    >
      {/* Logo */}
      <span style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: '1.1rem',
        fontWeight: 900,
        color: '#00D4FF',
        letterSpacing: '0.2em',
        cursor: 'pointer',
      }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {PERSONAL.initials}
      </span>

      {/* Links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.55rem',
                color: 'rgba(100,180,200,0.6)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.3s',
                padding: '0.25rem 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00D4FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(100,180,200,0.6)')}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
