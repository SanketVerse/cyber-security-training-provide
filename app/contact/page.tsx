import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - I AM CYBER SOLDIER",
  description: "Contact I AM CYBER SOLDIER for cybersecurity course enrollment and enquiries. Reach Ankita K. Saraf via WhatsApp, Email, or Phone for expert training guidance.",
  keywords: ["contact cybersecurity training", "course enrollment", "cyber security enquiry", "I AM CYBER SOLDIER contact"],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 sm:pt-40 px-4 pb-16 sm:pb-24 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-1000">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 rounded-full border border-primary/30 dark:border-primary/50 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm animate-border-glow">
              <span className="font-cyber text-sm sm:text-base font-bold tracking-[0.2em] bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Contact <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h1>
          </div>

          {/* Enrollment & Course Enquiry Section */}
          <Card className="mb-6 sm:mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-cyan-500/5">
            <CardHeader className="text-center px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-primary">Enrollment & Course Enquiry</CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                For enrollment and further course enquiry, contact me directly through WhatsApp or Email
              </p>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-6">
              <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white w-full sm:min-w-[220px] sm:w-auto h-12 shadow-lg shadow-green-500/20 transition-all duration-300"
                >
                  <a 
                    href="https://wa.me/919226967072?text=Hi%2C%20I%20am%20interested%20in%20I%20AM%20CYBER%20SOLDIER%20courses.%20Please%20provide%20more%20details." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Enrollment
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 text-foreground hover:bg-primary/10 w-full sm:min-w-[220px] sm:w-auto h-12 transition-all duration-300"
                >
                  <a 
                    href="mailto:kundansaraf@gmail.com?subject=Course%20Enquiry%20-%20I%20AM%20CYBER%20SOLDIER&body=Hi%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20cybersecurity%20courses.%20Please%20provide%20details%20about%3A%0A%0A-%20Course%20curriculum%0A-%20Duration%20and%20schedule%0A-%20Fees%20and%20payment%20options%0A-%20Placement%20assistance%0A%0AThank%20you!"
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Email Enquiry
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base px-4 sm:px-6">
                <p className="text-muted-foreground">Reach out to us using the details below.</p>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-foreground">Contact Person</div>
                    <div className="text-muted-foreground">Ankita K. Saraf</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">
                      <a 
                        href="tel:+919226967072" 
                        className="hover:text-primary transition-colors text-base font-medium underline decoration-dotted"
                      >
                        (+91) 92269 67072
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">
                      <a 
                        href="mailto:kundansaraf@gmail.com" 
                        className="hover:text-primary transition-colors break-all underline decoration-dotted"
                      >
                        kundansaraf@gmail.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-muted-foreground leading-relaxed">
                      Vastushilp 1, Pune, Maharashtra, India – 412105
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg">Quick Links & Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base px-4 sm:px-6">
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/courses" 
                    className="text-primary hover:underline flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-lg">📚</span>
                    <span>View All Courses</span>
                  </Link>
                  <Link 
                    href="/founder" 
                    className="text-primary hover:underline flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-lg">👨‍🎓</span>
                    <span>Meet Our Founder</span>
                  </Link>
                  <Link 
                    href="/assistant" 
                    className="text-primary hover:underline flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-lg">🤖</span>
                    <span>AI Course Advisor</span>
                  </Link>
                </div>
                <div className="pt-2 space-y-3">
                  <Button asChild className="w-full h-11 border-primary/20 text-foreground hover:bg-primary/5" variant="outline">
                    <a href="tel:+919226967072" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Direct Call
                    </a>
                  </Button>
                  <Button asChild className="w-full h-11 bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white shadow-lg shadow-primary/20">
                    <a 
                      href="https://wa.me/919226967072" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Quick WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
