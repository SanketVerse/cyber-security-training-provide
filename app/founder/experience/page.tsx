"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Briefcase, 
  Trophy, 
  GraduationCap, 
  Award, 
  Wrench, 
  BookOpen, 
  ChevronLeft,
  Calendar,
  Building2,
  ExternalLink
} from "lucide-react"
import Link from "next/link"

const experienceData = [
  {
    role: "Senior Security Consultant",
    company: "Capgemini",
    period: "Feb 2021 – Jul 2022",
    achievements: [
      "Directed enterprise SIEM deployments (Splunk, MS Sentinel, Securonix, Google Chronicle)",
      "Integrated T24 and Corporate Banking logs into Splunk, improving detection by 30%",
      "Reduced false positives by 25% and created 50+ MITRE ATT&CK-aligned use cases"
    ]
  },
  {
    role: "Technical Analyst",
    company: "Galaxe Solutions",
    period: "Jul 2020 – Feb 2021",
    achievements: [
      "Managed multi-site Splunk indexer clusters and resolved 500+ Jira tickets",
      "Developed custom Splunk Apps and automated dashboards for security monitoring"
    ]
  },
  {
    role: "Splunk & Cybersecurity Consultant",
    company: "String Head Technologies",
    period: "2016 – 2020",
    achievements: [
      "Focused on Data Center High Availability (HA) and automated investigation workflows"
    ]
  },
  {
    role: "Assistant Professor",
    company: "Various Engineering Colleges",
    period: "2010 – 2016",
    achievements: [
      "Academic leadership and teaching in electronics and telecommunication engineering"
    ]
  }
]

export default function ExperiencePage() {
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Career Path</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Professional <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Experience</span></h1>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-primary/20 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cyber text-xs font-bold text-primary tracking-tighter uppercase">{exp.period}</span>
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
