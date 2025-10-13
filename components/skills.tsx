"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Database, Satellite, Globe, Brain } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["C/C++/C#", "Python", "Bash", "Java", "JavaScript", "PHP", "R"],
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      skills: ["CMake", "GDB", "SKE", "XNG", "LithOS", "Shell", "XML", "UART", "I2C", "GPIO", "Arduino"],
    },
    {
      icon: Satellite,
      title: "Space Systems",
      skills: ["STK", "NX Siemens", "IDM-CIC", "AOCS", "ARINC653", "MBSE", "Systems Engineering"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "CNN", "LSTM", "YOLOv8", "Random Forest", "Scikit-learn", "OpenCV"],
    },
    {
      icon: Globe,
      title: "GIS & Remote Sensing",
      skills: ["QGIS", "ArcGIS", "GDAL", "Sentinelsat", "SNAP", "ENVI", "PostGIS", "Geoserver"],
    },
    {
      icon: Database,
      title: "Web & Databases",
      skills: ["React", "Angular", "Django", "ASP.NET", "PostgreSQL", "MySQL", "Docker", "Git"],
    },
  ]

  const certifications = [
    "Spatial Data Science and Applications",
    "Digital Image Processing with Python",
    "Star's Up Hackathon Winner - Dassault Systèmes",
    "Kickboxing Champion 2014",
  ]

  return (
    <section id="skills" className="relative py-32 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Technical proficiency across space systems and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-foreground/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur border-primary/30">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Languages</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="space-y-2">
                  <p className="font-semibold text-lg">French</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">English</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Arabic</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
