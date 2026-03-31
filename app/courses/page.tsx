"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Database, ShieldCheck, Terminal, Network, Lock, Zap } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: "basic-cyber-security",
      title: "Basic Cyber Security Course",
      description: "Foundation course for beginners entering the cybersecurity field. Learn fundamental security concepts and practices.",
      duration: "18 Hours",
      level: "Beginner",
      icon: Shield,
      price: "Contact Us",
      modules: 6
    },
    {
      id: "intermediate-cyber-security",
      title: "Intermediate Cyber Security Course",
      description: "Build on your foundational knowledge with intermediate-level security concepts and hands-on practice.",
      duration: "24 Hours",
      level: "Intermediate",
      icon: ShieldCheck,
      price: "Contact Us",
      modules: 8
    },
    {
      id: "advance-cyber-security",
      title: "Advanced Cyber Security Course",
      description: "Advanced training for experienced professionals. Master complex security scenarios and advanced techniques.",
      duration: "30 Hours",
      level: "Advanced",
      icon: Lock,
      price: "Contact Us",
      modules: 10
    },
    {
      id: "expert-cyber-security",
      title: "Expert Cyber Security Course",
      description: "Elite-level training for cybersecurity experts. Learn advanced penetration testing and security architecture.",
      duration: "5-6 months",
      level: "Expert",
      icon: ShieldCheck,
      price: "Contact Us",
      modules: 18
    },
    {
      id: "certified-ethical-hacking",
      title: "Certified Ethical Hacking",
      description: "Master the tools and techniques used by cyber adversaries to simulate real-world attacks and assess security posture.",
      duration: "40 Hours",
      level: "Advanced",
      icon: Terminal,
      price: "Contact Us",
      modules: 20
    },
    {
      id: "soc-analyst-1",
      title: "Security Operations Center Analyst 1",
      description: "Become a cyber defender and safeguard IT infrastructure from cyber threats by preventing and responding to attacks.",
      duration: "24 Hours",
      level: "Intermediate",
      icon: ShieldCheck,
      price: "Contact Us",
      modules: 8
    },
    {
      id: "soc-analyst-2",
      title: "Security Operations Center Analyst 2",
      description: "Advanced SOC analyst training with hands-on experience in threat hunting and incident response.",
      duration: "24 Hours",
      level: "Advanced",
      icon: Network,
      price: "Contact Us",
      modules: 8
    },
    {
      id: "splunk-siem",
      title: "Splunk Admin, Developer & SIEM",
      description: "Master Splunk administration, development, and Security Information and Event Management (SIEM) technologies.",
      duration: "30 Hours",
      level: "Intermediate",
      icon: Database,
      price: "Contact Us",
      modules: 29
    },
    {
      id: "microsoft-sentinel",
      title: "Microsoft Sentinel SIEM",
      description: "Master Microsoft Sentinel cloud-native SIEM and SOAR solution for intelligent security analytics and threat response.",
      duration: "30 Hours",
      level: "Intermediate",
      icon: Database,
      price: "Contact Us",
      modules: 12
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm animate-border-glow">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm sm:text-base font-bold tracking-[0.2em] bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer">
                ELITE TRAINING PROGRAMS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="text-foreground">Master </span>
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Cyber Security
              </span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Transform your career with our industry-recognized certifications and expert-led practical training.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="group relative overflow-hidden border-primary/20 bg-gradient-to-b from-card/60 to-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
              
              <div className="relative">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 group-hover:from-primary group-hover:to-cyan-500 transition-all duration-300">
                      {(() => {
                        const IconComponent = course.icon as React.ComponentType<{ className?: string }>;
                        return <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
                      })()}
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                      {course.level}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm border-t border-primary/10 pt-4">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Modules</span>
                      <span className="text-foreground font-semibold">{course.modules}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Price</span>
                      <span className="text-primary font-bold">{course.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/courses/${course.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-primary/30 text-foreground hover:bg-primary/5 transition-all duration-300">
                        Get Details
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white border-0 shadow-lg shadow-primary/20 transition-all duration-300">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
