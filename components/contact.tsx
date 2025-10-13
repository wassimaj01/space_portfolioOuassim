"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Rocket } from "lucide-react"
import * as THREE from "three"

function OrbitingSatellite() {
  const satelliteRef = useRef<THREE.Group>(null)
  const orbitRadius = 3

  useFrame((state) => {
    if (satelliteRef.current) {
      const time = state.clock.getElapsedTime()
      satelliteRef.current.position.x = Math.cos(time * 0.5) * orbitRadius
      satelliteRef.current.position.z = Math.sin(time * 0.5) * orbitRadius
      satelliteRef.current.rotation.y = time
    }
  })

  return (
    <group ref={satelliteRef}>
      <mesh>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#4dd4ff" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.05]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.4, 0.2, 0.05]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.9} roughness={0.1} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#4dd4ff" />
    </group>
  )
}

function ContactCard3D({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 3) * 0.1
        meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.05
      } else {
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, 0, 0.1)
        meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, 0, 0.1)
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshStandardMaterial
        color="#4dd4ff"
        emissive="#4dd4ff"
        emissiveIntensity={isHovered ? 0.4 : 0.1}
        transparent
        opacity={0.2}
      />
    </mesh>
  )
}

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "wassimajbari123@gmail.com",
      href: "mailto:wassimajbari123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+33 7 44 47 56 92",
      href: "tel:+33744475692",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Toulouse, France",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/el-ajbari-ouassim-a93725232",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ouassim",
    },
  ]

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4dd4ff" />
          <OrbitingSatellite />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="h-8 w-8 text-primary animate-pulse-glow" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Work Together</h2>
            </div>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Open to opportunities in embedded satellite software, flight systems, and space technology innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[5, 5, 5]} intensity={0.8} color="#4dd4ff" />
                    <ContactCard3D isHovered={hoveredCard === index} />
                  </Canvas>
                </div>

                <Card
                  className={`p-6 bg-card/50 backdrop-blur border-border transition-all duration-300 text-center relative ${
                    hoveredCard === index
                      ? "border-primary/80 scale-110 shadow-2xl shadow-primary/30"
                      : "hover:border-primary/50 hover:scale-105"
                  }`}
                >
                  {item.href ? (
                    <a href={item.href} className="space-y-4 block">
                      <div className="flex justify-center">
                        <div
                          className={`p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 ${
                            hoveredCard === index
                              ? "bg-primary text-primary-foreground scale-110"
                              : "group-hover:bg-primary group-hover:text-primary-foreground"
                          }`}
                        >
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p
                          className={`font-semibold transition-colors ${
                            hoveredCard === index ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div
                          className={`p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 ${
                            hoveredCard === index ? "bg-primary text-primary-foreground scale-110" : ""
                          }`}
                        >
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>

          <Card className="p-10 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 backdrop-blur border-primary/40 shadow-xl shadow-primary/20">
            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-primary">Ready to Launch Your Next Mission?</h3>
                <p className="text-lg text-foreground/90 text-pretty leading-relaxed max-w-2xl mx-auto">
                  I bring expertise in embedded satellite software, real-time systems, and space technology innovation.
                  Let's collaborate on cutting-edge space missions and push the boundaries of what's possible.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button size="lg" className="group bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:wassimajbari123@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" size="lg" asChild className="group bg-card/50">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          <div className="text-center space-y-4 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              <p className="text-sm font-semibold text-primary">Available for Full-Time Opportunities</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Master's in NewSpace (Graduated 2025) • Embedded Satellite Software Specialist • Based in Toulouse, France
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
