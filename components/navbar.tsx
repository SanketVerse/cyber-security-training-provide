"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Shield, MoreVertical, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Founder", href: "/founder" },
  { name: "AI Assistant", href: "/assistant" },
  { name: "Knowledge Test", href: "/mcq-test" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-[60] w-full transition-all duration-500",
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10"
          : "bg-background/20 backdrop-blur-sm"
      )}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo & Brand */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            {/* Logo Image Frame */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-xl bg-primary/20 backdrop-blur-[4px] border-[1.5px] border-primary/40 shadow-xl group-hover:border-primary/80 transition-all duration-300" />
              <div className="relative w-full h-full p-1 flex items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/logo2.png"
                  alt="I AM CYBER SOLDIER"
                  width={256}
                  height={256}
                  unoptimized={true}
                  className="w-full h-full object-contain drop-shadow-md scale-110"
                  style={{ imageRendering: 'crisp-edges' }}
                  priority
                />
              </div>
            </div>

            {/* Brand text */}
            <div className="flex flex-col">
              <span className="font-cyber text-xs sm:text-base font-bold tracking-wider bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                I AM CYBER
              </span>
              <span className="font-cyber text-[8px] sm:text-[10px] font-semibold tracking-[0.2em] text-foreground/70 uppercase">
                SOLDIER
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile controls: Theme toggle & "Three dot" menu */}
        <div className="flex items-center gap-2 lg:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-primary/20 bg-primary/5 text-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400 animate-pulse-slow" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
          )}
          
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoreVertical className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span 
                  layoutId="nav-active"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full" 
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop right side actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-yellow-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-primary group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          )}

          <Link href="/contact">
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 font-semibold px-5"
            >
              <Shield className="mr-1.5 h-4 w-4" />
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-primary/20 overflow-hidden bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Profile/Quick Info Section */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-primary/5 border border-primary/10 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-cyber text-sm font-bold text-primary">Cyber Academy</span>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-widest">Premium Training</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-1 gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                      pathname === item.href
                        ? "text-primary bg-primary/10 border-l-4 border-primary shadow-sm"
                        : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
                    )}
                  >
                    <span>{item.name}</span>
                    {pathname === item.href && <ChevronDown className="h-4 w-4 -rotate-90 text-primary" />}
                  </Link>
                ))}
              </div>

              {/* Mobile Actions with Switch */}
              <div className="pt-4 border-t border-primary/10 space-y-4">
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    {theme === 'dark' ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-primary" />}
                    <span className="text-sm font-medium">Appearance</span>
                  </div>
                  
                  {/* Stylized Toggle Switch */}
                  <button 
                    onClick={toggleTheme}
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
                      theme === 'dark' ? "bg-primary" : "bg-muted"
                    )}
                  >
                    <span className="sr-only">Toggle theme</span>
                    <span
                      className={cn(
                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                        theme === 'dark' ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>

                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white h-12 text-base font-bold shadow-xl shadow-primary/20">
                    Join Academy Today
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
