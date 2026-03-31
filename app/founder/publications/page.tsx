"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Brain,
  Quote,
  Globe,
  Library
} from "lucide-react"
import Link from "next/link"

const publicationData = [
  {
    type: "Journal Paper",
    title: "Security Enhancement of Cyber-Physical System using Modified Encryption (AESGNRSA) Technique",
    year: "2023",
    journal: "International Jounral of Scientific Research",
    impact: "Proposed a novel hybrid encryption model for CPS security.",
    icon: FileText
  },
  {
    type: "Journal Paper",
    title: "Splunk-Based Threat Intelligence of Cyber-Physical System",
    year: "2023",
    journal: "Security Innovations Quarterly",
    impact: "Developed automated threat intelligence workflows using Splunk SPL.",
    icon: TrendingUp
  },
  {
    type: "Book Chapter",
    title: "Encryption principles and techniques for the internet of things",
    year: "2019",
    journal: "IGI Global - IoT Security Frameworks",
    impact: "Authored foundational chapter on lightweight cryptography for IoT.",
    icon: BookOpen
  },
  {
    type: "Book Chapter",
    title: "Intelligent Learning Analytics in Healthcare Using ML and IoT",
    year: "2023",
    journal: "Springer - Smart Healthcare Series",
    impact: "Integrated security protocols with medical learning analytics.",
    icon: Brain
  }
]

export default function PublicationsPage() {
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
              <Library className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Research & Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Global <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Publications</span></h1>
            <p className="mt-4 text-muted-foreground text-lg">Contributing to the global cybersecurity discourse through academic research and innovative patents.</p>
          </div>

          <div className="grid gap-8">
            {publicationData.map((pub, index) => (
              <Card key={index} className="group border-primary/10 bg-card/60 backdrop-blur-md hover:border-primary/40 hover:bg-primary/3 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                <CardHeader className="pb-4">
                   <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-wider">{pub.type}</Badge>
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider">{pub.year}</Badge>
                   </div>
                   <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors pr-8">{pub.title}</CardTitle>
                   <CardDescription className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mt-2 italic">
                      <Globe className="h-3 w-3" />
                      {pub.journal}
                   </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/20 transition-all">
                    <p className="text-sm text-muted-foreground leading-relaxed italic pr-4">
                      <span className="font-bold text-primary not-italic">Core Impact: </span> 
                      {pub.impact}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                     <Button variant="ghost" size="sm" className="h-8 text-xs font-cyber tracking-wider hover:text-primary hover:bg-primary/10">
                        FIND IN LIBRARY
                        <ChevronRight className="ml-1 h-3 w-3" />
                     </Button>
                     <Button variant="ghost" size="sm" className="h-8 text-xs font-cyber tracking-wider hover:text-primary hover:bg-primary/10">
                        CITE WORK
                        <ExternalLink className="ml-1 h-3 w-3" />
                     </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
               <h3 className="text-2xl font-bold text-foreground">A Prolific Legacy of 60+ Scientific Works</h3>
               <p className="text-muted-foreground">Dr. Saraf's research encompasses SIEM-based threat intelligence, lightweight IoT encryption, and ML-driven learning analytics in secure healthcare environments. His work is cited by global institutions and contributes to the evolution of cyber-physical system defenses.</p>
               <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                  <div className="text-center px-6">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-xs uppercase font-bold text-muted-foreground/60 tracking-wider">Journals</div>
                  </div>
                  <div className="h-10 w-px bg-primary/20" />
                  <div className="text-center px-6">
                    <div className="text-3xl font-bold text-cyan-400">04+</div>
                    <div className="text-xs uppercase font-bold text-muted-foreground/60 tracking-wider">Books</div>
                  </div>
                  <div className="h-10 w-px bg-primary/20" />
                  <div className="text-center px-6">
                    <div className="text-3xl font-bold text-teal-400">02+</div>
                    <div className="text-xs uppercase font-bold text-muted-foreground/60 tracking-wider">Patents</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
