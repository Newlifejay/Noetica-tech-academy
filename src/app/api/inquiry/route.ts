import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string || ''
    const email = formData.get('email') as string || ''
    const phone = formData.get('phone') as string || ''
    const course = formData.get('course') as string || ''
    const experience = formData.get('experience') as string || ''

    // Insert lead into Database safely
    try {
      await prisma.inquiry.create({
        data: {
          name,
          email,
          phone,
          course,
          experience
        }
      });
      console.log("LEAD SAVED TO DATABASE:", { name, email });
    } catch (dbError) {
      console.error("Database connection not configured yet in Azure:", dbError);
    }

    const emailBody = `
      Hello, my name is ${name}. I am interested in enrolling in the ${course} program at Noetica-Tech Academy. I would like to receive more information about the course structure, schedule, and enrollment process.
      
      Reply-To: ${email}
      Phone: ${phone}
      Experience Level: ${experience}
    `;

    // Note: To actually send emails later, you can add an API integration like Resend or SendGrid here.
    console.log("AUTOMATED EMAIL NOTIFICATION TO support@noetica-tech.com.ng:", emailBody);

    return NextResponse.redirect(new URL('/success', req.url))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 })
  }
}
