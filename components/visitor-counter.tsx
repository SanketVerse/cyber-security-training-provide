"use client"

import { useState, useEffect } from "react"
import { Eye, Users } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const fetchCount = async () => {
      try {
        // Namespace for the website based on the domain to keep it unique
        const namespace = "iamcybersoldier.com"
        const key = "total-visits-v1"
        
        // Countapi.com is a simple, real, and free API for this
        // Increment ONLY once per session to maintain real visit metrics
        const hitMode = !sessionStorage.getItem("tracked_session") ? "hit" : "get"
        const url = `https://api.counterapi.dev/v1/${namespace}/${key}/${hitMode}`
        
        const response = await fetch(url)
        const data = await response.json()
        
        if (data && typeof data.count === 'number') {
          setCount(data.count)
          if (hitMode === "hit") sessionStorage.setItem("tracked_session", "true")
        }
      } catch (error) {
        console.error("Failed to fetch visit count:", error)
        // Fallback to a small local increment if API is temporarily unreachable
        const fallback = parseInt(localStorage.getItem("v_count_fallback") || "10")
        setCount(fallback)
        localStorage.setItem("v_count_fallback", (fallback + 1).toString())
      }
    }

    fetchCount()
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-in fade-in duration-1000 shadow-lg shadow-primary/5 group hover:border-primary/40 transition-all">
      <div className="flex -space-x-1.5 overflow-hidden">
        <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-background">
          <Users className="h-2 w-2 text-primary" />
        </div>
        <div className="h-4 w-4 rounded-full bg-cyan-500/20 flex items-center justify-center ring-2 ring-background">
          <Eye className="h-2 w-2 text-cyan-500" />
        </div>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-[10px] font-cyber font-bold tracking-widest text-primary/60 uppercase">
          Visitors:
        </span>
        <span className="text-xs font-cyber font-bold text-foreground tabular-nums group-hover:text-primary transition-colors">
          {count.toLocaleString()}
        </span>
      </div>
      <div className="flex h-1.5 w-1.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
      </div>
    </div>
  )
}
