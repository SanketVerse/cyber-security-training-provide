"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Terminal, 
  ShieldCheck, 
  Search, 
  ChevronLeft,
  ChevronRight,
  Database,
  Lock,
  Cpu,
  Monitor,
  Code2,
  Wrench,
  Activity,
  Globe
} from "lucide-react"
import Link from "next/link"

const toolData = [
  {
    category: "SIEM & Security Operations",
    icon: ShieldCheck,
    tools: [
      { name: "Splunk ES", level: "Expert", description: "Admin & Content Development" },
      { name: "MS Sentinel", level: "Admin", description: "Cloud SIEM Operations" },
      { name: "Securonix", level: "Engineer", description: "Log Analysis & Use Cases" },
      { name: "Google Chronicle", level: "Operator", description: "Threat Overlays" },
      { name: "Datadog", level: "Certified", description: "Cloud Infrastructure Monitoring" }
    ]
  },
  {
    category: "Monitoring & EDR",
    icon: Activity,
    tools: [
      { name: "CrowdStrike", level: "Hunter", description: "Endpoint Detection & Hunting" },
      { name: "AppDynamics", level: "Advanced", description: "Application Performance" },
      { name: "Dynatrace", level: "Expert", description: "Full-stack Observability" },
      { name: "Grafana/Prometheus", level: "Admin", description: "Visual Monitoring" }
    ]
  },
  {
    category: "VAPT & Digital Forensics",
    icon: Search,
    tools: [
      { name: "BurpSuite", level: "Expert", description: "Web App Penetration Testing" },
      { name: "Nessus", level: "Admin", description: "Vulnerability Assessment" },
      { name: "Wireshark", level: "Advanced", description: "Network Traffic Analysis" },
      { name: "Metasploit", level: "Expert", description: "Exploitation Framework" }
    ]
  },
  {
    category: "AI & Cyber Security Integration",
    icon: Cpu,
    tools: [
      { name: "OpenAI / ChatGPT", level: "Prompt Eng.", description: "Security analysis & automation using LLMs" },
      { name: "Azure Security", level: "Expert", description: "Identity protection & resource compliance" },
      { name: "AWS Security Hub", level: "Admin", description: "Centralized security posture management" },
      { name: "GCP Cloud Armor", level: "Operator", description: "DDoS & WAF edge protection" }
    ]
  },
  {
    category: "GRC & Service Management",
    icon: Globe,
    tools: [
      { name: "Risk Registers", level: "Expert", description: "Tracking & managing organizational security risks" },
      { name: "Audit Management", level: "Admin", description: "Overseeing compliance with SOC2, HIPAA, GDPR" },
      { name: "Service Now", level: "Lead", description: "Service management & security operations integration" },
      { name: "Jira Kanban", level: "Admin", description: "Scaling agile security operations" }
    ]
  },
  {
    category: "Infrastructure & Data Protection",
    icon: Lock,
    tools: [
      { name: "EDR/NDR", level: "Hunter", description: "Symantec, CrowdStrike, and Network monitoring" },
      { name: "IAM/PAM", level: "Architect", description: "Identity and Privileged Access Management" },
      { name: "DLP Solutions", level: "Lead", description: "Data security using CrypTool and Recuva" },
      { name: "PowerBI", level: "Advanced", description: "Security metric visualization and reporting" }
    ]
  },
  {
    category: "Operating Systems",
    icon: Monitor,
    tools: [
      { name: "Kali Linux", level: "Expert", description: "Offensive security and penetration testing" },
      { name: "Ubuntu/Red Hat", level: "Admin", description: "Server hardening and security configuration" },
      { name: "Windows", level: "Expert", description: "Domain administration and logging systems" }
    ]
  }
]

export default function TechnicalSkillsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      <div className="container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/founder">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 group">
              <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Founder Profile
            </Button>
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="font-cyber text-sm font-bold tracking-widest text-primary uppercase">Technical Arsenal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Technical <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Expertise</span></h1>
            <p className="mt-4 text-muted-foreground text-lg">In-depth hands-on experience with industry-standard security toolsets.</p>
          </div>

          <div className="grid gap-12">
            {toolData.map((cat, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{cat.category}</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.tools.map((tool, i) => (
                    <Card key={i} className="group border-primary/10 bg-card/40 backdrop-blur-md hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
                         <Badge variant="secondary" className="text-[9px] uppercase font-bold bg-primary/10 text-primary border-primary/20">{tool.level}</Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                          <Code2 className="h-4 w-4 shrink-0" />
                          {tool.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{tool.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-block p-6 rounded-3xl border border-primary/10 bg-primary/5 max-w-2xl mx-auto backdrop-blur-sm animate-in fade-in zoom-in slide-in-from-bottom duration-1000">
               <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-3">
                 <Terminal className="h-5 w-5 text-primary" />
                 Specialized Skillsets
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-3">
                 {["Kali Linux", "Active Directory Security", "Cloud Armor", "AppDynamics ADK", "Splunk SPL Master", "NLTK/PyTorch for Security"].map((tag, index) => (
                   <span key={index} className="px-3 py-1.5 rounded-lg border border-primary/20 bg-card/60 text-xs font-cyber font-bold tracking-wider text-muted-foreground hover:border-primary/50 hover:bg-primary/5 transition-all">
                      {tag}
                   </span>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
