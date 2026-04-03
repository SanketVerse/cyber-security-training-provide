"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Zap, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const galleryImages = [
  { src: "/1.jpg", title: "Corporate Security Training" },
  { src: "/2.jpg", title: "Cyber Defense Workshop" },
  { src: "/3.jpg", title: "Enterprise SOC Deployment" },
  { src: "/4.jpg", title: "Global Training Delivery" },
  { src: "/5.jpg", title: "Advanced Threat Hunting" }
]

export function FramesOfFame() {
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <Camera className="w-4 h-4 text-primary" />
                <span className="font-cyber text-xs font-bold tracking-widest text-primary uppercase">Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-cyber tracking-wider text-foreground">
                Frames of <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Fame</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
                Witnessing the real-world impact of our training sessions. Swipe to scroll or use the arrows to slide.
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("left")} 
                disabled={!canScrollLeft}
                className="rounded-xl border-primary/20 hover:bg-primary/10 disabled:opacity-30 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll("right")} 
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
                      <span>Empowering Professionals with Cyber-Secure Academy</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
