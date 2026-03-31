import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Elite Training Programs - I AM CYBER SOLDIER",
  description: "Browse our comprehensive cybersecurity courses, including SOC Analyst, Ethical Hacking, SIEM (Splunk & Sentinel), and advanced security certifications.",
  keywords: ["cybersecurity courses", "ethical hacking training", "SOC analyst certification", "Splunk SIEM course", "Microsoft Sentinel training", "cyber security career"],
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
