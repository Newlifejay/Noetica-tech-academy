import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200 bg-slate-50/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-black">NT</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hover:text-primary transition-colors">Noetica-Tech</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Home</Link>
            <Link href="/courses" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Courses</Link>
            <Link href="/careers" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Careers</Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/apply">
              <Button className="hidden md:inline-flex rounded-full px-6">Apply Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
