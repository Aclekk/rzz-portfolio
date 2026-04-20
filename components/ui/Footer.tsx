import { PERSONAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '1.75rem',
      borderTop: '1px solid rgba(0,212,255,0.15)',
      fontFamily: 'Orbitron, monospace',
      fontSize: '0.5rem',
      letterSpacing: '0.15em',
      color: 'rgba(100,150,160,0.4)',
    }}>
      © 2025 {PERSONAL.name.toUpperCase()} · ALL RIGHTS RESERVED
    </footer>
  )
}
