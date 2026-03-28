import Link from 'next/link';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Noetica-Tech Academy</h3>
          <p className="text-sm border-r-0 border-slate-700 leading-relaxed max-w-sm">Empowering the next generation of tech leaders with real-world skills, premium mentorship, and enterprise-grade tools.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
            <li><Link href="/roadmap" className="hover:text-primary transition-colors">Career Roadmap</Link></li>
            <li><Link href="/apply" className="hover:text-primary transition-colors">Apply Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Top Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses/ai-agent-creation" className="hover:text-primary transition-colors">AI & Automation</Link></li>
            <li><Link href="/courses/web-development" className="hover:text-primary transition-colors">Full-Stack Dev</Link></li>
            <li><Link href="/courses/data-analysis" className="hover:text-primary transition-colors">Data Analysis</Link></li>
            <li><Link href="/courses/cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Mail className="h-4 w-4 mr-2 text-primary" /> support@noetica-tech.com.ng</li>
            <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +234 904 488 5680</li>
            <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Lagos, Nigeria</li>
            <li className="flex items-center"><Globe className="h-4 w-4 mr-2" /> noetica-tech.com.ng</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Noetica-Tech Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
