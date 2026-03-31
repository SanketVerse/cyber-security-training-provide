'use client'

import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users, BookOpen, Target, CheckCircle, ArrowRight, Phone, Mail, ShieldCheck, Lock, Terminal, Network, Database, Zap } from "lucide-react"
import Link from "next/link"

// Course data with comprehensive details
const courseData: Record<string, any> = {
  "basic-cyber-security": {
    id: "basic-cyber-security",
    title: "Basic Cyber Security Course",
    subtitle: "Foundation for Cybersecurity Professionals",
    description: "A comprehensive foundation course designed for beginners entering the cybersecurity field. Master fundamental security concepts, threat landscapes, and essential practices through hands-on labs.",
    duration: "18 Hours",
    level: "Beginner",
    modules: 6,
    price: "Contact for Pricing",
    icon: Shield,
    features: [
      "Network Fundamentals & TCP/IP protocols",
      "Vulnerability Assessment with scanners",
      "Password Cracking techniques & tools",
      "Web Application Security (SQL Injection, XSS, CSRF)",
      "Access Control & Authentication methods",
      "Cryptography Basics & encryption exercises",
      "Hands-on labs with Nmap & Wireshark",
      "CVE analysis & remediation techniques"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Network Fundamentals",
        topics: ["Network topology and TCP/IP protocols", "Ping sweeps and port scans with Nmap", "Traffic capture and analysis using Wireshark", "Network security basics"]
      },
      {
        module: "Module 2", 
        title: "Vulnerability Assessment",
        topics: ["Detecting vulnerabilities using scanners", "Understanding CVEs (Common Vulnerabilities & Exposures)", "Basic remediation techniques", "Security assessment methodologies"]
      },
      {
        module: "Module 3",
        title: "Password Cracking",
        topics: ["Popular password cracking tools", "Dictionary attacks and brute force methods", "Password security best practices", "Multi-factor authentication"]
      },
      {
        module: "Module 4",
        title: "Web Application Security",
        topics: ["SQL Injection, XSS, CSRF identification", "Web app vulnerability scanning", "Secure coding best practices", "Application security testing"]
      },
      {
        module: "Module 5",
        title: "Access Control",
        topics: ["Authentication types: username/password, MFA", "User roles & permission management", "Access control models", "Identity management systems"]
      },
      {
        module: "Module 6",
        title: "Cryptography Basics",
        topics: ["Symmetric & asymmetric encryption overview", "Hands-on encryption & decryption exercises", "Digital signatures and certificates", "Cryptographic protocols"]
      }
    ],
    prerequisites: "No prior experience required - suitable for complete beginners",
    certification: "Basic Cybersecurity Certificate",
    placement: "Entry-level cybersecurity analyst, IT security assistant, junior SOC analyst positions"
  },

  "intermediate-cyber-security": {
    id: "intermediate-cyber-security",
    title: "Intermediate Cyber Security Course",
    subtitle: "Advanced Security Concepts & Practical Skills",
    description: "Build upon foundational knowledge with intermediate-level security concepts, ethical hacking basics, and hands-on practice with industry-standard tools and methodologies.",
    duration: "24 Hours",
    level: "Intermediate",
    modules: 8,
    price: "Contact for Pricing",
    icon: ShieldCheck,
    features: [
      "Ethical Hacking fundamentals & concepts",
      "Footprinting & Reconnaissance techniques",
      "Advanced Network scanning with Nmap",
      "Vulnerability Assessment & CVE analysis",
      "Password Cracking with multiple attack methods",
      "Web Application Security testing",
      "Access Control & Authentication systems",
      "Cryptography implementation & exercises"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Ethical Hacking",
        topics: ["Cybersecurity challenges fundamentals", "Ethical hacking basics and methodology", "Security controls & compliance frameworks", "Cybersecurity laws & regulations"]
      },
      {
        module: "Module 2",
        title: "Footprinting & Reconnaissance",
        topics: ["Open-source intelligence gathering", "Reconnaissance tools and techniques", "Pre-attack phase methodology", "Information gathering strategies"]
      },
      {
        module: "Module 3",
        title: "Network Fundamentals",
        topics: ["Network topologies & TCP/IP protocols", "Ping sweeps & port scanning using Nmap", "Network traffic capture with Wireshark", "Network security analysis"]
      },
      {
        module: "Module 4",
        title: "Vulnerability Assessment",
        topics: ["Vulnerability scanning tools usage", "CVEs (Common Vulnerabilities & Exposures)", "Basic remediation strategies", "Risk assessment methodologies"]
      },
      {
        module: "Module 5",
        title: "Password Cracking",
        topics: ["Password cracking tools for weak passwords", "Dictionary attacks, brute force, hybrid techniques", "Password policy implementation", "Secure authentication methods"]
      },
      {
        module: "Module 6",
        title: "Web Application Security",
        topics: ["SQL Injection, XSS, CSRF detection", "Web application security scanning", "Secure coding best practices", "Web application configuration security"]
      },
      {
        module: "Module 7",
        title: "Access Control",
        topics: ["Authentication methods (passwords, MFA)", "User roles & permission management", "Access control implementation", "Identity and access management"]
      },
      {
        module: "Module 8",
        title: "Cryptography Basics",
        topics: ["Symmetric & asymmetric encryption algorithms", "Encryption and decryption lab exercises", "Digital certificates and PKI", "Cryptographic protocols"]
      }
    ],
    prerequisites: "Basic understanding of networking and computer systems",
    certification: "Intermediate Cybersecurity Certificate",
    placement: "Cybersecurity analyst, IT security specialist, junior penetration tester positions"
  },

  "advance-cyber-security": {
    id: "advance-cyber-security",
    title: "Advanced Cyber Security Course",
    subtitle: "Professional Security Analysis & SIEM Operations",
    description: "Advanced training for experienced professionals covering comprehensive ethical hacking, vulnerability assessment, and Splunk SIEM administration with hands-on practical exercises.",
    duration: "30 Hours",
    level: "Advanced",
    modules: 10,
    price: "Contact for Pricing",
    icon: Lock,
    features: [
      "Advanced Ethical Hacking methodologies",
      "Professional Reconnaissance techniques",
      "Advanced Network scanning & analysis",
      "Comprehensive Vulnerability Assessment",
      "Advanced Password Cracking methods",
      "Web Application Security testing",
      "Splunk Administration & Development",
      "SIEM operations & log analysis",
      "Advanced cryptography implementation",
      "Professional security reporting"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Ethical Hacking",
        topics: ["Information security challenges", "Ethical hacking concepts", "Security controls understanding", "Cyber laws overview"]
      },
      {
        module: "Module 2",
        title: "Footprinting & Reconnaissance",
        topics: ["Latest reconnaissance tools and techniques", "Footprinting as pre-attack phase", "Advanced intelligence gathering", "Target profiling methods"]
      },
      {
        module: "Module 3",
        title: "Network Fundamentals",
        topics: ["Network topology & TCP/IP protocols", "Advanced Nmap scanning techniques", "Wireshark traffic analysis", "Network security assessment"]
      },
      {
        module: "Module 4",
        title: "Vulnerability Assessment",
        topics: ["Advanced vulnerability scanners", "CVEs analysis and exploitation", "Remediation strategies", "Risk management frameworks"]
      },
      {
        module: "Module 5",
        title: "Password Cracking",
        topics: ["Professional password cracking tools", "Dictionary attacks & brute force", "Advanced attack methodologies", "Password security implementation"]
      },
      {
        module: "Module 6",
        title: "Web Application Security",
        topics: ["SQL Injection, XSS, CSRF exploitation", "Web application vulnerability scanning", "Web security best practices", "Secure development lifecycle"]
      },
      {
        module: "Module 7",
        title: "Access Control",
        topics: ["Advanced authentication methods", "User roles & permission management", "Access control frameworks", "Identity governance"]
      },
      {
        module: "Module 8",
        title: "Cryptography Basics",
        topics: ["Symmetric & asymmetric encryption", "Hands-on encryption/decryption", "Advanced cryptographic protocols", "Key management systems"]
      },
      {
        module: "Module 9",
        title: "Splunk Administration",
        topics: ["Splunk searching and query building", "Fields usage in searches", "Reports creation and customization", "Dashboard development"]
      },
      {
        module: "Module 10",
        title: "SIEM Operations",
        topics: ["Search modes: Fast, Verbose, Smart", "Statistical reports and visualizations", "Log analysis and correlation", "Security monitoring"]
      }
    ],
    prerequisites: "Intermediate cybersecurity knowledge and networking experience",
    certification: "Advanced Cybersecurity Professional Certificate",
    placement: "Senior cybersecurity analyst, SIEM engineer, security consultant, penetration tester positions"
  },

  "expert-cyber-security": {
    id: "expert-cyber-security",
    title: "Expert Cyber Security Course",
    subtitle: "Elite Cybersecurity Professional Training",
    description: "Elite-level training for cybersecurity experts covering advanced penetration testing, security architecture, comprehensive ethical hacking, and professional security operations.",
    duration: "Expert Level - Contact for Details",
    level: "Expert",
    modules: 10,
    price: "Contact for Pricing",
    icon: ShieldCheck,
    features: [
      "Advanced Ethical Hacking & Penetration Testing",
      "Professional Footprinting & Reconnaissance",
      "Expert-level Network Analysis",
      "Advanced Vulnerability Assessment & Exploitation",
      "Professional Password Cracking techniques",
      "Advanced Web Application Security",
      "Cryptography & Encryption mastery",
      "Web Server & Application Hacking",
      "Security Architecture & Controls",
      "Professional Security Consulting"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Ethical Hacking",
        topics: ["Information security challenges", "Ethical hacking concepts", "Information security controls and frameworks", "Cybersecurity laws and compliance"]
      },
      {
        module: "Module 2",
        title: "Footprinting & Reconnaissance",
        topics: ["Latest techniques and tools for footprinting", "Reconnaissance methodologies (active & passive)", "Understanding the pre-attack phase", "Advanced intelligence gathering"]
      },
      {
        module: "Module 3",
        title: "Network Fundamentals",
        topics: ["Network topology & TCP/IP protocols", "Ping sweeps & port scanning with Nmap", "Traffic capture & analysis with Wireshark", "Advanced network security"]
      },
      {
        module: "Module 4",
        title: "Vulnerability Assessment",
        topics: ["Identifying vulnerabilities using scanners", "CVEs (Common Vulnerabilities & Exposures)", "Basic remediation & patching strategies", "Advanced vulnerability analysis"]
      },
      {
        module: "Module 5",
        title: "Password Cracking",
        topics: ["Hands-on with password cracking tools", "Dictionary, Brute Force, Hybrid Attacks", "Identifying and securing weak passwords", "Advanced authentication bypass"]
      },
      {
        module: "Module 6",
        title: "Web Application Security",
        topics: ["Common vulnerabilities: SQLi, XSS, CSRF", "Web application scanning tools", "Best practices for secure coding & deployment", "Advanced web exploitation"]
      },
      {
        module: "Module 7",
        title: "Access Control",
        topics: ["Authentication methods: passwords, MFA", "Role-based access & permission management", "Advanced access control systems", "Identity governance frameworks"]
      },
      {
        module: "Module 8",
        title: "Cryptography Basics",
        topics: ["Symmetric & asymmetric algorithms", "Hands-on encryption & decryption exercises", "Advanced cryptographic protocols", "Cryptographic attack methods"]
      },
      {
        module: "Module 9",
        title: "Hacking Web Servers",
        topics: ["Web server attack techniques & methodologies", "Auditing vulnerabilities in web infrastructures", "Defensive countermeasures & hardening", "Server security architecture"]
      },
      {
        module: "Module 10",
        title: "Hacking Web Applications",
        topics: ["Comprehensive web application attack methodology", "Exploiting & auditing application vulnerabilities", "Preventive strategies & countermeasures", "Application security testing"]
      }
    ],
    prerequisites: "Advanced cybersecurity knowledge, networking expertise, and security analysis experience",
    certification: "Expert Cybersecurity Professional Certificate",
    placement: "Lead cybersecurity consultant, senior penetration tester, security architect, CISO positions"
  },

  "certified-ethical-hacking": {
    id: "certified-ethical-hacking",
    title: "Certified Ethical Hacking (CEH)",
    subtitle: "Professional Penetration Testing & Security Assessment",
    description: "Comprehensive CEH training program covering 20 modules with 50% knowledge-based training and 50% hands-on labs. Master modern attack methodologies, tools, and countermeasures in a cyber range environment.",
    duration: "40 Hours",
    level: "Advanced",
    modules: 20,
    price: "Contact for Pricing",
    icon: Terminal,
    features: [
      "20 comprehensive modules covering modern attack vectors",
      "50% hands-on labs in cyber range environment",
      "Real-world tools and vulnerable systems",
      "Advanced reconnaissance and footprinting",
      "System hacking and malware analysis",
      "Web application and server exploitation",
      "Wireless and mobile platform hacking",
      "IoT, OT, and cloud security assessment",
      "Cryptography and cryptanalysis",
      "Professional penetration testing methodology"
    ],
    curriculum: [
      {
        module: "Modules 1-5",
        title: "Foundation & Reconnaissance",
        topics: ["Introduction to Ethical Hacking", "Footprinting & Reconnaissance", "Scanning Networks", "Enumeration", "Vulnerability Analysis"]
      },
      {
        module: "Modules 6-10",
        title: "System & Network Attacks",
        topics: ["System Hacking", "Malware Threats", "Sniffing", "Social Engineering", "Denial-of-Service (DoS & DDoS)"]
      },
      {
        module: "Modules 11-15",
        title: "Web & Application Security",
        topics: ["Session Hijacking", "Evading IDS/Firewalls", "Hacking Web Servers", "Hacking Web Applications", "SQL Injection"]
      },
      {
        module: "Modules 16-20",
        title: "Advanced Technologies",
        topics: ["Hacking Wireless Networks", "Hacking Mobile Platforms", "IoT & OT Hacking", "Cloud Computing Security", "Cryptography"]
      }
    ],
    prerequisites: "Basic networking knowledge and cybersecurity fundamentals",
    certification: "Certified Ethical Hacker (CEH) Certificate",
    placement: "Penetration tester, ethical hacker, security consultant, vulnerability assessor positions"
  },

  "soc-analyst-1": {
    id: "soc-analyst-1",
    title: "SOC Analyst 1 (Junior Security Analyst)",
    subtitle: "Tier 1 SOC Operations & Incident Response",
    description: "Comprehensive training for Tier 1 SOC Analysts focusing on monitoring, investigating, and escalating alerts in 24×7 SOC environments. Master cyber defense frameworks, threat intelligence, and incident response.",
    duration: "24 Hours",
    level: "Intermediate",
    modules: 8,
    price: "Contact for Pricing",
    icon: ShieldCheck,
    features: [
      "Cyber Defense Frameworks (MITRE ATT&CK, Kill Chain)",
      "Cyber Threat Intelligence & CTI tools",
      "Network Security & Traffic Analysis",
      "Endpoint Security Monitoring",
      "SIEM Operations (ELK, Splunk)",
      "Digital Forensics & Incident Response",
      "Phishing Analysis & Prevention",
      "Real-world SOC scenarios and challenges"
    ],
    curriculum: [
      {
        module: "Section 1",
        title: "Cyber Defense Frameworks",
        topics: ["SOC Analyst Role Introduction", "Pyramid of Pain", "Cyber Kill Chain", "MITRE ATT&CK Framework"]
      },
      {
        module: "Section 2",
        title: "Cyber Threat Intelligence",
        topics: ["CTI Introduction", "Threat Intelligence Tools", "Yara Rules", "OpenCTI Platform", "MISP"]
      },
      {
        module: "Section 3",
        title: "Network Security & Traffic Analysis",
        topics: ["Traffic Analysis Fundamentals", "Snort IDS/IPS", "NetworkMiner", "Zeek", "Wireshark & TShark"]
      },
      {
        module: "Section 4",
        title: "Endpoint Security Monitoring",
        topics: ["Endpoint Security Introduction", "Windows Processes", "Sysinternals", "Windows Event Logs", "Sysmon", "Osquery", "Wazuh"]
      },
      {
        module: "Section 5",
        title: "SIEM Operations",
        topics: ["SIEM Concepts", "ELK Stack Investigation", "Splunk Basics", "Incident Handling", "Advanced SIEM Analysis"]
      },
      {
        module: "Section 6",
        title: "Digital Forensics & Incident Response",
        topics: ["DFIR Introduction", "Windows & Linux Forensics", "Autopsy", "Redline", "KAPE", "Volatility", "TheHive"]
      },
      {
        module: "Section 7",
        title: "Phishing Analysis",
        topics: ["Phishing Fundamentals", "Email Analysis", "Phishing Tools", "Prevention Mechanisms"]
      },
      {
        module: "Section 8",
        title: "SOC Analyst Capstone",
        topics: ["Tempest Challenge", "Boogeyman Series", "Real-world SOC Scenarios"]
      }
    ],
    prerequisites: "Basic cybersecurity knowledge and networking fundamentals",
    certification: "SOC Analyst Level 1 Certificate",
    placement: "Junior SOC analyst, security monitoring specialist, incident response analyst positions"
  },

  "soc-analyst-2": {
    id: "soc-analyst-2",
    title: "SOC Analyst 2 (Senior Security Analyst)",
    subtitle: "Advanced SOC Operations & Threat Hunting",
    description: "Advanced training for Tier 2 SOC Analysts covering in-depth log analysis, advanced SIEM operations, detection engineering, threat hunting, and malware analysis with hands-on practical scenarios.",
    duration: "24 Hours",
    level: "Advanced",
    modules: 8,
    price: "Contact for Pricing",
    icon: Network,
    features: [
      "Advanced Log Analysis across multiple platforms",
      "Advanced Splunk & ELK SIEM operations",
      "Detection Engineering & Sigma rules",
      "Professional Threat Hunting methodology",
      "Threat Emulation & Purple Team operations",
      "Advanced Incident Response lifecycle",
      "Malware Analysis & Reverse Engineering",
      "SOAR platform automation"
    ],
    curriculum: [
      {
        module: "Section 1",
        title: "Advanced Log Analysis",
        topics: ["Log Analysis Introduction", "Log Operations & Management", "Advanced Analysis Techniques"]
      },
      {
        module: "Section 2",
        title: "Advanced Splunk Operations",
        topics: ["SPL (Search Processing Language)", "SOC Lab Setup", "Advanced Dashboards", "Data Manipulation"]
      },
      {
        module: "Section 3",
        title: "Advanced ELK Operations",
        topics: ["Logstash Data Processing", "Custom Wazuh Rules", "Advanced ELK Querying", "Alert Management"]
      },
      {
        module: "Section 4",
        title: "Detection Engineering",
        topics: ["Detection Engineering Introduction", "Tactical Detection", "Sigma Rules", "Aurora EDR", "SOAR Automation"]
      },
      {
        module: "Section 5",
        title: "Threat Hunting",
        topics: ["Threat Hunting Methodology", "Hunting for Footholds", "Pivoting Techniques", "Advanced Hunting Scenarios"]
      },
      {
        module: "Section 6",
        title: "Threat Emulation",
        topics: ["Threat Emulation Introduction", "Atomic Red Team", "CALDERA", "Purple Team Operations"]
      },
      {
        module: "Section 7",
        title: "Advanced Incident Response",
        topics: ["IR Lifecycle", "Scoping & Threat Intelligence", "Remediation", "Post-Incident Analysis"]
      },
      {
        module: "Section 8",
        title: "Malware Analysis",
        topics: ["x86 Architecture", "Assembly Basics", "Windows Internals", "Static & Dynamic Analysis", "Anti-Reverse Engineering"]
      }
    ],
    prerequisites: "SOC Analyst 1 experience or equivalent cybersecurity operations knowledge",
    certification: "SOC Analyst Level 2 Certificate",
    placement: "Senior SOC analyst, threat hunter, detection engineer, incident response specialist positions"
  },

  "splunk-siem": {
    id: "splunk-siem",
    title: "Splunk Admin, Developer & SIEM",
    subtitle: "Complete Splunk Mastery & SIEM Operations",
    description: "Comprehensive 30-hour Splunk training covering administration, development, and SIEM operations. Master log analysis, dashboard creation, data models, clustering, and real-world SIEM use cases.",
    duration: "30 Hours",
    level: "Intermediate",
    modules: 29,
    price: "Contact for Pricing",
    icon: Database,
    features: [
      "Complete Splunk Enterprise administration",
      "Advanced search language (SPL) mastery",
      "Dashboard and visualization creation",
      "Data models and pivot tables",
      "Clustering and distributed deployment",
      "Universal Forwarder configuration",
      "HTTP Event Collector (HEC) setup",
      "Common Information Model (CIM)",
      "Real-world SIEM use cases",
      "Hands-on labs with practical scenarios"
    ],
    curriculum: [
      {
        module: "Modules 1-5",
        title: "Splunk Fundamentals",
        topics: ["Introduction to Splunk", "Splunk Certifications", "Setting up Splunk", "Licensing", "Basic Searching"]
      },
      {
        module: "Modules 6-10",
        title: "Search & Reporting",
        topics: ["Using Fields in Searching", "Creating Reports", "Creating Dashboards", "Search Language Fundamentals", "Transforming Commands"]
      },
      {
        module: "Modules 11-15",
        title: "Advanced Features",
        topics: ["Lookups", "Alerts & Scheduled Reports", "Data Models", "Search Optimization", "Advanced Visualizations"]
      },
      {
        module: "Modules 16-20",
        title: "Knowledge Objects",
        topics: ["Filtering & Formatting", "Knowledge Objects", "Field Extractions", "Field Aliases", "Tags & Event Types"]
      },
      {
        module: "Modules 21-25",
        title: "Data Management",
        topics: ["Macros", "Workflow Actions", "Universal Forwarder", "HTTP Event Collector", "Clustering"]
      },
      {
        module: "Modules 26-29",
        title: "Advanced Administration",
        topics: ["Distributed Deployment", "Splunk Diag", "Common Information Model", "SIEM Use Cases"]
      }
    ],
    prerequisites: "Basic understanding of log analysis and system administration",
    certification: "Splunk Administrator & Developer Certificate",
    placement: "Splunk administrator, SIEM engineer, log analyst, security data analyst positions"
  },

  "microsoft-sentinel": {
    id: "microsoft-sentinel",
    title: "Microsoft Sentinel SIEM",
    subtitle: "Cloud-Native SIEM & SOAR Solution",
    description: "Master Microsoft Sentinel, the cloud-native Security Information and Event Management (SIEM) and Security Orchestration, Automation, and Response (SOAR) solution. Learn to collect, detect, investigate, and respond to threats at cloud scale.",
    duration: "30 Hours",
    level: "Intermediate",
    modules: 12,
    price: "Contact for Pricing",
    icon: Database,
    features: [
      "Microsoft Sentinel architecture and deployment",
      "Data connectors and log ingestion",
      "KQL (Kusto Query Language) mastery",
      "Analytics rules and threat detection",
      "Incident management and investigation",
      "Workbooks and visualization creation",
      "Automation and SOAR capabilities",
      "Threat hunting with advanced KQL",
      "Integration with Microsoft 365 Defender",
      "Cost optimization and data management"
    ],
    curriculum: [
      {
        module: "Modules 1-3",
        title: "Sentinel Fundamentals",
        topics: ["Introduction to Microsoft Sentinel", "Architecture and Components", "Workspace Setup and Configuration"]
      },
      {
        module: "Modules 4-6",
        title: "Data Collection & Management",
        topics: ["Data Connectors Configuration", "Log Analytics Workspace", "Data Retention and Cost Management"]
      },
      {
        module: "Modules 7-9",
        title: "Detection & Analytics",
        topics: ["KQL Query Language", "Analytics Rules Creation", "Custom Detection Logic"]
      },
      {
        module: "Modules 10-12",
        title: "Investigation & Response",
        topics: ["Incident Management", "Threat Hunting", "Automation and Playbooks"]
      }
    ],
    prerequisites: "Basic understanding of cloud security and log analysis",
    certification: "Microsoft Sentinel Administrator Certificate",
    placement: "Cloud security analyst, SIEM engineer, SOC analyst, security operations specialist positions"
  }
}

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courseData[params.courseId]

  if (!course) {
    notFound()
  }

  const IconComponent = course.icon

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 -z-10" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 animate-in fade-in slide-in-from-top duration-1000">
              <div className="flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 shadow-2xl shadow-primary/20 border border-primary/30 animate-glow-pulse flex-shrink-0">
                <IconComponent className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border border-primary/30 font-cyber font-bold tracking-wider">
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-500 font-medium">
                    <Clock className="w-3 h-3 mr-1.5" />
                    {course.duration}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary font-medium">
                    <BookOpen className="w-3 h-3 mr-1.5" />
                    {course.modules} Modules
                  </Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                  {course.title.split(' ').map((word: string, i: number) => (
                    <span key={i} className={i % 2 === 0 ? 'text-foreground' : 'bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent'}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl sm:text-2xl font-cyber font-bold italic tracking-wide bg-gradient-to-r from-primary/80 to-cyan-400/80 bg-clip-text text-transparent mb-6">
                  {course.subtitle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {course.description}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] hover:bg-[100%_0] text-white px-10 h-14 text-lg font-cyber font-bold tracking-widest shadow-xl shadow-primary/30 border-0 transition-all duration-500 group">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  ENROLL NOW
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <Card className="border-primary/20 bg-card/60 backdrop-blur-md overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-cyber tracking-wider">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors">
                      <div className="p-2.5 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary/70 uppercase tracking-widest">Duration</p>
                        <p className="text-lg font-semibold text-foreground">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 group hover:bg-cyan-500/10 transition-colors">
                      <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-500 group-hover:scale-110 transition-transform">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest">Level</p>
                        <p className="text-lg font-semibold text-foreground">{course.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors">
                      <div className="p-2.5 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary/70 uppercase tracking-widest">Structure</p>
                        <p className="text-lg font-semibold text-foreground">{course.modules} Modules</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 group hover:bg-cyan-500/10 transition-colors">
                      <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-500 group-hover:scale-110 transition-transform">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest">Format</p>
                        <p className="text-lg font-semibold text-foreground">70% Practical Training</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                  <CardDescription>Key skills and knowledge areas covered in this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {course.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>Detailed breakdown of modules and topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.curriculum.map((module: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold text-primary mb-2">{module.module}: {module.title}</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {module.topics.map((topic: string, topicIndex: number) => (
                            <li key={topicIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Prerequisites</h4>
                    <p className="text-sm text-muted-foreground">{course.prerequisites}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Certification</h4>
                    <p className="text-sm text-muted-foreground">{course.certification}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Career Opportunities</h4>
                    <p className="text-sm text-muted-foreground">{course.placement}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Investment</h4>
                    <p className="text-lg font-bold text-primary">{course.price}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Enroll CTA */}
              <Card className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border-primary/30 shadow-lg shadow-primary/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-scanline opacity-[0.05] pointer-events-none" />
                <CardHeader>
                  <CardTitle className="text-center font-cyber tracking-wider">Ready to Start?</CardTitle>
                  <CardDescription className="text-center text-foreground/70">
                    Join the ranks of elite cybersecurity professionals. Fast-track your career today.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-cyber font-bold tracking-widest shadow-lg shadow-primary/20 h-12 transition-all duration-300">
                      SECURE YOUR SEAT
                    </Button>
                  </Link>
                  <p className="text-[10px] text-center mt-4 text-muted-foreground uppercase tracking-[0.2em]">
                    MSME Registered (UDYAM-MH-26-0806430)
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Have questions about this course? Our training experts are here to help.
                  </p>
                  <div className="space-y-2">
                    <Link href="tel:+919226967072">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        (+91) 92269 67072
                      </Button>
                    </Link>
                    <Link href="mailto:kundansaraf@gmail.com">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Mail className="mr-2 h-4 w-4" />
                        kundansaraf@gmail.com
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
