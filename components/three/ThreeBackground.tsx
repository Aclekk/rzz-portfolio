'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ShapeData {
  ry: number
  rx: number
  fy: number
  fa: number
  iy: number
  ph: number
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 0, 28)

    // Lights
    scene.add(new THREE.AmbientLight(0x00d4ff, 0.35))
    const pl1 = new THREE.PointLight(0x00d4ff, 2.5, 80)
    pl1.position.set(8, 8, 18)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0x0033ff, 1.5, 60)
    pl2.position.set(-12, -4, 12)
    scene.add(pl2)
    const pl3 = new THREE.PointLight(0x00ffcc, 1.0, 50)
    pl3.position.set(0, -10, 15)
    scene.add(pl3)

    // Grid
    const grid = new THREE.GridHelper(100, 50, 0x002233, 0x001122)
    grid.position.y = -10
    scene.add(grid)

    // Torus rings
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(5.5, 0.06, 8, 60),
      new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.14 })
    )
    ring1.rotation.x = Math.PI / 3
    scene.add(ring1)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(8.5, 0.04, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0x0044ff, transparent: true, opacity: 0.07 })
    )
    ring2.rotation.x = Math.PI / 2.5
    ring2.rotation.z = 0.4
    scene.add(ring2)

    // Floating geometric shapes
    const shapeConfigs: Array<{ geo: THREE.BufferGeometry; pos: [number, number, number] }> = [
      { geo: new THREE.OctahedronGeometry(1.3),  pos: [13,  2, -1] },
      { geo: new THREE.TetrahedronGeometry(1.5),  pos: [-12, 3,  0] },
      { geo: new THREE.IcosahedronGeometry(1.0),  pos: [7,  -3, -3] },
      { geo: new THREE.OctahedronGeometry(0.85),  pos: [-7,  4, -2] },
      { geo: new THREE.TetrahedronGeometry(0.9),  pos: [15, -2, -4] },
      { geo: new THREE.IcosahedronGeometry(1.2),  pos: [-15, 1, -3] },
      { geo: new THREE.OctahedronGeometry(0.7),   pos: [4,   5, -5] },
      { geo: new THREE.TetrahedronGeometry(0.8),  pos: [-4, -5, -1] },
    ]

    const solidMat = new THREE.MeshPhongMaterial({
      color: 0x001833, emissive: 0x001122, shininess: 100,
      transparent: true, opacity: 0.88,
    })
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.32,
    })

    const shapes: Array<{ mesh: THREE.Mesh; data: ShapeData }> = []

    shapeConfigs.forEach(({ geo, pos }) => {
      const mesh = new THREE.Mesh(geo, solidMat.clone())
      const wire = new THREE.Mesh(geo, wireMat.clone())
      mesh.position.set(...pos)
      mesh.add(wire)
      const data: ShapeData = {
        ry: (Math.random() - 0.5) * 0.011,
        rx: (Math.random() - 0.5) * 0.007,
        fy: Math.random() * 0.4 + 0.2,
        fa: Math.random() * 1.5 + 0.8,
        iy: pos[1],
        ph: Math.random() * Math.PI * 2,
      }
      scene.add(mesh)
      shapes.push({ mesh, data })
    })

    // Particles
    const N = 900
    const positions = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 90
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 10
    }
    const pg = new THREE.BufferGeometry()
    pg.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    scene.add(new THREE.Points(pg, new THREE.PointsMaterial({
      color: 0x00d4ff, size: 0.1, transparent: true, opacity: 0.4,
    })))

    // State
    let scrollY = 0
    let mouseX = 0
    let mouseY = 0
    let rafId: number

    const onScroll = () => { scrollY = window.scrollY }
    const onMouse  = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t  = clock.getElapsedTime()
      const sp = scrollY / (document.body.scrollHeight - window.innerHeight || 1)

      // Camera parallax
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.05
      camera.position.y += (-mouseY * 2.5 - sp * 10 - camera.position.y) * 0.05
      camera.lookAt(0, -sp * 5, 0)

      // Rings
      ring1.rotation.z = t * 0.14
      ring2.rotation.y = t * 0.09

      // Lights pulse
      pl1.intensity = 2.2 + Math.sin(t * 1.1) * 0.5
      pl2.intensity = 1.2 + Math.sin(t * 0.8) * 0.4

      // Shapes
      shapes.forEach(({ mesh, data }) => {
        mesh.rotation.y += data.ry
        mesh.rotation.x += data.rx
        mesh.position.y = data.iy + Math.sin(t * data.fy + data.ph) * data.fa
        mesh.position.z = -5 - sp * 18
        mesh.scale.setScalar(Math.max(0.5, 1 - sp * 0.3))
      })

      // Grid
      grid.position.z = -sp * 40
      grid.rotation.x = 0.05 + sp * 0.1

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
