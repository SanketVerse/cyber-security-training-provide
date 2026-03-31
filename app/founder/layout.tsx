import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founder's Profile - Dr. Kundankumar Saraf",
  description: "Learn about the legacy of Dr. Kundankumar Saraf, a cybersecurity expert with 15+ years of industry experience and 5000+ students trained globally.",
  keywords: ["Kundan Saraf", "Cyber Security Founder", "Security Consultant", "Cyber Defense Expert", "SIEM Architect", "Cyber-Secure Academy Founder"],
}

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
