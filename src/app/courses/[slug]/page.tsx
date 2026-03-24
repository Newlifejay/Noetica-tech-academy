import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, Briefcase } from "lucide-react"

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").toUpperCase()
  
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Professional Track
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
            <p className="text-xl text-slate-600">
              Master the skills required to become a top-tier professional. Build real-world applications and prepare for global certifications.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">Course Insight</h2>
            <div className="glass p-6 rounded-xl border-l-4 border-l-primary">
              <p className="text-slate-700">
                This course isn&apos;t just theory—it&apos;s about automating today&apos;s business workflows and building production-ready architectures that companies are actively hiring for right now.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">What You Will Learn</h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-slate-700">
              <li className="flex items-start"><Shield className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" /> Industry best practices and design patterns</li>
              <li className="flex items-start"><Shield className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" /> Building scalable, secure applications</li>
              <li className="flex items-start"><Shield className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" /> Collaboration using Agile & Git</li>
              <li className="flex items-start"><Shield className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" /> Advanced debugging and tooling</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">Real-World Projects</h2>
            <p className="text-slate-600">You will build 3 major capstone projects that will serve as the foundation of your professional portfolio, ready to be shown to recruiters.</p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-32 glass p-8 rounded-2xl border border-slate-200 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center text-slate-700"><Clock className="w-5 h-5 mr-3 text-neon-blue" /> <strong>Duration:</strong> 12 Weeks</div>
              <div className="flex items-center text-slate-700"><Award className="w-5 h-5 mr-3 text-gold" /> <strong>Certification:</strong> Noetica-Tech + Gen Certs</div>
              <div className="flex items-center text-slate-700"><Briefcase className="w-5 h-5 mr-3 text-primary" /> <strong>Skill Level:</strong> Beginner to Advanced</div>
            </div>
            
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Request Information</h3>
              <form className="space-y-4" action="/api/inquiry" method="POST">
                <input type="hidden" name="course" value={title} />
                <input type="text" name="name" required placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="email" name="email" required placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <select name="experience" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <Button type="submit" className="w-full h-12 text-md">Enroll / Inquire Now</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
