"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ShapeData {
  ry: number;
  rx: number;
  rz: number;
  fy: number;
  fa: number;
  iy: number;
  ph: number;
  pulseSpeed: number;
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      300,
    );
    camera.position.set(0, 0, 28);

    // ─── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x00d4ff, 0.2));

    const pl1 = new THREE.PointLight(0x00d4ff, 3, 80);
    pl1.position.set(8, 8, 18);
    scene.add(pl1);

    const pl2 = new THREE.PointLight(0x0033ff, 2, 60);
    pl2.position.set(-12, -4, 12);
    scene.add(pl2);

    const pl3 = new THREE.PointLight(0x00ffcc, 1.5, 50);
    pl3.position.set(0, -10, 15);
    scene.add(pl3);

    // New: warm accent light
    const pl4 = new THREE.PointLight(0xff6600, 0.8, 40);
    pl4.position.set(10, -8, 10);
    scene.add(pl4);

    // ─── Grid (horizon) ───────────────────────────────────────────────────────
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x001a2e,
      transparent: true,
      opacity: 0.6,
    });
    const grid = new THREE.GridHelper(120, 60, 0x001a2e, 0x001a2e);
    grid.material = gridMat;
    grid.position.y = -12;
    scene.add(grid);

    // Second grid for depth
    const grid2 = new THREE.GridHelper(80, 40, 0x002233, 0x002233);
    grid2.position.y = -8;
    grid2.rotation.x = Math.PI / 2;
    grid2.position.z = -30;
    scene.add(grid2);

    // ─── Torus rings ──────────────────────────────────────────────────────────
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(6, 0.05, 8, 80),
      new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.18,
      }),
    );
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(9.5, 0.03, 8, 100),
      new THREE.MeshBasicMaterial({
        color: 0x0044ff,
        transparent: true,
        opacity: 0.08,
      }),
    );
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.z = 0.4;
    scene.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(4, 0.035, 8, 60),
      new THREE.MeshBasicMaterial({
        color: 0x00ffcc,
        transparent: true,
        opacity: 0.12,
      }),
    );
    ring3.rotation.x = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    scene.add(ring3);

    // ─── Central DNA/helix structure ──────────────────────────────────────────
    const helixGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x00d4ff,
      emissive: 0x003344,
      transparent: true,
      opacity: 0.7,
    });
    const connMat = new THREE.LineBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.25,
    });

    for (let i = 0; i < 30; i++) {
      const t = (i / 30) * Math.PI * 4;
      const r = 2.2;
      const y = (i / 30) * 12 - 6;

      const s1 = new THREE.Mesh(sphereGeo, sphereMat.clone());
      s1.position.set(Math.cos(t) * r, y, Math.sin(t) * r - 5);
      helixGroup.add(s1);

      const s2 = new THREE.Mesh(sphereGeo, sphereMat.clone());
      s2.position.set(
        Math.cos(t + Math.PI) * r,
        y,
        Math.sin(t + Math.PI) * r - 5,
      );
      helixGroup.add(s2);

      if (i % 3 === 0) {
        const pts = [s1.position.clone(), s2.position.clone()];
        helixGroup.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(pts),
            connMat,
          ),
        );
      }
    }
    scene.add(helixGroup);

    // ─── Floating geometric shapes ────────────────────────────────────────────
    const shapeConfigs: Array<{
      geo: THREE.BufferGeometry;
      pos: [number, number, number];
      scale?: number;
    }> = [
      { geo: new THREE.OctahedronGeometry(1.4), pos: [13, 2, -1] },
      { geo: new THREE.TetrahedronGeometry(1.6), pos: [-12, 3, 0] },
      { geo: new THREE.IcosahedronGeometry(1.1), pos: [7, -3, -3] },
      { geo: new THREE.OctahedronGeometry(0.9), pos: [-7, 4, -2] },
      { geo: new THREE.TetrahedronGeometry(1.0), pos: [15, -2, -4] },
      { geo: new THREE.IcosahedronGeometry(1.3), pos: [-15, 1, -3] },
      { geo: new THREE.OctahedronGeometry(0.75), pos: [4, 5, -5] },
      { geo: new THREE.TetrahedronGeometry(0.85), pos: [-4, -5, -1] },
      // New: dodecahedron-ish (use icosahedron at diff scale)
      { geo: new THREE.IcosahedronGeometry(0.65), pos: [9, 6, -6], scale: 1.2 },
      { geo: new THREE.OctahedronGeometry(0.55), pos: [-10, -3, -5] },
    ];

    const shapes: Array<{ mesh: THREE.Mesh; data: ShapeData }> = [];

    shapeConfigs.forEach(({ geo, pos, scale = 1 }) => {
      const solidMat = new THREE.MeshPhongMaterial({
        color: 0x001833,
        emissive: 0x001122,
        specular: 0x00d4ff,
        shininess: 120,
        transparent: true,
        opacity: 0.85,
      });
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });

      const mesh = new THREE.Mesh(geo, solidMat);
      const wire = new THREE.Mesh(geo, wireMat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      mesh.add(wire);

      const data: ShapeData = {
        ry: (Math.random() - 0.5) * 0.014,
        rx: (Math.random() - 0.5) * 0.009,
        rz: (Math.random() - 0.5) * 0.006,
        fy: Math.random() * 0.4 + 0.2,
        fa: Math.random() * 1.5 + 0.8,
        iy: pos[1],
        ph: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.8 + 0.4,
      };
      scene.add(mesh);
      shapes.push({ mesh, data });
    });

    // ─── Particles (dual layer) ───────────────────────────────────────────────
    const makeParticles = (
      count: number,
      spread: [number, number, number],
      color: number,
      size: number,
      opacity: number,
    ) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread[0];
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread[2] - 10;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      return new THREE.Points(
        geo,
        new THREE.PointsMaterial({ color, size, transparent: true, opacity }),
      );
    };

    const particles1 = makeParticles(1200, [100, 70, 60], 0x00d4ff, 0.09, 0.45);
    const particles2 = makeParticles(400, [60, 40, 40], 0x00ffcc, 0.14, 0.25);
    const particles3 = makeParticles(200, [40, 30, 30], 0xffffff, 0.06, 0.15);
    scene.add(particles1);
    scene.add(particles2);
    scene.add(particles3);

    // ─── Scanning beam ────────────────────────────────────────────────────────
    const beamGeo = new THREE.PlaneGeometry(60, 0.05);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.rotation.y = Math.PI / 2;
    scene.add(beam);

    // ─── State ────────────────────────────────────────────────────────────────
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMX = 0;
    let targetMY = 0;
    let rafId: number;

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onMouse = (e: MouseEvent) => {
      targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const sp =
        scrollY / (document.body.scrollHeight - window.innerHeight || 1);

      // Smooth mouse
      mouseX += (targetMX - mouseX) * 0.04;
      mouseY += (targetMY - mouseY) * 0.04;

      // Camera parallax + scroll
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 3 - sp * 12 - camera.position.y) * 0.04;
      camera.lookAt(0, -sp * 6, 0);

      // Rings animate
      ring1.rotation.z = t * 0.12;
      ring1.rotation.y = t * 0.04;
      ring2.rotation.y = t * 0.08;
      ring3.rotation.z = -t * 0.16;
      ring3.rotation.x = Math.PI / 4 + Math.sin(t * 0.3) * 0.1;

      // Lights pulse
      pl1.intensity = 2.5 + Math.sin(t * 1.1) * 0.8;
      pl2.intensity = 1.5 + Math.sin(t * 0.8 + 1) * 0.5;
      pl3.intensity = 1.0 + Math.sin(t * 0.6 + 2) * 0.4;
      pl4.intensity = 0.5 + Math.sin(t * 1.3 + 3) * 0.3;

      // Helix rotate
      helixGroup.rotation.y = t * 0.15;
      helixGroup.position.y = Math.sin(t * 0.2) * 0.5;

      // Beam scan
      beam.position.y = Math.sin(t * 0.4) * 10;

      // Shapes
      shapes.forEach(({ mesh, data }) => {
        mesh.rotation.y += data.ry;
        mesh.rotation.x += data.rx;
        mesh.rotation.z += data.rz;
        mesh.position.y = data.iy + Math.sin(t * data.fy + data.ph) * data.fa;
        mesh.position.z = -5 - sp * 20;

        // Pulse wireframe opacity
        const wire = mesh.children[0] as THREE.Mesh;
        if (wire?.material) {
          const mat = wire.material as THREE.MeshBasicMaterial;
          mat.opacity = 0.2 + Math.sin(t * data.pulseSpeed + data.ph) * 0.15;
        }

        mesh.scale.setScalar(Math.max(0.4, 1 - sp * 0.4));
      });

      // Particles slow drift
      particles1.rotation.y = t * 0.008;
      particles2.rotation.y = -t * 0.01;
      particles3.rotation.x = t * 0.005;

      // Grid
      grid.position.z = -sp * 40;
      grid.rotation.x = 0.05 + sp * 0.1;
      grid.material.opacity = Math.max(0, 0.6 - sp * 0.4);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
