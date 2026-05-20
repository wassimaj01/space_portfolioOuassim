"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Embedded Satellite Software Development Engineer",
      company: "Hemeria",
      location: "Toulouse, France",
      period: "March 2025 – August 2025",
      current: false,
      description: [
        "SKE Integration: Adaptation of flight software for nanosatellites to integrate SKE and enable native execution on Linux PC",
        "Debugging and validation: Bug identification using GDB with implementation of test procedures",
        "Simulation and optimization: Use of SKE to simulate satellite constellations and optimize node interactions",
      ],
      technologies: ["Linux", "C++", "GDB", "CMake", "SKE", "LithOS", "XNG", "Git", "ARINC653"],
    },
    {
      title: "Spatial Remote Sensing Research Engineer",
      company: "Laboratory P2E - Purpan Engineering School",
      location: "Toulouse, France",
      period: "February 2024 – July 2024",
      description: [
        "Comparison and improvement of AI models for detecting chestnut tree decline",
        "Multispectral satellite image analysis using Sentinel-2 data",
        "Part of the Reconfort-ARD Sycomore project",
      ],
      technologies: ["Remote Sensing", "GIS", "Machine Learning", "Python", "Git", "Linux"],
    },
    {
      title: "Software Engineer",
      company: "Eurogate",
      location: "Tangier, Morocco",
      period: "July 2023 – September 2023",
      description: [
        "Development of GIS web application for managing employee summer assignments",
        "Full-stack development with modern web technologies",
      ],
      technologies: ["C#", "ASP.NET", "React", "OpenLayers", "Leaflet", "Geoserver", "PostGIS", "Git"],
    },
  ]

  return (
    <section id="experience" className="relative py-32 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Experience</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Professional journey in space systems and software development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="bg-primary text-primary-foreground animate-pulse-glow">Current</Badge>
                        )}
                      </div>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/90">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
