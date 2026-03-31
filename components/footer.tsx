"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import { VisitorCounter } from "./visitor-counter"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Founder', href: '/founder' },
    { name: 'AI Assistant', href: '/assistant' },
    { name: 'Knowledge Test', href: '/mcq-test' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative border-t border-primary/10 dark:border-primary/20 bg-card/50 dark:bg-card/30 backdrop-blur-lg">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-xl bg-primary/10 backdrop-blur-[1px] border border-primary/20 shadow-lg shadow-primary/5 group-hover:border-primary/40 transition-all" />
                <div className="relative w-full h-full p-1.5 flex items-center justify-center">
                  <Image
                    src="/logo2.png"
                    alt="I AM CYBER SOLDIER Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
              </div>
              <span className="font-cyber text-sm font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                I AM CYBER SOLDIER
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering the future of Cyber Security with specialized training.
              MSME Registered (UDYAM-MH-26-0806430).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>kundansaraf@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+91 92269 67072</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {currentYear} I AM CYBER SOLDIER. All rights reserved.
            </p>
            <VisitorCounter />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground/60 shrink-0">
            <Shield className="h-3 w-3" />
            <span className="whitespace-nowrap italic">Securing the Digital Future Globally</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
