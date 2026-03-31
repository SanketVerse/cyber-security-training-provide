import "./globals.css";
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { FloatingAIAssistant } from "@/components/floating-ai-assistant"

export const metadata: Metadata = {
  title: {
    default: "I AM CYBER SOLDIER - Cyber Security Training",
    template: "%s | I AM CYBER SOLDIER"
  },
  description: "Empowering the Future of Cyber Security. Specialized training tailored for all skill levels with 70% practical, 30% theory approach. Expert-led courses with industry placements.",
  icons: {
    icon: '/logo2.png'
  },
  keywords: ["cybersecurity training", "ethical hacking", "SOC analyst", "cyber security courses", "penetration testing", "SIEM", "Splunk training", "cyber security certification"],
  authors: [{ name: "Dr. Kundankumar Saraf" }],
  creator: "I AM CYBER SOLDIER",
  publisher: "I AM CYBER SOLDIER",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamcybersoldier.com",
    siteName: "I AM CYBER SOLDIER",
    title: "I AM CYBER SOLDIER - Cyber Security Training",
    description: "Empowering the Future of Cyber Security. Expert-led training with 70% practical, 30% theory approach.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "I AM CYBER SOLDIER - Cyber Security Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I AM CYBER SOLDIER - Cyber Security Training",
    description: "Empowering the Future of Cyber Security. Expert-led training with industry placements.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
          <FloatingAIAssistant />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
