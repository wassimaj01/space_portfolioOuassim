"use client"

import { Card } from "@/components/ui/card"
import { Rocket, Satellite, Code2, Brain } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Satellite,
      title: "Satellite Systems",
      description: "Expert in nanosatellite flight software and embedded systems",
    },
    {
      icon: Code2,
      title: "Low-Level Programming",
      description: "C/C++ development for real-time space applications",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Space debris detection and satellite data processing",
    },
    {
      icon: Rocket,
      title: "NewSpace Innovation",
      description: "Contributing to the future of space exploration",
    },
  ]

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">About Me</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Passionate about NewSpace, I specialize in programming, embedded software, space systems engineering, and
              the processing of space data. Recently graduated with a Master's in NewSpace from Paris-Saclay University
              and completed my internship at <span className="text-primary font-semibold">Hemeria Toulouse</span>, where
              I developed and simulated embedded software for nanosatellites. Now seeking opportunities to contribute to
              cutting-edge space missions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-secondary/30 backdrop-blur border-border">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Mission Statement</h3>
              <p className="text-lg text-foreground/90 text-pretty leading-relaxed italic">
                "Seek, innovate, and never stop learning"
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                My goal is to contribute to innovative projects and take on new technological challenges related to the
                space sector, pushing the boundaries of what's possible in satellite technology and space exploration.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
