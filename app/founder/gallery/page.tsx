"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  ChevronLeft, 
  Camera,
  History,
  Users,
  Building2,
  Award,
  Maximize2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const galleryImages = [
  { src: "/1.jpg", title: "Live Group Training", description: "Empowering next-gen cyber warriors in a collaborative environment." },
  { src: "/2.jpg", title: "Enterprise Workshop", description: "Strategic session on SIEM implementation for corporate partners." },
  { src: "/3.jpg", title: "Hands-on Lab Session", description: "Deep dive into real-world threat hunting and incident response." },
  { src: "/4.jpg", title: "Global Training Delivery", description: "Sharing cybersecurity expertise with international professionals." },
  { src: "/5.jpg", title: "Technical Seminar", description: "Addressing complex security architecture at a leading summit." },
  { src: "/IMG_0255.jpg", title: "Certification ceremony", description: "Celebrating the success of specialized cyber security cohorts." }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/founder">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 group">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Founder Profile
            </Button>
          </Link>

          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm animate-border-glow">
              <Camera className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-[0.2em] text-primary uppercase">Frames of Fame</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">Training <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent italic">Impact</span></h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Witness the real-world impact of over 50+ international training sessions delivered across the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <Card key={index} className="group relative overflow-hidden border-primary/20 bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-xl shadow-primary/5">
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                   <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   
                   {/* Hover Overlay Content */}
                   <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{img.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-primary">
                         <Maximize2 className="h-4 w-4" />
                         <span className="text-[10px] uppercase font-cyber tracking-widest font-bold">Enlarge View</span>
                      </div>
                   </div>

                   {/* Corner Badge */}
                   <div className="absolute top-0 right-0 p-4 z-10">
                      <div className="h-10 w-10 rounded-xl bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         <Zap className="h-5 w-5" />
                      </div>
                   </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Impact Stats Footer */}
          <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center border-t border-primary/10 pt-12">
             <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-cyan-400 bg-clip-text text-transparent">50+</div>
                <p className="text-xs font-cyber tracking-[0.2em] text-muted-foreground uppercase font-bold">Global Sessions</p>
             </div>
             <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-cyan-400 bg-clip-text text-transparent">5000+</div>
                <p className="text-xs font-cyber tracking-[0.2em] text-muted-foreground uppercase font-bold">Trained Minds</p>
             </div>
             <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-cyan-400 bg-clip-text text-transparent">28+</div>
                <p className="text-xs font-cyber tracking-[0.2em] text-muted-foreground uppercase font-bold">Associated Corps</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
