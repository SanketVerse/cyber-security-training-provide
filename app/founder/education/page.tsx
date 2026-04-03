"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  GraduationCap, 
  School, 
  BookText, 
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Brain,
  History
} from "lucide-react"
import Link from "next/link"

const educationData = [
  {
    degree: "Ph.D. in Cyber Security",
    institution: "D. Y. Patil College of Engineering, Akurdi, Pune",
    period: "2018 – 2024",
    description: "Doctoral research focused on advanced cryptographic techniques and SIEM-based threat intelligence in large-scale enterprise environments.",
    highlights: ["Doctorate in Cyber Security", "Focus on advanced Cyber Security frameworks and SIEM"],
    icon: GraduationCap,
    category: "Ph.D. Scholar"
  },
  {
    degree: "M.E. in Electronics and Telecommunication",
    institution: "K.K. Wagh COE, Nasik",
    period: "2011 – 2013",
    description: "Specialization in digital communication systems and advanced signal processing with focus on secure protocols.",
    highlights: ["Academic excellence in Engineering", "Specialized in secure telecommunication"],
    icon: School,
    category: "Master's Degree"
  },
  {
    degree: "B.E. in Electronics Engineering",
    institution: "S.S.V.P.S’s COE, Dhule",
    period: "2006 – 2010",
    description: "Foundational engineering studies with top academic honors from the university.",
    highlights: ["University Rank Holder (Merit List)", "Graduated with Distinction honors"],
    icon: BookText,
    category: "Bachelor's Degree"
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/founder">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 group">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Founder Profile
            </Button>
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Academic Background</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Education <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Journey</span></h1>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-6 space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-10 group">
                <div className="absolute -left-[42px] top-0 p-2.5 rounded-2xl bg-background border border-primary/30 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-primary/10">
                  <edu.icon className="h-6 w-6" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="text-xs uppercase border-primary/30 bg-primary/5">{edu.period}</Badge>
                    <Badge variant="secondary" className="text-xs font-bold bg-primary/10 text-primary">{edu.category}</Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{edu.institution}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{edu.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-primary/10 group-hover:border-primary/30 transition-all">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-primary/20 shadow-xl shadow-primary/5 text-center">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              Continuous Learning
            </h2>
            <p className="text-muted-foreground text-lg italic leading-relaxed">
              Dr. Saraf is committed to lifelong learning, having cleared GATE with a 90.63 percentile and being selected across multiple top universities for the most rigorous academic programs in cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
