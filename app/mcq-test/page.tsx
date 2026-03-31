'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Trophy, BookOpen, Target, Zap } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  level: 'Basic' | 'Intermediate' | 'Expert'
}

interface CourseRecommendation {
  level: string
  percentage: string
  color: string
  icon: any
  course: string
  duration: string
  description: string
  enrollLink: string
}

const questions: Question[] = [
  // Basic Level (Q1-Q4)
  {
    id: 1,
    question: "Which of the following is an example of strong password practice?",
    options: ["Using your birthdate", '"12345678"', '"S@nk3t!204"', '"password"'],
    correctAnswer: 2,
    level: 'Basic'
  },
  {
    id: 2,
    question: "What does phishing primarily aim to do?",
    options: ["Steal physical devices", "Gain confidential information through fake messages", "Slow down your computer", "Test your antivirus"],
    correctAnswer: 1,
    level: 'Basic'
  },
  {
    id: 3,
    question: "A firewall is used to:",
    options: ["Store user data safely", "Filter network traffic", "Encrypt data", "Increase download speed"],
    correctAnswer: 1,
    level: 'Basic'
  },
  {
    id: 4,
    question: "Which one is a type of malware?",
    options: ["HTTPS", "Trojan", "VPN", "Firewall"],
    correctAnswer: 1,
    level: 'Basic'
  },
  // Intermediate Level (Q5-Q8)
  {
    id: 5,
    question: "What does SSL/TLS ensure in online communication?",
    options: ["Higher bandwidth", "Encrypted connection between client and server", "Faster browsing", "Prevents malware downloads"],
    correctAnswer: 1,
    level: 'Intermediate'
  },
  {
    id: 6,
    question: "Which of the following is not part of the CIA triad in cybersecurity?",
    options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
    correctAnswer: 3,
    level: 'Intermediate'
  },
  {
    id: 7,
    question: "In a DDoS attack, the attacker's main goal is to:",
    options: ["Steal user credentials", "Overload the target system to make it unavailable", "Deface the website", "Scan network ports"],
    correctAnswer: 1,
    level: 'Intermediate'
  },
  {
    id: 8,
    question: "A SOC (Security Operations Center) primarily deals with:",
    options: ["Software development", "Continuous monitoring and incident response", "Cloud backup", "Customer support"],
    correctAnswer: 1,
    level: 'Intermediate'
  },
  // Expert Level (Q9-Q12)
  {
    id: 9,
    question: "The MITRE ATT&CK framework is mainly used for:",
    options: ["Project management", "Mapping attacker behavior and techniques", "Antivirus development", "Penetration testing automation"],
    correctAnswer: 1,
    level: 'Expert'
  },
  {
    id: 10,
    question: "What is the difference between symmetric and asymmetric encryption?",
    options: ["Symmetric uses one key; asymmetric uses two (public & private)", "Both use the same key pair", "Asymmetric is faster", "Symmetric is always less secure"],
    correctAnswer: 0,
    level: 'Expert'
  },
  {
    id: 11,
    question: "In a penetration test, the phase where vulnerabilities are exploited is called:",
    options: ["Reconnaissance", "Scanning", "Exploitation", "Post-exploitation"],
    correctAnswer: 2,
    level: 'Expert'
  },
  {
    id: 12,
    question: "A SIEM (Security Information and Event Management) tool primarily helps to:",
    options: ["Store passwords", "Automate backups", "Correlate and analyze security logs for threat detection", "Monitor employee productivity"],
    correctAnswer: 2,
    level: 'Expert'
  }
]

const courseRecommendations: CourseRecommendation[] = [
  {
    level: "🟢 Beginner",
    percentage: "0–35%",
    color: "text-green-600",
    icon: BookOpen,
    course: "Basic Cyber Security Course",
    duration: "18 Hours",
    description: "Foundation course with hands-on labs covering network fundamentals, vulnerability assessment, and cryptography basics.",
    enrollLink: "/courses/basic-cyber-security"
  },
  {
    level: "🟡 Intermediate", 
    percentage: "36–70%",
    color: "text-yellow-600",
    icon: Target,
    course: "SOC Analyst 1 (Junior Security Analyst)",
    duration: "24 Hours", 
    description: "Tier 1 SOC operations focusing on monitoring, threat intelligence, and incident response in 24×7 environments.",
    enrollLink: "/courses/soc-analyst-1"
  },
  {
    level: "🔴 Advanced/Expert",
    percentage: "71–100%",
    color: "text-red-600", 
    icon: Zap,
    course: "Certified Ethical Hacking (CEH)",
    duration: "40 Hours",
    description: "Professional penetration testing with 20 modules, 50% hands-on labs in cyber range environment.",
    enrollLink: "/courses/certified-ethical-hacking"
  }
]

