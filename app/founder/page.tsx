"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { 
  Zap, 
  Briefcase, 
  Target, 
  Trophy, 
  GraduationCap, 
  Award, 
  Wrench, 
  Library,
  ChevronRight,
  ShieldCheck,
  Star,
  Camera,
  CheckCircle2,
  ChevronLeft
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function FounderPage() {
  const certifications = [
    "Ph.D. in Cyber Security",
    "Certified Information Security Manager (CISM)",
    "SOC & SIEM Specialist",
    "20+ International Journals, Patent, Book Chapters, and Copyright",
    "15 years of industry experience",
    "Associated with 28 companies worldwide",
    "50+ international training sessions delivered"
  ]

  const overviewLinks = [
    { name: "Professional Experience", icon: Briefcase, href: "/founder/experience", color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Core Competencies", icon: Target, href: "/founder/competencies", color: "text-cyan-400", bg: "bg-cyan-400/10" },
    { name: "Awards & Achievements", icon: Trophy, href: "/founder/awards", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { name: "Academic Education", icon: GraduationCap, href: "/founder/education", color: "text-teal-400", bg: "bg-teal-400/10" },
    { name: "Professional Certs", icon: Award, href: "/founder/certifications", color: "text-primary", bg: "bg-primary/10" },
    { name: "Technical Expertise", icon: Wrench, href: "/founder/technical-expertise", color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Global Publications", icon: Library, href: "/founder/publications", color: "text-secondary", bg: "bg-secondary/10" },
  ]

  const galleryImages = [
    { src: "/1.jpg", title: "Live Group Training" },
    { src: "/2.jpg", title: "Enterprise Workshop" },
    { src: "/3.jpg", title: "Hands-on Lab Session" },
    { src: "/4.jpg", title: "Global Training Delivery" },
    { src: "/5.jpg", title: "Technical Seminar" },
    { src: "/IMG_0255.jpg", title: "Certification Ceremony" },
    { src: "/7.jpg", title: "Cyber Defense Drill" },
    { src: "/8.jpg", title: "Interactive Q&A Session" },
    { src: "/10.jpg", title: "Advanced Security Training" }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scrollAction = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 sm:pt-40 px-4 pb-16 sm:pb-24 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm animate-border-glow">
              <Zap className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm sm:text-base font-bold tracking-[0.2em] bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer uppercase">
                Director & Chief Strategist
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Founder&apos;s <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent italic">Profile</span>
            </h1>
          </div>
        
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column: Essential Info */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-primary/20 bg-card/60 backdrop-blur-md overflow-hidden sticky top-8">
                <CardHeader className="p-8 text-center">
                  <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/20 to-cyan-500/20 flex-shrink-0 animate-glow-pulse mb-6">
                    <Image
                      src="/highqualityimage.jpg"
                      alt="Dr. Kundankumar Saraf"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Dr. Kundankumar Saraf</CardTitle>
                  <p className="text-sm font-cyber font-bold tracking-wider text-primary mt-2 italic uppercase">
                    Cyber Security Leader
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-4">
                  <div className="flex flex-col gap-2">
                    {certifications.slice(0, 4).map((cert, index) => (
                      <div key={index} className="flex items-center gap-3 p-2.5 rounded-lg bg-primary/5 border border-primary/10 text-xs font-medium text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {cert}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-3 pt-4">
                     <Link href="mailto:kundansaraf@gmail.com" className="w-full">
                        <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 transition-all">
                          Contact Directly
                        </Button>
                     </Link>
                     <Link href="/contact" className="w-full">
                        <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white border-0 shadow-lg shadow-primary/20 transition-all">
                          Schedule Meeting
                        </Button>
                     </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Narrative & Professional Hub */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-md border border-primary/20 shadow-xl shadow-primary/5">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Star className="h-7 w-7 text-primary" />
                  Professional Narrative
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    With over <span className="text-foreground font-bold">15 years</span> of elite industry experience, Dr. Saraf has spearheaded transformational cyber defense initiatives across Banking, Finance, Telecom, Pharmaceutical, Media, and Sports sectors globally.
                  </p>
                  <p>
                    He currently serves as a <span className="text-foreground font-bold">SOC Manager & Cybersecurity Program Manager</span> at Wipro, overseeing complex security operations for global giants. His portfolio includes securing high-stakes platforms such as <span className="text-foreground font-bold">FIFA World Cup 2026</span> Ticketing Systems and <span className="text-foreground font-bold">Global Olympic</span> event infrastructure.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {overviewLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="group">
                    <Card className="h-full border-primary/10 bg-card/40 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 overflow-hidden relative">
                       <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <CardHeader className="flex flex-row items-center gap-4 py-4">
                          <div className={`p-2.5 rounded-xl ${link.bg} ${link.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                             <link.icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{link.name}</CardTitle>
                          <ChevronRight className="h-5 w-5 text-muted-foreground/30 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                       </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Training Gallery Slider: "Frames of Fame" */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-primary/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Camera className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-cyber tracking-wider">Frames of Fame</h2>
                  <p className="text-muted-foreground">Witnessing the real-world impact of over 50+ international training sessions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scrollAction("left")} 
                  disabled={!canScrollLeft}
                  className="rounded-xl border-primary/20 hover:bg-primary/10 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scrollAction("right")} 
                  disabled={!canScrollRight}
                  className="rounded-xl border-primary/20 hover:bg-primary/10 disabled:opacity-30 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 transition-all"
              style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
              }}
            >
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative min-w-[85vw] md:min-w-[70%] aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 snap-center group"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                     <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 font-cyber font-bold tracking-widest px-3 py-1 text-[10px]">
                        LIVE IMPACT SESSION
                     </Badge>
                     <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{img.title}</h3>
                     <div className="flex items-center gap-2 text-primary/80 font-medium text-xs md:text-sm">
                        <Zap className="h-3 w-3" />
                        <span>Empowering Global Talent with Cyber-Secure Academy</span>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievement Highlights Banner */}
          <div className="mt-16 relative p-1 rounded-3xl bg-gradient-to-r from-primary/30 via-cyan-500/30 to-primary/30">
             <div className="bg-background/90 backdrop-blur-xl rounded-[22px] p-8">
                <div className="flex flex-wrap justify-between gap-8 text-center md:text-left">
                   <div>
                      <div className="text-4xl font-bold text-foreground">5000+</div>
                      <div className="text-xs font-cyber tracking-widest text-primary uppercase font-bold mt-1">Students Trained</div>
                   </div>
                   <div className="hidden md:block w-px bg-primary/20" />
                   <div>
                      <div className="text-4xl font-bold text-foreground">60+</div>
                      <div className="text-xs font-cyber tracking-widest text-cyan-400 uppercase font-bold mt-1">Certs Earned</div>
                   </div>
                   <div className="hidden md:block w-px bg-primary/20" />
                   <div>
                      <div className="text-4xl font-bold text-foreground">28+</div>
                      <div className="text-xs font-cyber tracking-widest text-teal-400 uppercase font-bold mt-1">Global Companies</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
