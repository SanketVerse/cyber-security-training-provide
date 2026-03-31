import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersecurity Knowledge Test - I AM CYBER SOLDIER",
  description: "Test your cybersecurity knowledge with our comprehensive MCQ assessment. Get personalized course recommendations based on your performance across Basic, Intermediate, and Expert levels.",
  keywords: ["cybersecurity test", "MCQ assessment", "knowledge evaluation", "course recommendation", "cyber security quiz", "I AM CYBER SOLDIER"],
}

export default function MCQTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
