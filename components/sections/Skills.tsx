'use client'

import { useScrollReveal, useSkillBars } from '@/lib/useScrollReveal'
import { SKILLS } from '@/lib/data'

export default function Skills() {
  useScrollReveal()
  useSkillBars()

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 3rem 4rem', maxWidth: '960px', margin: '0 auto' }}>
      <div className="reveal-zoom-in" style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.56rem', letterSpacing: '0.3em', color: '#00D4FF', textTransform: 'uppercase', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ width: 18, height: 1, background: '#00D4FF' }} />02 · Skills
      </div>
      <h2 className="reveal-zoom-in delay-1" style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 900, color: '#fff', marginBottom: '2rem' }}>
        Core Competencies
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '0.65rem' }}>
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            className={`reveal-zoom-in delay-${(i % 4) + 1}`}
            style={{ background: '#0a1628', border: '1px solid rgba(0,212,255,0.18)', padding: '0.9rem', transition: 'border-color 0.3s, transform 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.18)'; e.currentTarget.style.transform = '' }}
          >
            <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.55rem', letterSpacing: '0.06em', color: '#c8e8f0', marginBottom: '0.5rem' }}>{s.name}</div>
            <div style={{ height: '1.5px', background: 'rgba(0,212,255,0.1)', overflow: 'hidden' }}>
              <div
                className="skill-fill"
                data-width={s.pct}
                style={{ height: '100%', background: '#00D4FF', width: 0, transition: 'width 1.3s ease' }}
              />
            </div>
            <div style={{ fontSize: '0.6rem', color: '#00D4FF', textAlign: 'right', marginTop: '0.25rem' }}>{s.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
