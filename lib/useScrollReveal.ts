'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const selectors = [
      '.reveal-left', '.reveal-right', '.reveal-bottom',
      '.reveal-zoom-in', '.reveal-zoom-out',
    ]

    function check() {
      selectors.forEach(sel => {
        document.querySelectorAll<HTMLElement>(sel).forEach(el => {
          // skip hero — it animates via CSS keyframes
          if (el.closest('#hero')) return
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.88) {
            el.classList.add('revealed')
          }
        })
      })
    }

    window.addEventListener('scroll', check, { passive: true })
    // initial check after small delay (let page render first)
    const t = setTimeout(check, 100)
    return () => {
      window.removeEventListener('scroll', check)
      clearTimeout(t)
    }
  }, [])
}

export function useSkillBars() {
  const done = useRef(false)

  useEffect(() => {
    function check() {
      if (done.current) return
      const section = document.getElementById('skills')
      if (!section) return
      if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
        done.current = true
        document.querySelectorAll<HTMLElement>('.skill-fill').forEach(el => {
          const w = el.getAttribute('data-width') ?? '0'
          setTimeout(() => { el.style.width = w + '%' }, 200)
        })
      }
    }

    window.addEventListener('scroll', check, { passive: true })
    const t = setTimeout(check, 200)
    return () => {
      window.removeEventListener('scroll', check)
      clearTimeout(t)
    }
  }, [])
}
