"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, ShieldCheck, BrainCircuit, Code2, Users, Zap, BadgeCheck, Lock, Terminal, Network, Shield, Camera, Cpu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FramesOfFame } from "@/components/frames-of-fame"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { id: 1, name: 'Trainer Experience', value: '15+', suffix: 'Years', icon: Users },
    { id: 2, name: 'Satisfied Students', value: '5000+', suffix: 'Trained', icon: BadgeCheck },
    { id: 3, name: 'Global Companies', value: '28+', suffix: 'Associated', icon: Code2 },
    { id: 4, name: 'Courses Offered', value: '8+', suffix: 'Programs', icon: BrainCircuit },
  ]

  const features = [
    {
      name: 'You\'ve come to the right place',
      description:
        'Whether you\'re a fresher or an experienced professional looking to build a career in cybersecurity, we have the perfect program for you.',
      icon: BadgeCheck,
    },
    {
      name: 'Specialized Training for All Skill Levels',
      description:
        'We offer specialized cybersecurity training tailored for all skill levels - from basic to expert level courses.',
      icon: ShieldCheck,
    },
    {
      name: '70% Practical, 30% Theory',
      description:
        'Our training structure focuses on hands-on learning with 70% practical exercises and 30% theoretical knowledge.',
      icon: Code2,
    },
    {
      name: 'Why Choose Us?',
      description:
        'Hands-on training of Red and Blue Team. Trusted by 5000+ students globally. Associated with 28 companies worldwide. Students placed in IBM, Dell, Wipro, Capgemini, TCS & more.',
      icon: Users,
    },
  ]

  const courses = [
    {
      id: "ai-driven-cyber-security",
      title: "AI-Driven Cyber Security",
      description: "SOC Analyst Job-Ready Program (L1-L2) with AI-assisted investigation skills.",
      duration: "20 Hours",
      level: "Beginner",
      icon: Cpu,
    },
    {
      id: 1,
      title: 'Certified Ethical Hacker (CEH)',
      description: 'Master ethical hacking techniques and tools used by security professionals.',
      duration: '6 months',
      level: 'Intermediate',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'SOC Analyst Training',
      description: 'Learn to monitor, detect, and respond to cybersecurity incidents.',
      duration: '4 months',
      level: 'Beginner',
      icon: BrainCircuit,
    },
    {
      id: 3,
      title: 'Splunk Admin & Developer',
      description: 'Become proficient in Splunk for security monitoring and data analysis.',
      duration: '3 months',
      level: 'Intermediate',
      icon: Code2,
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing Orbs - theme adaptive */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 overflow-hidden">
        {/* Futuristic Cybersecurity Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated Circuit Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="hsl(189, 94%, 43%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Animated Circuit Paths */}
              <g stroke="url(#circuit-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse opacity-30 dark:opacity-60">
                <path d="M0,100 Q200,50 400,100 T800,100" />
                <path d="M0,200 Q300,150 600,200 T1200,200" />
                <path d="M0,300 Q150,250 300,300 T600,300" />
                <path d="M200,0 Q250,150 300,300 T400,600" />
                <path d="M500,0 Q550,200 600,400 T700,800" />
                <path d="M800,0 Q850,100 900,200 T1000,400" />
              </g>
              
              {/* Glowing Nodes */}
              <g fill="hsl(217, 91%, 60%)" className="animate-pulse">
                <circle cx="200" cy="100" r="3" opacity="0.5">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="200" r="2" opacity="0.4">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="300" r="4" opacity="0.5">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="800" cy="150" r="2" opacity="0.3">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="1.8s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>

          {/* Animated Data Streams */}
          {mounted && (
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 bg-gradient-to-b from-transparent via-cyan-400/40 dark:via-cyan-400/60 to-transparent"
                  style={{
                    left: `${5 + i * 6}%`,
                    height: '200px',
                    animation: `dataStream ${3 + i * 0.5}s linear infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Hexagonal Tech Grid */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, hsl(217, 91%, 60%) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, hsl(189, 94%, 43%) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'techGrid 10s linear infinite',
              }}
            />
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Floating Security Icons with Glow */}
          <Shield className="absolute top-20 left-10 w-12 h-12 sm:w-16 sm:h-16 text-primary/30 dark:text-blue-400/60 animate-float drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" style={{ animationDelay: "0s", animationDuration: "4s" }} />
          <Lock className="absolute top-40 right-20 w-10 h-10 sm:w-12 sm:h-12 text-cyan-500/30 dark:text-cyan-400/60 animate-float drop-shadow-[0_0_6px_rgba(6,182,212,0.3)] dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]" style={{ animationDelay: "0.5s", animationDuration: "5s" }} />
          <Terminal className="absolute bottom-40 left-20 w-11 h-11 sm:w-14 sm:h-14 text-primary/30 dark:text-blue-400/60 animate-float drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" style={{ animationDelay: "1s", animationDuration: "4.5s" }} />
          <Network className="absolute bottom-20 right-10 w-12 h-12 sm:w-16 sm:h-16 text-cyan-500/30 dark:text-cyan-400/60 animate-float drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]" style={{ animationDelay: "1.5s", animationDuration: "5.5s" }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center relative z-10">

            {/* Futuristic "I AM CYBER SOLDIER" Badge */}
            <div className={cn(
              "inline-block mb-8 px-6 py-3 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm animate-border-glow",
              mounted && "animate-in fade-in slide-in-from-top duration-1000"
            )}>
              <span className="font-cyber text-sm sm:text-base font-bold tracking-[0.2em] bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                I AM CYBER SOLDIER
                <Zap className="w-4 h-4 text-primary" />
              </span>
            </div>

            <h1 className={cn(
              "text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6",
              mounted && "animate-in fade-in slide-in-from-bottom duration-1000 delay-200"
            )}>
              <span className="text-foreground">Empowering the Future of </span>
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                Cyber Security
              </span>
            </h1>
            
            <p className={cn(
              "mt-6 text-base sm:text-lg leading-8 text-muted-foreground max-w-2xl mx-auto",
              mounted && "animate-in fade-in slide-in-from-bottom duration-1000 delay-300"
            )}>
              We offer specialized cybersecurity training tailored for all skill levels.
              Our training structure: 70% practical, 30% theory for hands-on learning.
              Start your journey with us and become a Cyber Soldier today!
            </p>
            
            <div className={cn(
              "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
              mounted && "animate-in fade-in slide-in-from-bottom duration-1000 delay-500"
            )}>
              <Link href="/courses">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white border-0 shadow-lg shadow-primary/30 dark:shadow-primary/50 hover:shadow-primary/50 dark:hover:shadow-primary/70 transition-all duration-300"
                >
                  <Terminal className="mr-2 h-5 w-5" />
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/mcq-test">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 dark:border-yellow-500/50 text-foreground hover:bg-primary/5 dark:hover:bg-yellow-500/10 hover:border-primary/50 dark:hover:border-yellow-500 backdrop-blur-sm transition-all duration-300"
                >
                  <BadgeCheck className="mr-2 h-5 w-5" />
                  Test Knowledge
                </Button>
              </Link>
              <Link href="/assistant">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
                >
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  Try AI Assistant
                </Button>
              </Link>
            </div>

            {/* Cyber Stats Bar */}
            <div className={cn(
              "mt-20 grid grid-cols-2 md:grid-cols-4 gap-4",
              mounted && "animate-in fade-in slide-in-from-bottom duration-1000 delay-700"
            )}>
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="relative group p-6 rounded-xl border border-primary/15 dark:border-primary/20 bg-card/60 dark:bg-card/50 backdrop-blur-md hover:border-primary/40 dark:hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-cyan-500/3 dark:from-primary/5 dark:to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <dd className="text-3xl font-bold text-foreground mb-1">{stat.value}</dd>
                    <dt className="text-sm text-muted-foreground">{stat.name}</dt>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MSME Certification Highlight */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 via-cyan-500/5 to-primary/5 dark:from-primary/10 dark:via-cyan-500/10 dark:to-primary/10 rounded-2xl border border-primary/15 dark:border-primary/20 p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[hsl(var(--badge-bg))] text-[hsl(var(--badge-text))] border border-[hsl(var(--badge-border))]">
                  <span className="text-sm font-semibold">🏛️ GOVERNMENT REGISTERED</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="text-foreground">MSME Registered </span>
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Training Institute
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Udyam Registration Number: <span className="font-semibold text-primary">UDYAM-MH-26-0806430</span>
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center p-6 rounded-xl bg-card/60 dark:bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/15 to-cyan-500/15 dark:from-primary/20 dark:to-cyan-500/20 flex items-center justify-center">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Industry-Focused Training</h3>
                  <p className="text-sm text-muted-foreground">Professional cybersecurity courses designed for real-world applications</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-card/60 dark:bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/15 to-cyan-500/15 dark:from-primary/20 dark:to-cyan-500/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Internship Programs</h3>
                  <p className="text-sm text-muted-foreground">Hands-on internship opportunities with industry experience</p>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-card/60 dark:bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/15 to-cyan-500/15 dark:from-primary/20 dark:to-cyan-500/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Certified Courses</h3>
                  <p className="text-sm text-muted-foreground">Complete with certifications upon successful completion</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-base text-muted-foreground mb-4">
                  <strong className="text-foreground">Committed to shaping the next generation of Cyber Security professionals</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white shadow-md shadow-primary/20">
                      <Shield className="mr-2 h-5 w-5" />
                      Explore Certified Courses
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all">
                      <Users className="mr-2 h-5 w-5" />
                      Contact Us Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 dark:border-cyan-500/50 bg-cyan-500/5 dark:bg-cyan-500/10 backdrop-blur-sm">
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">ADVANCED FEATURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Learn with <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Cutting-Edge</span> Technology
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Experience the future of cybersecurity education with our AI-powered platform and government-registered training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div 
                key={feature.name}
                className={cn(
                  "group relative p-8 rounded-2xl border border-primary/10 dark:border-primary/20 bg-card/60 dark:bg-card/50 backdrop-blur-md hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/3 dark:hover:bg-primary/5 transition-all duration-500",
                  mounted && "animate-in fade-in slide-in-from-bottom duration-1000"
                )}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 dark:from-primary/10 dark:to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm">
              <span className="text-primary text-sm font-semibold">ELITE PROGRAMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Transform Your <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Career</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry-recognized certifications designed by security experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {courses.map((course, index) => (
              <article
                key={course.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-primary/10 dark:border-primary/20 bg-gradient-to-b from-card/70 to-card/50 dark:from-card/60 dark:to-card/40 backdrop-blur-md hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-500 hover:-translate-y-2",
                  mounted && "animate-in fade-in slide-in-from-bottom duration-1000"
                )}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-15 dark:group-hover:opacity-30 blur transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 dark:from-primary/20 dark:to-cyan-500/20 group-hover:from-primary group-hover:to-cyan-500 transition-all duration-300">
                        <course.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 dark:border-primary/30">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-primary/10">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Terminal className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-cyan-500" />
                        <span>5000+ enrolled</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/courses/${course.id === 'ai-driven-cyber-security' ? 'ai-driven-cyber-security' : (course.id === 1 ? 'certified-ethical-hacking' : (course.id === 2 ? 'expert-cyber-security' : 'splunk-admin-developer'))}`} className="flex-1">
                        <Button variant="outline" className="w-full border-primary/20 text-foreground hover:bg-primary/5 transition-all">
                          Details
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button className="w-full bg-primary/5 hover:bg-gradient-to-r hover:from-primary hover:to-cyan-500 text-foreground hover:text-white border border-primary/20 hover:border-transparent transition-all duration-300">
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/courses">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
              >
                Explore All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Frames of Fame Section */}
      <FramesOfFame />

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 dark:via-primary/10 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(217_91%_60%_/_0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,hsl(217_91%_60%_/_0.2),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl border border-primary/15 dark:border-primary/30 bg-gradient-to-br from-primary/3 via-card/60 to-cyan-500/3 dark:from-primary/10 dark:via-card/50 dark:to-cyan-500/10 p-8 sm:p-12 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)_/_0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)_/_0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/15 rounded-full blur-3xl" />
            
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">START YOUR JOURNEY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Ready to Become a <br />
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                  Cybersecurity Expert?
                </span>
              </h2>
              
              <p className="text-lg leading-8 text-muted-foreground mb-10">
                Join thousands of professionals who have transformed their careers with our cutting-edge training programs. Start learning today and secure your future.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white border-0 shadow-lg shadow-primary/30 dark:shadow-primary/50 hover:shadow-primary/50 dark:hover:shadow-primary/70 transition-all duration-300"
                  >
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/assistant">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <BrainCircuit className="mr-2 h-5 w-5" />
                    Talk to AI Assistant
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">28</div>
                  <div className="text-sm text-muted-foreground">Global Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
