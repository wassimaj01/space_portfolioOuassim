"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Brain, Radio, Telescope, Award } from "lucide-react"
import * as THREE from "three"

function FloatingCard3D({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
        meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.1
        meshRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.2
      } else {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0, 0.1)
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1)
        meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, 0, 0.1)
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshStandardMaterial
        color="#4dd4ff"
        emissive="#4dd4ff"
        emissiveIntensity={isHovered ? 0.3 : 0.1}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4dd4ff" />
          <FloatingCard3D isHovered={isHovered} />
        </Canvas>
      </div>

      <Card
        className={`group relative overflow-hidden bg-card/50 backdrop-blur border-border transition-all duration-500 ${
          isHovered ? "border-primary/80 scale-[1.05] shadow-2xl shadow-primary/20" : "hover:border-primary/50"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div
              className={`p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 ${
                isHovered ? "bg-primary text-primary-foreground scale-110 rotate-12" : ""
              }`}
            >
              <project.icon className="h-8 w-8" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${isHovered ? "text-primary" : ""}`}>
              {project.title}
            </h3>
            <p className="text-sm text-primary font-semibold">{project.subtitle}</p>
            <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Key Features:</p>
            <ul className="space-y-2">
              {project.highlights.map((highlight: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((tech: string, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      icon: Satellite,
      title: "SPARC - CubeSat Constellation",
      subtitle: "18 CubeSat 6U Constellation for Wildfire Detection",
      description:
        "Design of a constellation of 18 6U CubeSats for forest fire detection and prevention, with AI-powered fire propagation prediction using CNN/LSTM algorithms.",
      highlights: [
        "LEO orbit design at 500km altitude",
        "Multispectral thermal sensor payload",
        "Onboard AI for real-time data processing",
        "Optimized coverage for wildfire monitoring",
      ],
      technologies: ["STK", "NX Siemens", "IDM-CIC", "Python", "CNN/LSTM", "AI", "AOCS"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Brain,
      title: "Space Debris Detection AI",
      subtitle: "Collision Avoidance System",
      description:
        "Development of artificial intelligence algorithms for space debris detection and satellite collision avoidance using YOLOv8 and advanced machine learning techniques.",
      highlights: [
        "Real-time debris detection",
        "YOLOv8 implementation",
        "AdamW optimization algorithm",
        "Collision prediction system",
      ],
      technologies: ["Python", "AI", "Machine Learning", "YOLOv8", "Computer Vision"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Radio,
      title: "InterSat - 3U CubeSat",
      subtitle: "Deployable Antenna for Inter-Satellite Communication",
      description:
        "Design and manufacturing of a 3U CubeSat equipped with a deployable mesh reflector antenna system enabling optimized inter-satellite communication in LEO.",
      highlights: [
        "Motorized deployment mechanism",
        "Arduino-based control system",
        "High gain for long-distance transmission",
        "Compact 2U structure before deployment",
      ],
      technologies: ["NX Siemens", "Ultimaker Cura", "3D Printing", "Arduino", "C++", "IDM-CIC"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Telescope,
      title: "QGIS Sentinel Plugin",
      subtitle: "Satellite Data Processing Tool",
      description:
        "Development of a QGIS plugin for downloading and analyzing Sentinel satellite data with automated processing capabilities.",
      highlights: [
        "Automated Sentinel data download",
        "Multi-threaded processing",
        "GDAL integration",
        "PyQt5 user interface",
      ],
      technologies: ["Sentinelsat", "GDAL", "PyQt5", "Threading", "NumPy", "PyQGIS"],
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      icon: Award,
      title: "Star's Up Hackathon Winner",
      subtitle: "FLOOD VR - Crisis Management Training",
      description:
        "Winner of the Dassault Systèmes hackathon. Developed an immersive VR solution for training rescue teams in flood crisis management using digital twin technology.",
      highlights: [
        "Mobile app + VR platform",
        "Immersive simulation training",
        "Customizable crisis scenarios",
        "Multi-platform accessibility",
      ],
      technologies: ["VR", "WebGL", "Digital Twin", "Mobile Development", "Crisis Management"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
  ]

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Innovative space systems and satellite technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
