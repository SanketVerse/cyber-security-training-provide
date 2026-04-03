"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  Cloud, 
  Search, 
  ChevronLeft,
  ChevronRight,
  Database,
  Lock,
  Cpu
} from "lucide-react"
import Link from "next/link"

const competencyData = [
  {
    title: "SOC & SIEM Operations",
    icon: ShieldCheck,
    skills: ["Expert-level administration", "Content development for Splunk ES", "MS Sentinel configuration", "Securonix management"],
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-blue-400"
  },
  {
    title: "Specialized Monitoring",
    icon: Database,
    skills: ["Application security monitoring (T24, Treasury)", "Database level security monitoring", "Log analysis and correlation", "Compliance monitoring"],
    color: "from-cyan-500/20 to-teal-500/20",
    textColor: "text-cyan-400"
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Azure/AWS/GCP security monitoring", "EDR (CrowdStrike) threat hunting", "SaaS application security", "Cloud posture management"],
    color: "from-teal-500/20 to-primary/20",
    textColor: "text-teal-400"
  },
  {
    title: "Security Assessment",
    icon: Search,
    skills: ["Vulnerability Assessment (Nessus)", "Penetration Testing (BurpSuite, Metasploit)", "Red Team operations management", "Security audit and reporting"],
    color: "from-primary/20 to-blue-500/20",
    textColor: "text-blue-400"
  },
  {
    title: "Leadership & Soft Skills",
    icon: Zap,
    skills: ["Strategic thinking & Risk-based decision making", "Large-team leadership (40+ members)", "Executive communication & Stakeholder engagement", "Crisis management & Resilience planning", "Cross-functional collaboration (OT/IT/Business)"],
    color: "from-yellow-400/20 to-primary/20",
    textColor: "text-yellow-400"
  }
]

export default function CompetenciesPage() {
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
              <Target className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Core Domain</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Core <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Competencies</span></h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {competencyData.map((item, index) => (
              <Card key={index} className="border-primary/20 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-2.5 rounded-lg bg-primary/10 ${item.textColor} group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
