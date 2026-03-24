import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900">About <span className="text-primary">Noetica-Tech</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Noetica-Tech Academy was founded with a single mission: to bridge the gap between raw talent and remote, global tech roles. We provide an immersive tech lab environment that prepares our students for real-world projects.
        </p>
        
        <div className="mt-16 text-left space-y-8 glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl font-bold border-b border-slate-200 pb-4 text-slate-900">Our Instructors</h2>
          <p className="text-slate-700 text-lg">
            Our content is delivered by professionals who work with or have deep experience in leading tech organizations like <strong className="text-slate-900">Microsoft</strong> and <strong className="text-slate-900">Teknowledge Global</strong>. We bring the industry directly into the classroom.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
             <Card className="bg-white border-slate-200 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Practical Focus</h3>
                  <p className="text-sm text-slate-600">Theory is kept to a minimum. 80% of our curriculum involves building active solutions and contributing to collaborative capstones.</p>
                </CardContent>
             </Card>
             <Card className="bg-white border-slate-200 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Global Vision</h3>
                  <p className="text-sm text-slate-600">We train you to compete internationally. That means focusing on remote-ready skills like Git collaboration, Agile methodologies, and communication.</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