export default function MCQTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getRecommendation = (score: number) => {
    const percentage = (score / questions.length) * 100
    if (percentage <= 35) return courseRecommendations[0]
    if (percentage <= 70) return courseRecommendations[1]
    return courseRecommendations[2]
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(-1))
    setShowResults(false)
    setTestStarted(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-background pt-24 sm:pt-32">
        <div className="container mx-auto py-6 px-4 sm:py-10 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Cybersecurity Knowledge Test</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Test your cybersecurity knowledge and get personalized course recommendations
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6" />
                  Assessment Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                    <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800 dark:text-green-300">Basic Level</h3>
                    <p className="text-sm text-green-600 dark:text-green-400">Questions 1-4</p>
                    <p className="text-xs text-green-500 dark:text-green-500 mt-1">Fundamentals & Basics</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800">
                    <Target className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">Intermediate</h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">Questions 5-8</p>
                    <p className="text-xs text-yellow-500 dark:text-yellow-500 mt-1">SOC & Defense</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                    <Zap className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-red-800 dark:text-red-300">Expert Level</h3>
                    <p className="text-sm text-red-600 dark:text-red-400">Questions 9-12</p>
                    <p className="text-xs text-red-500 dark:text-red-500 mt-1">Advanced & Penetration</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📊 How It Works:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 12 multiple-choice questions across 3 difficulty levels</li>
                      <li>• Get instant results with percentage score</li>
                      <li>• Receive personalized course recommendations</li>
                      <li>• Direct enrollment links based on your performance</li>
                    </ul>
                  </div>
                  
                  <Button 
                    onClick={() => setTestStarted(true)} 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  >
                    Start Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / questions.length) * 100)
    const recommendation = getRecommendation(score)
    const IconComponent = recommendation.icon

    return (
      <div className="min-h-screen bg-background pt-24 sm:pt-32">
        <div className="container mx-auto py-6 px-4 sm:py-10 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Test Results</h1>
            </div>

            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary flex items-center justify-center gap-2">
                  <Trophy className="h-8 w-8" />
                  Your Score: {score}/{questions.length} ({percentage}%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Progress value={percentage} className="h-4" />
                  
                  <div className={`text-center p-6 rounded-lg border-2 ${
                    percentage <= 35 ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' :
                    percentage <= 70 ? 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800' :
                    'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
                  }`}>
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${recommendation.color}`} />
                    <h3 className={`text-2xl font-bold mb-2 ${recommendation.color}`}>
                      {recommendation.level}
                    </h3>
                    <p className="text-lg mb-4">Knowledge Level: {recommendation.percentage}</p>
                    
                    <div className="bg-card/60 dark:bg-card/40 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-lg mb-2">Recommended Course:</h4>
                      <h5 className="text-xl font-bold text-primary mb-1">{recommendation.course}</h5>
                      <p className="text-muted-foreground mb-2">Duration: {recommendation.duration}</p>
                      <p className="text-sm">{recommendation.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href={recommendation.enrollLink}>
                          View Course Details
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/contact">
                          Enroll Now
                        </Link>
                      </Button>
                      <Button onClick={resetTest} variant="outline" size="lg">
                        Retake Test
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Results</CardTitle>
                <CardDescription>Review your answers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questions.map((question, index) => {
                    const isCorrect = selectedAnswers[index] === question.correctAnswer
                    const userAnswer = selectedAnswers[index]
                    
                    return (
                      <div key={question.id} className={`p-4 rounded-lg border ${
                        isCorrect ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
                      }`}>
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium px-2 py-1 rounded-full bg-muted">
                                Q{question.id} - {question.level}
                              </span>
                            </div>
                            <h4 className="font-medium mb-2">{question.question}</h4>
                            <div className="text-sm space-y-1">
                              <p>
                                <span className="font-medium">Your answer:</span>{' '}
                                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                  {userAnswer >= 0 ? question.options[userAnswer] : 'Not answered'}
                                </span>
                              </p>
                              {!isCorrect && (
                                <p>
                                  <span className="font-medium">Correct answer:</span>{' '}
                                  <span className="text-green-600">
                                    {question.options[question.correctAnswer]}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-32">
      <div className="container mx-auto py-6 px-4 sm:py-10 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                question.level === 'Basic' ? 'bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-300' :
                question.level === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300' :
                'bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-300'
              }`}>
                {question.level}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-muted hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === -1}
              className="bg-primary hover:bg-primary/90"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
