import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Briefcase, Building2, TrendingUp } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-slate-900">Careers & Outcomes</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our ultimate goal is your employment. See what roles our graduates step into.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { role: "Full-Stack Developer", salary: "$70k - $120k", skills: "React, Node, SQL" },
          { role: "AI Systems Engineer", salary: "$90k - $150k", skills: "GenAI, Python, APIs" },
          { role: "Cloud Architect", salary: "$100k - $160k", skills: "AWS, Kubernetes, Terraform" },
          { role: "Data Analyst", salary: "$60k - $95k", skills: "SQL, PowerBI, Python" },
          { role: "Cybersecurity Analyst", salary: "$75k - $130k", skills: "Network Sec, Ethical Hacking" },
          { role: "UI/UX Designer", salary: "$65k - $110k", skills: "Figma, User Research" },
        ].map((job, i) => (
          <Card key={i} className="hover:-translate-y-1 transition-transform bg-white border-slate-200 shadow-none">
            <CardHeader>
              <Briefcase className="w-8 h-8 text-neon-blue mb-4" />
              <CardTitle>{job.role}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-primary" /> Est. Global Salary: <span className="text-slate-900 ml-2">{job.salary}</span></div>
                <div className="flex items-center"><Building2 className="w-4 h-4 mr-2 text-primary" /> Key Skills: {job.skills}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
