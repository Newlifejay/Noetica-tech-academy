import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, BrainCircuit, LineChart, Shield, Palette, Layout, Server, Link2, Smartphone } from "lucide-react"
import Link from "next/link"

const C_PROGRAMS = [
  { id: "web-dev", title: "Full-Stack Web Development", category: "Engineering", icon: Code, desc: "React, Next.js, Node, Databases." },
  { id: "mobile-dev", title: "Mobile App Development", category: "Engineering", icon: Smartphone, desc: "React Native, iOS, Android." },
  { id: "devops", title: "DevOps Engineering", category: "Engineering", icon: Server, desc: "Docker, K8s, CI/CD, Linux." },
  { id: "cloud", title: "Cloud Computing", category: "Engineering", icon: Link2, desc: "AWS, Azure, Google Cloud Administration." },
  { id: "ai-agent", title: "AI Agent Creation & Automation", category: "Data & AI", icon: BrainCircuit, desc: "Copilot Studio, Power Automate, GenAI." },
  { id: "data-analysis", title: "Data Analysis", category: "Data & AI", icon: LineChart, desc: "Python, SQL, PowerBI, Excel." },
  { id: "cybersecurity", title: "Cybersecurity", category: "Security", icon: Shield, desc: "Ethical Hacking, Network Defenses." },
  { id: "graphic-design", title: "Graphic Design", category: "Creative", icon: Palette, desc: "Photoshop, Illustrator, Branding." },
  { id: "uiux", title: "UI/UX Design", category: "Creative", icon: Layout, desc: "Figma, User Research, Prototyping." },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Programs</h1>
          <p className="text-xl text-slate-600">Discover job-ready tracks designed to turn you into a tech professional.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {C_PROGRAMS.map((c) => {
            const Icon = c.icon
            return (
              <Card key={c.id} className="group hover:border-primary/50 transition-all flex flex-col h-full bg-white border-slate-200">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">{c.category}</div>
                  <CardTitle className="text-xl">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-slate-600">{c.desc}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${c.id}`} className="w-full">
                    <Button variant="outline" className="w-full relative overflow-hidden group/btn border-slate-200 hover:border-primary">
                      <span className="relative z-10 text-slate-900 group-hover/btn:text-primary">View Syllabus</span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}
