"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send, Shield, GraduationCap, User, BookOpen, Search, ArrowRight, Zap, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  links?: { text: string; url: string }[]
}

const FAQ_DATA = [
  {
    keywords: ["course", "learn", "study", "program", "certified", "training", "level"],
    response: "We offer elite cybersecurity training tailored for all skill levels. From Basic foundation to Expert elite programs. Which one interests you?",
    links: [
      { text: "Browse All Courses", url: "/courses" },
      { text: "SOC Analyst 1", url: "/courses/soc-analyst-1" },
      { text: "Ethical Hacking", url: "/courses/certified-ethical-hacking" }
    ]
  },
  {
    keywords: ["contact", "call", "whatsapp", "email", "enroll", "join", "register"],
    response: "Enrollment is easy! You can contact Dr. Kundan Saraf directly for guidance. We have WhatsApp, Phone, and Email support.",
    links: [
      { text: "Go to Contact Page", url: "/contact" },
      { text: "WhatsApp: +91 92269 67072", url: "https://wa.me/919226967072" }
    ]
  },
  {
    keywords: ["founder", "who", "saraf", "teacher", "trainer", "kundan", "about"],
    response: "I AM CYBER SOLDIER is founded by Dr. Kundankumar Saraf. He is a cybersecurity expert with 15+ years of experience and has built a legacy of training 5000+ satisfied students.",
    links: [{ text: "View Founder Profile", url: "/founder" }]
  },
  {
    keywords: ["test", "mcq", "knowledge", "evaluate", "exam", "quiz", "check"],
    response: "Ready to test your cybersecurity skills? Try our free knowledge evaluation test designed by industry experts.",
    links: [{ text: "Start Knowledge Test", url: "/mcq-test" }]
  },
  {
    keywords: ["location", "pune", "address", "offline", "where", "office", "place"],
    response: "Our center is located in Pune, Maharashtra. We provide high-quality offline training at our institute and live online batches globally.",
    links: [{ text: "Location & Directions", url: "/contact" }]
  },
  {
    keywords: ["job", "placement", "salary", "career", "ibm", "tcs", "wipro", "future"],
    response: "We focus on a 70% Practical and 30% Theory approach to ensure you're job-ready. Our students work at global giants like IBM, Dell, Wipro, and TCS.",
    links: [{ text: "Explore Placement Success", url: "/courses" }]
  }
]

export default function AssistantPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Initialize on mount to avoid hydration errors
  useEffect(() => {
    setIsMounted(true)
    setMessages([
      {
        id: 1,
        text: "Welcome to I AM CYBER SOLDIER! I am your interactive site guide. How can I assist your cybersecurity journey today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ])
  }, [])

  // Optimized Scroll to Bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
      })
    }
  }, [messages])

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase()
    const match = FAQ_DATA.find(faq => 
      faq.keywords.some(keyword => lowerQuery.includes(keyword))
    )

    if (match) {
      return { text: match.response, links: match.links }
    }

    return {
      text: "I can help you explore our specialized courses, MCQ tests, founder information, and contact details. What are you looking for?",
      links: [
        { text: "All Courses", url: "/courses" },
        { text: "Contact Support", url: "/contact" }
      ]
    }
  }

  const handleSend = () => {
    if (!input.trim() || isLoading) return
    
    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMsg])
    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)

    // Snap to response
    setTimeout(() => {
      const resp = generateResponse(currentInput)
      const botMsg: Message = {
        id: Date.now() + 1,
        text: resp.text,
        sender: 'bot',
        timestamp: new Date(),
        links: resp.links
      }
      setMessages(prev => [...prev, botMsg])
      setIsLoading(false)
    }, 500)
  }

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 pt-32 sm:pt-40 pb-16 sm:pb-24 flex-grow flex flex-col max-w-6xl">
        <div className="text-center mb-10 shrink-0">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-cyber text-[10px] sm:text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent uppercase">
              Site Navigator
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
            Interactive <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent italic">Site Guide</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto opacity-80">
            Get instant answers about courses, placements, and academy details.
          </p>
        </div>

        <Card className="flex-grow flex flex-col border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-primary/10 mb-8 min-h-[500px]">
          <CardHeader className="border-b bg-muted/20 p-4 shrink-0 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold">CyberSec Advisor</span>
                  <span className="text-[10px] sm:text-xs text-green-500 flex items-center gap-1.5 font-semibold">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                    System Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <Link href="/contact" className="hover:text-primary transition-all p-2 rounded-full hover:bg-primary/10">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                 </Link>
              </div>
            </div>
          </CardHeader>
        
          <CardContent 
            ref={scrollContainerRef}
            className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.02),transparent_50%)]"
          >
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex animate-in fade-in slide-in-from-bottom-4 duration-500",
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div 
                  className={cn(
                    "max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 shadow-inner transition-all",
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none shadow-primary/20' 
                      : 'bg-muted/90 border border-border/50 text-foreground rounded-tl-none ring-1 ring-white/5'
                  )}
                >
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  
                  {message.links && (
                    <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-black/5 dark:border-white/5">
                      {message.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.url}
                          className={cn(
                            "group flex items-center justify-between px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 transform active:scale-95",
                            message.sender === 'user'
                              ? "bg-white/10 hover:bg-white/20 text-white"
                              : "bg-primary/5 hover:bg-primary/10 text-primary border border-primary/10"
                          )}
                        >
                          {link.text}
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-[9px] opacity-40 mt-3 text-right font-bold tracking-widest uppercase">
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl border flex items-center gap-3">
                  <div className="flex space-x-1">
                    <div className="h-1 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-1 w-1 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-1 w-1 bg-primary rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Searching...</span>
                </div>
              </div>
            )}
          </CardContent>
          
          <div className="px-4 py-3 border-t bg-muted/30 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2 shrink-0">
            {[
              { icon: BookOpen, label: "All Courses", cmd: "What are the courses?" },
              { icon: GraduationCap, label: "Take Test", cmd: "mcq knowledge test" },
              { icon: User, label: "Founder", cmd: "who is kundan saraf?" },
              { icon: Mail, label: "Enroll", cmd: "how to enroll?" },
              { icon: Phone, label: "Contact", cmd: "contact details" }
            ].map((tip, i) => (
              <Button 
                key={i}
                variant="outline" 
                size="sm" 
                className="rounded-full text-[10px] font-bold bg-background border-primary/10 hover:bg-primary hover:text-white transition-all h-7 px-3"
                onClick={() => setInput(tip.cmd)}
              >
                <tip.icon className="h-3 w-3 mr-1.5" />
                {tip.label}
              </Button>
            ))}
          </div>

          <CardFooter className="p-4 bg-card border-t shrink-0">
            <div className="flex w-full items-center gap-3 bg-muted/50 border border-primary/10 rounded-2xl p-2 focus-within:ring-2 ring-primary/20 transition-all">
              <div className="h-8 w-8 flex items-center justify-center text-primary/40 pl-2">
                <Search className="h-4 w-4" />
              </div>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                disabled={isLoading}
                className="flex-grow border-0 focus-visible:ring-0 bg-transparent text-foreground placeholder:text-muted-foreground/40 h-10 text-sm font-medium"
              />
              <Button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90 text-white shadow-lg h-10 px-4 sm:px-6 rounded-xl group"
              >
                <span className="hidden sm:inline mr-2 text-xs font-bold uppercase tracking-wider">Send</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
