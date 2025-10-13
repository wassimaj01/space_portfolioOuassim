"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { CubeSat3D } from "./cubesat-3d"

function AnimatedSphere() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={2.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4dd4ff" />
    </mesh>
  )
}

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider animate-pulse-glow">
                AVAILABLE FOR HIRE • FLIGHT SOFTWARE ENGINEER
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                Ouassim
                <br />
                <span className="text-primary">El Ajbari</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Master's graduate in NewSpace from Paris-Saclay University. Specialized in embedded satellite software,
                nanosatellites, and real-time flight systems. Ready to contribute to innovative space missions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="group bg-primary hover:bg-primary/90">
                Let's Work Together
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/el-ajbari-ouassim-a93725232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/ouassim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/el-ajbari-ouassim-a93725232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:wassimajbari123@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="h-[500px] lg:h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
              <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#4dd4ff" />
              <pointLight position={[0, 5, 5]} intensity={0.8} color="#4dd4ff" />
              <pointLight position={[0, -5, -5]} intensity={0.5} color="#0ea5e9" />
              <CubeSat3D />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
