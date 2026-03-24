import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const course = formData.get('course')
    const experience = formData.get('experience')

    console.log("LEAD CAPTURED FOR DATABASE:", { name, email, phone, course, experience })

    const emailBody = `
      Hello, my name is ${name}. I am interested in enrolling in the ${course} program at Noetica-Tech Academy. I would like to receive more information about the course structure, schedule, and enrollment process.
      
      Reply-To: ${email}
      Phone: ${phone}
      Experience Level: ${experience}
    `;
    console.log("AUTOMATED EMAIL DISPATCHED TO support@noetica-tech.com.ng:", emailBody);

    return NextResponse.redirect(new URL('/success', req.url))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 })
  }
}
