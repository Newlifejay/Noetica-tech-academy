import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center justify-center text-center">
      <CheckCircle className="w-24 h-24 text-green-500 mb-8" />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Application Received!</h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-12">
        Thank you for your interest in Noetica-Tech Academy. Our admissions team will contact you shortly via email and WhatsApp.
      </p>
      <Link href="/">
        <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-100">Return to Home</Button>
      </Link>
    </main>
  )
}
