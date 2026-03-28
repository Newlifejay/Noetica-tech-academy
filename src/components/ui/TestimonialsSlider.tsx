"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Chukwuma Nwaeke",
    role: "Automation Engineer",
    text: "The AI Agent Creation course completely changed my career trajectory. I now build enterprise automation solutions!",
  },
  {
    name: "Emmanuel Iruebor",
    role: "Full-Stack Developer",
    text: "Noetica-Tech's hands-on approach gave me the confidence to build robust full-stack apps from scratch. Highly recommended!",
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    text: "The instructors are world-class and the design curriculum is perfectly aligned with modern industry standards.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    text: "I landed a job as a Junior Developer within 2 months of completing the Full-Stack track. The career roadmap was a game-changer.",
  },
  {
    name: "Rita Mejulu",
    role: "Cloud Architect",
    text: "The global-standard curriculum and real-world Azure projects made me job-ready much faster than a traditional degree.",
  },
  {
    name: "Victory Anani",
    role: "Cybersecurity Analyst",
    text: "Amazing community and top-notch mentorship. The practical labs prepared me perfectly for my certification exams.",
  },
];

export function TestimonialsSlider() {
  return (
    <section className="w-full py-20 bg-slate-900 border-t border-slate-800 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Student Success Stories</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Hear from our graduates who have accelerated their tech careers.</p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 px-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
            <Card 
              key={`${testimonial.name}-${idx}`} 
              className="w-[350px] md:w-[450px] shrink-0 border-slate-200 hover:border-primary/50 transition-colors shadow-lg"
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full justify-between gap-6 whitespace-normal">
                <Quote className="h-8 w-8 text-primary/40 -mb-2" />
                <p className="text-slate-700 text-base md:text-lg italic flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
