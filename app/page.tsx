'use client'

import dynamic from 'next/dynamic'
import Loader from '@/components/ui/Loader'
import Navbar from '@/components/ui/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'
import SectionDivider from '@/components/ui/SectionDivider'

// Load 3D canvas only on client (no SSR)
const ThreeBackground = dynamic(() => import('@/components/three/ThreeBackground'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <ThreeBackground />
      <Navbar />

      <main id="main-content">
        <Hero />
        <SectionDivider label="// ABOUT" />
        <About />
        <SectionDivider label="// SKILLS" />
        <Skills />
        <SectionDivider label="// PROJECTS" />
        <Projects />
        <SectionDivider label="// EXPERIENCE" />
        <Experience />
        <SectionDivider label="// CONTACT" />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
