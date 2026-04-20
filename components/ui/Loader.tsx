'use client'

import { useEffect, useRef, useState } from 'react'
import { PERSONAL } from '@/lib/data'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [slideIn, setSlideIn]   = useState(false)
  const [exiting, setExiting]   = useState(false)
  const [hidden, setHidden]     = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Slight delay then slide name in
    const t1 = setTimeout(() => setSlideIn(true), 150)

    // Start filling bar
    const t2 = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 5 + 1.5
          if (next >= 100) {
            clearInterval(intervalRef.current!)
            // Exit sequence
            setTimeout(() => setExiting(true), 320)
            setTimeout(() => setHidden(true), 1150)
            return 100
          }
          return next
        })
      }, 55)
    }, 400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: exiting ? 'loaderOut 0.9s cubic-bezier(0.76,0,0.24,1) forwards' : undefined,
      }}
    >
      <style>{`
        @keyframes loaderOut {
          0%   { opacity: 1; transform: scale(1); }
          45%  { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0; transform: scale(1.14); pointer-events: none; }
        }
      `}</style>

      {/* Name */}
      <div
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(3.5rem, 12vw, 7rem)',
          fontWeight: 900,
          color: '#e8e8e8',
          letterSpacing: '0.25em',
          opacity: slideIn ? 1 : 0,
          transform: slideIn ? 'none' : 'translateY(10px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <span style={{ color: '#00D4FF' }}>
          {PERSONAL.initials[0]}
        </span>
        {PERSONAL.initials.slice(1)}
      </div>

      {/* Bar wrapper */}
      <div
        style={{
          width: 'clamp(180px, 32vw, 360px)',
          height: '1.5px',
          background: 'rgba(255,255,255,0.1)',
          marginTop: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          opacity: slideIn ? 1 : 0,
          transition: 'opacity 0.5s 0.4s',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            height: '100%',
            width: `${Math.min(progress, 100)}%`,
            background: '#e8e8e8',
            transition: 'width 0.06s linear',
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '0.55rem',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.28)',
          marginTop: '1rem',
          opacity: slideIn ? 1 : 0,
          transition: 'opacity 0.5s 0.5s',
        }}
      >
        {Math.floor(Math.min(progress, 100))}%
      </div>
    </div>
  )
}
