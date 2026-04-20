export default function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)',
      }} />
      <span style={{
        fontFamily: 'Orbitron, monospace',
        fontSize: '0.5rem',
        letterSpacing: '0.3em',
        color: '#00D4FF',
        background: '#020812',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {label}
      </span>
    </div>
  )
}
