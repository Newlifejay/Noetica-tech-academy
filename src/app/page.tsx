import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Shield, BrainCircuit, LineChart, Globe, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="z-10 max-w-4xl max-auto space-y-8 tracking-tight">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2" />
            Admissions Open for 2026 Batch
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
            Accelerate Your Tech Career. <br className="hidden md:block"/>
            <span className="text-glow text-primary">Build Real-World Solutions.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600">
            Join Noetica-Tech Academy to gain job-ready digital skills, build enterprise-grade projects, and connect with global career opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg group">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg glass text-slate-900 hover:text-slate-900 hover:bg-slate-100">
                Get Free Career Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Noetica-Tech Academy?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We don&apos;t just teach theory. We build an immersive, hands-on tech lab environment designed to get you hired.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-transparent border-slate-200 glass hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Global-Standard Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn the exact tools and workflows used by top international tech companies. Our content is continuously updated to match industry demand.</p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-slate-200 glass hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Real-World Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gradute with a portfolio of production-ready applications, not just toy examples. Work in Agile teams to simulate real job environments.</p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border-slate-200 glass hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Industry Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prepare you for globally recognized certificates from Microsoft, CompTIA, Google, and Cisco, backing up your skills with authority.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top Courses */}
      <section className="w-full bg-white border-y border-slate-200 py-24 mt-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Programs</h2>
              <p className="text-slate-600 max-w-xl">Master the most in-demand skills in the current job market.</p>
            </div>
            <Link href="/courses" className="text-primary hover:text-slate-900 transition-colors mt-4 md:mt-0 flex items-center font-medium">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <BrainCircuit className="h-8 w-8 text-neon-blue mb-4" />
                <CardTitle>AI Agent Creation & Automation</CardTitle>
                <CardDescription>Master Copilot Studio, Power Automate, APIs, and GenAI to build enterprise automation solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Build Custom AI Agents</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Automate Workflows</li>
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link href="/courses/ai-agent-creation" className="w-full">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Full-Stack Web Development</CardTitle>
                <CardDescription>Learn React, Next.js, Node, and databases to build complete web applications from scratch.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Frontend & Backend</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> API Development</li>
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link href="/courses/web-development" className="w-full">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <LineChart className="h-8 w-8 text-green-500 mb-4" />
                <CardTitle>Data Analysis & BI</CardTitle>
                <CardDescription>Extract insights from complex data using Python, SQL, PowerBI, and modern analytics tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Data Visualization</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-primary" /> Statistical Analysis</li>
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link href="/courses/data-analysis" className="w-full">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="w-full py-24 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8 glass p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 relative z-10">Ready to transform your future?</h2>
          <p className="text-xl text-slate-600 relative z-10">Join hundreds of students who have fast-tracked their careers with Noetica-Tech Academy.</p>
          <div className="relative z-10">
            <Link href="/apply">
              <Button size="lg" className="h-14 px-10 text-lg">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
