"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, X, Send, Minimize2, MessageSquare, ExternalLink, Shield, GraduationCap, User, Phone, BookOpen, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
    keywords: ["course", "learn", "study", "program", "certified", "training"],
    response: "We offer elite cybersecurity programs from beginner to expert level. You can explore all our practical-focused courses below:",
    links: [
      { text: "All Courses", url: "/courses" },
      { text: "SOC Analyst", url: "/courses/soc-analyst-1" },
      { text: "Ethical Hacking", url: "/courses/certified-ethical-hacking" }
    ]
  },
  {
    keywords: ["contact", "call", "whatsapp", "email", "enroll", "join"],
    response: "You can enroll or get more details by contacting our team via WhatsApp or Email. We're ready to guide you!",
    links: [
      { text: "Contact Details", url: "/contact" },
      { text: "WhatsApp Us", url: "https://wa.me/919226967072" }
    ]
  },
  {
    keywords: ["founder", "who", "saraf", "teacher", "trainer", "experience", "kundan"],
    response: "Our Academy is led by Dr. Kundankumar Saraf, who has over 15 years of industry experience and has trained 5000+ students globally.",
    links: [{ text: "Meet the Founder", url: "/founder" }]
  },
  {
    keywords: ["test", "mcq", "knowledge", "evaluate", "exam", "quiz"],
    response: "Evaluate your cybersecurity skills with our free knowledge test and see where you stand!",
    links: [{ text: "Take MCQ Test", url: "/mcq-test" }]
  },
  {
    keywords: ["location", "pune", "address", "offline", "where", "office"],
    response: "We are located at Vastushilp 1, Pune, Maharashtra. We also offer comprehensive online training sessions.",
    links: [{ text: "Get Directions", url: "/contact" }]
  },
  {
    keywords: ["job", "placement", "salary", "career", "ibm", "tcs", "wipro"],
    response: "Our students transition to roles in IBM, Dell, and TCS. Our 70% practical approach ensures you're job-ready from day one.",
    links: [{ text: "Placement Info", url: "/courses" }]
  }
]

export function FloatingAIAssistant() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your I AM CYBER SOLDIER navigator. How can I help you find what you need today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ])
    
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && !isMinimized && scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth"
      })
    }
  }, [messages, isOpen, isMinimized])

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase()
    const match = FAQ_DATA.find(faq => 
      faq.keywords.some(keyword => lowerQuery.includes(keyword))
    )

    if (match) {
      return { text: match.response, links: match.links }
    }

    return {
      text: "I can help you find courses, contact info, meeting our founder, or taking a test. What would you like to explore?",
      links: [
        { text: "View Courses", url: "/courses" },
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
    }, 400)
  }

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
    setShowBubble(false)
    setIsMinimized(false)
  }

  if (!isMounted) return null

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 translate-y-0">
        {showBubble && (
          <div 
            className="cursor-pointer bg-card border border-primary/20 p-3 rounded-2xl rounded-br-none shadow-xl animate-in slide-in-from-right-10 fade-in duration-500 max-w-[200px]"
            onClick={toggleOpen}
          >
            <p className="text-xs font-semibold text-foreground flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" />
              Need help navigating?
            </p>
          </div>
        )}
        <button
          onClick={toggleOpen}
          className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 flex items-center justify-center group active:scale-95 transition-all duration-200 border-4 border-background"
          aria-label="Toggle Assistant"
        >
          <Bot className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    )
  }

  return (
    <Card className={cn(
      "fixed bottom-6 right-6 z-50 flex flex-col border-primary/20 bg-card shadow-2xl transition-all duration-300 ring-1 ring-primary/10 overflow-hidden sm:max-h-[85vh] sm:max-w-[400px]",
      isMinimized ? "w-64 h-14" : "w-[360px] h-[520px] max-w-[calc(100vw-2rem)]"
    )}>
      {/* Header */}
      <CardHeader className="border-b bg-muted/30 p-3 flex-shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => isMinimized && setIsMinimized(false)}
          >
            <div className="h-8 w-8 rounded-full bg-primary ring-2 ring-primary/20 flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold truncate max-w-[140px]">CyberSec Navigator</span>
              {!isMinimized && <span className="text-[10px] text-green-500 font-medium tracking-tighter">Site Assistant</span>}
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsMinimized(!isMinimized)}>
              <Minimize2 className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive" onClick={() => setIsOpen(false)}>
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {!isMinimized && (
        <>
          <CardContent 
            ref={scrollContainerRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-muted/5 scrollbar-none"
          >
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  message.sender === 'user' ? "items-end" : "items-start"
                )}
              >
                <div className={cn(
                  "max-w-[85%] rounded-2xl p-3 text-[13px] leading-relaxed",
                  message.sender === 'user' 
                    ? "bg-primary text-primary-foreground rounded-tr-none shadow-md shadow-primary/10" 
                    : "bg-muted text-foreground rounded-tl-none border"
                )}>
                  {message.text}
                  {message.links && (
                    <div className="mt-3 flex flex-col gap-1.5 pt-2 border-t border-border/50">
                      {message.links.map((link, idx) => (
                        <Link 
                          key={idx} 
                          href={link.url}
                          className={cn(
                            "group inline-flex items-center justify-between px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-200",
                            message.sender === 'user' 
                              ? "bg-white/20 hover:bg-white/30 text-white" 
                              : "bg-primary/5 hover:bg-primary/10 text-primary uppercase tracking-wider"
                          )}
                          onClick={() => {
                            if (window.innerWidth < 768) setIsMinimized(true)
                          }}
                        >
                          {link.text}
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[8px] opacity-40 px-1 font-bold uppercase">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 items-center px-1">
                <div className="h-1 w-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-1 w-1 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-1 w-1 bg-primary/40 rounded-full animate-bounce" />
              </div>
            )}
          </CardContent>
          
          <div className="px-3 py-2 flex gap-2 border-t bg-muted/20 overflow-x-auto scrollbar-none shrink-0">
            {[
              { icon: BookOpen, label: "Courses", cmd: "What courses?" },
              { icon: GraduationCap, label: "MCQ Test", cmd: "Take a test" },
              { icon: User, label: "Founder", cmd: "Who is the founder?" },
              { icon: Phone, label: "Contact", cmd: "Contact details" }
            ].map((btn, i) => (
              <Button 
                key={i}
                variant="outline" size="sm" className="h-7 text-[10px] rounded-full flex-shrink-0 border-primary/20 bg-background hover:bg-primary/5 px-2.5 font-bold"
                onClick={() => setInput(btn.cmd)}
              >
                <btn.icon className="h-3 w-3 mr-1 text-primary" /> {btn.label}
              </Button>
            ))}
          </div>

          <CardFooter className="p-3 bg-card border-t shrink-0">
            <div className="flex w-full items-center gap-2">
              <div className="flex-grow relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask any question..."
                  className="h-9 pr-10 bg-muted/50 border-primary/10 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50 text-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Search className="h-3.5 w-3.5 text-muted-foreground/30" />
                </div>
              </div>
              <Button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="h-9 w-9 shrink-0 shadow-lg shadow-primary/20"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  )
}
