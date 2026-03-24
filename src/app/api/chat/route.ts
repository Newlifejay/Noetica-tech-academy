import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const msgLower = (message as string).toLowerCase()

    let reply = "I'm still learning! But our admissions team would be happy to help. You can reach them via WhatsApp at +2349044885680 or email support@noetica-tech.com.ng."

    if (msgLower.includes("courses") || msgLower.includes("programs") || msgLower.includes("learn") || msgLower.includes("offer")) {
      reply = "We offer a variety of programs including Full-Stack Web Development, AI Agent Automation, Data Analysis, Cybersecurity, UI/UX Design and more! Which specific field are you interested in exploring?"
    } else if (msgLower.includes("cost") || msgLower.includes("price") || msgLower.includes("fee") || msgLower.includes("pay")) {
      reply = "Our course fees vary depending on the track. Please chat with our admissions team on WhatsApp for an exact quote and to learn about available scholarship partner tiers!"
    } else if (msgLower.includes("choose") || msgLower.includes("why") || msgLower.includes("difference")) {
      reply = "At Noetica-Tech Academy, we bridge the gap between raw talent and remote tech roles. Our courses simulate hands-on lab environments, focused entirely on real-world projects and preparing you for certifications from partners like Microsoft, Cisco, and Google!"
    } else if (msgLower.includes("contact") || msgLower.includes("support")) {
      reply = "You can reach us directly on WhatsApp at +2349044885680 or via email at support@noetica-tech.com.ng. We'd love to chat!"
    } else if (msgLower.includes("apply") || msgLower.includes("enroll") || msgLower.includes("join") || msgLower.includes("start")) {
      reply = "You can enroll by visiting the courses section, picking your desired track, and filling out the application form on the right side. Our team will contact you back immediately once submitted."
    }

    // Mock API delay to simulate thinking
    await new Promise(resolve => setTimeout(resolve, 800))

    return NextResponse.json({ reply })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 })
  }
}
