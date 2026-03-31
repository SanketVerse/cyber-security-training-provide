import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Course Advisor - I AM CYBER SOLDIER",
  description: "Get personalized cybersecurity course recommendations from our interactive AI-powered site guide.",
  keywords: ["AI assistant", "cybersecurity advisor", "course navigation", "cyber security guidance", "I AM CYBER SOLDIER"],
}

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
