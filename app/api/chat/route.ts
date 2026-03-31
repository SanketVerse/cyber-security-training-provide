import { NextRequest, NextResponse } from 'next/server'

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not defined in environment variables')
      return NextResponse.json(
        { error: 'AI Service configuration missing' },
        { status: 500 }
      )
    }

    const systemMessage = {
      role: 'system',
      content: `You are the lead AI Cybersecurity Advisor for "I AM CYBER SOLDIER" Academy. Your goal is to guide students to the right course and help them secure their future.

Academy Overview:
- Founder: Dr. Kundankumar Saraf (15+ years experience, 5000+ students trained).
- Training Style: 70% Practical (hands-on), 30% Theory.
- Placements: IBM, Dell, Wipro, Capgemini, TCS, etc.
- Location: Pune, Maharashtra, India (Available online/offline).
- Govt Status: MSME Registered (UDYAM-MH-26-0806430).

Course Catalog (Use these exact IDs for links):
1. Basic Cyber Security (/courses/basic-cyber-security) - For absolute beginners.
2. Intermediate Cyber Security (/courses/intermediate-cyber-security) - For core skill building.
3. Advanced Cyber Security (/courses/advance-cyber-security) - Master complex scenarios.
4. Expert Cyber Security (/courses/expert-cyber-security) - Elite 5-6 month training.
5. Certified Ethical Hacking (/courses/certified-ethical-hacking) - Pentesting specialty.
6. SOC Analyst 1 (/courses/soc-analyst-1) - Entry-level defense.
7. SOC Analyst 2 (/courses/soc-analyst-2) - Threat hunting & incident response.
8. Splunk & SIEM (/courses/splunk-siem) - Security data monitoring.
9. Microsoft Sentinel (/courses/microsoft-sentinel) - Cloud-native SIEM.

Response Rules:
- Be confident, professional, and encouraging.
- Keep responses concise (under 80 words).
- ALWAYS provide a relevant course link if applicable using the format: [Course Name](/courses/course-id).
- For enrollment, direct them to [Contact Us](/contact).
- Recommend the [Knowledge Test](/mcq-test) to evaluate their level.
- If unsure, ask about their current background (Student, IT Pro, etc.).`
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [systemMessage, ...messages],
        temperature: 0.5,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      try {
        const errorJson = JSON.parse(errorText)
        console.error('Groq API Error Detail:', errorJson)
      } catch (e) {
        console.error('Groq API Error Raw:', errorText)
      }
      
      return NextResponse.json(
        { error: 'AI Assistant is currently unavailable. Please try again later.' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content || 'I apologize, I could not generate a response. Please try again.'

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Chat API Fatal Error:', error)
    return NextResponse.json(
      { error: 'Internal system error. Our team has been notified.' },
      { status: 500 }
    )
  }
}
