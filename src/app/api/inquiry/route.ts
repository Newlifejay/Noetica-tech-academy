import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
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

    if (process.env.SMTP_URL) {
      const transporter = nodemailer.createTransport(process.env.SMTP_URL);
      await transporter.sendMail({
        from: '"Noetica-Tech Forms" <noreply@noetica-tech.com.ng>',
        to: 'support@noetica-tech.com.ng',
        subject: `New Inquiry from ${name} for ${course}`,
        text: emailBody,
      });
      console.log("AUTOMATED EMAIL ACTUALLY DISPATCHED TO support@noetica-tech.com.ng");
    } else {
      console.log("AUTOMATED EMAIL OUTGOING TO support@noetica-tech.com.ng:", emailBody);
      console.log("Note: nodemailer not configured. Set SMTP_URL to send real emails.");
    }

    return NextResponse.redirect(new URL('/success', req.url))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 })
  }
}
