import { Button } from "@/components/ui/button"

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 max-w-2xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold text-foreground mb-6">Start Your Application</h1>
      <p className="text-slate-600 mb-12 text-center text-lg">Fill out the basic information below. Our admissions team will reach out to you directly to complete your enrollment.</p>

      <div className="w-full glass p-8 rounded-2xl">
        <form className="space-y-6" action="/api/inquiry" method="POST">
          <input type="hidden" name="course" value="General Application" />
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input type="tel" name="phone" required placeholder="+234..." className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
            <select name="experience" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <Button type="submit" className="w-full h-14 text-lg mt-6">Submit Application</Button>
        </form>
      </div>
    </main>
  )
}
