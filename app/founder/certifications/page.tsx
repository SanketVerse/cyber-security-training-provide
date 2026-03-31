"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Award, 
  ShieldCheck, 
  Cloud, 
  Search, 
  ChevronLeft,
  ChevronRight,
  Database,
  Lock,
  Cpu,
  CheckCircle2,
  ListRestart
} from "lucide-react"
import Link from "next/link"

const certificationData = [
  {
    category: "Management & Strategy",
    items: [
      { name: "ISACA Certified Information Security Manager (CISM)", issuer: "ISACA", icon: ShieldCheck },
      { name: "(ISC)² Certified in Cybersecurity (CC)", issuer: "(ISC)²", icon: Lock },
      { name: "Red Team Operations Management (CRTOM)", issuer: "Global Red Team", icon: Zap }
    ]
  },
  {
    category: "Cloud Security & Infrastructure",
    items: [
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: Cloud },
      { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", icon: Cloud },
      { name: "Datadog Cloud SIEM Certification", issuer: "Datadog", icon: Search }
    ]
  },
  {
    category: "Specialized Technical Tools",
    items: [
      { name: "10+ Splunk Certifications (Admin/Developer)", issuer: "Splunk", icon: Database },
      { name: "Securonix 300 Content Developer", issuer: "Securonix", icon: ShieldCheck },
      { name: "Cyber Threat Intelligence Associate (CTIGA)", issuer: "Global Intelligence", icon: Search }
    ]
  },
  {
    category: "AI & Emerging Tech",
    items: [
      { name: "Google Generative AI Fundamentals", issuer: "Google", icon: Cpu },
      { name: "Prompt Engineering for ChatGPT", issuer: "OpenAI/Platform", icon: Zap },
      { name: "Advanced ML for Security Operations", issuer: "Elite Platforms", icon: ShieldCheck }
    ]
  }
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/founder">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 group">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Founder Profile
            </Button>
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Global Validation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Elite <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Certifications</span></h1>
            <p className="mt-4 text-muted-foreground text-lg italic">Over 60+ professional certifications from world-leading security and tech organizations.</p>
          </div>

          <div className="grid gap-12">
            {certificationData.map((cat, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-px bg-primary/20 flex-1" />
                  <h2 className="text-xl font-bold text-foreground/80 uppercase tracking-[0.2em]">{cat.category}</h2>
                  <div className="h-px bg-primary/20 flex-1" />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((cert, i) => (
                    <Card key={i} className="group border-primary/10 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                          <cert.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-[15px] font-bold leading-tight group-hover:text-primary transition-colors">{cert.name}</CardTitle>
                          <CardDescription className="text-xs font-medium text-primary/70 mt-1">{cert.issuer}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-16 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 backdrop-blur-md">
            <CardContent className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h2 className="text-2xl font-bold mb-2">And 50+ Other Strategic Creds</h2>
                <p className="text-muted-foreground">Certified in ethical hacking, Splunk Power User and Advanced searches, Microsoft Sentinel operations, and industrial cyber security standards.</p>
              </div>
              <div className="p-4 rounded-3xl bg-primary/20 animate-pulse">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
