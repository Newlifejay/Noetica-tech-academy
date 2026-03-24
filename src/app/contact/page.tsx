import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Have questions? We are here to help you navigate your tech journey.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-primary" /> WhatsApp
            </h3>
            <p className="text-slate-700 relative z-10 mb-6">Chat with our admissions team directly via WhatsApp for instant support.</p>
            <a href="https://wa.me/2349044885680" target="_blank" rel="noopener noreferrer" className="relative z-10">
              <Button size="lg" className="w-full">Chat Now: +234 904 488 5680</Button>
            </a>
          </div>

          <div className="glass p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors" />
            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-neon-blue" /> Email Support
            </h3>
            <p className="text-slate-700 relative z-10 mb-6">Prefer email? Send us your inquiries and we&apos;ll get back to you within 24 hours.</p>
            <a href="mailto:support@noetica-tech.com.ng" className="relative z-10">
              <Button variant="outline" size="lg" className="w-full">Email: support@noetica-tech.com.ng</Button>
            </a>
          </div>
        </div>
        
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?"></textarea>
            </div>
            <Button size="lg" className="w-full mt-4">Send Message</Button>
          </form>
        </div>
      </div>
    </main>
  )
}
