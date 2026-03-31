"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

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

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-background/30 backdrop-blur-sm"
      )}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"
        aria-label="Global"
      >
        {/* Logo & Brand */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Image Frame */}
            <div className="relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-primary/20 backdrop-blur-[2px] border border-primary/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:border-primary/60 transition-all duration-300" />
              <div className="relative w-full h-full p-1.5 flex items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/logo2.png"
                  alt="I AM CYBER SOLDIER"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain drop-shadow-md"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  priority
                />
              </div>
              {/* Animated scanning effect across the logo frame */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100" />
            </div>

            {/* Brand text */}
            <div className="flex flex-col">
              <span className="font-cyber text-sm sm:text-base font-bold tracking-wider bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer">
                I AM CYBER
              </span>
              <span className="font-cyber text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-foreground/70 uppercase">
                SOLDIER
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
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
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 text-primary group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          )}

          <Link href="/contact">
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white border-0 shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 font-semibold"
            >
              <Shield className="mr-1.5 h-3.5 w-3.5" />
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-10 w-full sm:max-w-sm overflow-y-auto bg-background border-l border-primary/20 shadow-2xl shadow-primary/10 transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-muted/20">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 rounded-xl bg-primary/10 backdrop-blur-[1px] border border-primary/30 shadow-lg shadow-primary/10" />
                <div className="relative w-full h-full p-1 flex items-center justify-center">
                  <Image
                    src="/logo2.png"
                    alt="Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
              </div>
              <span className="font-cyber text-base font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                I AM CYBER SOLDIER
              </span>
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-foreground/60 hover:text-foreground hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile nav links */}
          <div className="p-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-primary bg-primary/10 border-l-2 border-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile bottom actions */}
          <div className="p-4 border-t border-primary/20 space-y-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 text-foreground/70 hover:text-foreground transition-all"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dark Mode</span>
                  </>
                )}
              </button>
            )}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white shadow-md shadow-primary/30">
                <Shield className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
