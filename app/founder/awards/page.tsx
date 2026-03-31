"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Trophy, 
  Award, 
  Star, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Medal,
  Globe
} from "lucide-react"
import Link from "next/link"

const awardData = [
  {
    title: "Global Professional Certifications",
    description: "Earned 60+ industry-recognized certifications in Cybersecurity, AI, Cloud Computing, and Professional Management.",
    icon: Globe,
    category: "Professional Development"
  },
  {
    title: "Academic Excellence",
    description: "2nd Rank in University (B.E.); 90.63 percentile in GATE 2011; Qualified Ph.D. entrance in 4 leading universities.",
    icon: Medal,
    category: "Academic Achievement"
  },
  {
    title: "Research Contributions",
    description: "Prolific output including 20 published journal papers, 4 book chapters, 2 innovative patents, and 1 copyright.",
    icon: Sparkles,
    category: "Scientific Research"
  }
]

const achievementItems = [
  "Reduced false positives by 25% for entry-level SIEM implementations",
  "Improved threat detection capacity by 30% for corporate banking systems",
  "Created 50+ MITRE ATT&CK aligned security use cases for global clients",
  "Delivered 50+ international training sessions in 10+ countries",
  "Managed multi-site high-availability data center security infrastructures"
]

export default function AwardsPage() {
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
              <Trophy className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Elite Honors</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Awards & <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Achievements</span></h1>
          </div>

          <div className="space-y-6 mb-16">
            {awardData.map((award, index) => (
              <Card key={index} className="border-primary/20 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-6">
                  <div className="p-3 rounded-2xl bg-primary/20 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <award.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">{award.category}</Badge>
                    <CardTitle className="text-2xl font-bold text-foreground">{award.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              Key Project Impacts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievementItems.map((item, index) => (
                <div key={index} className="p-4 rounded-xl border border-primary/10 bg-primary/5 hover:border-primary/30 transition-all flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
