import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string || ''
    const email = formData.get('email') as string || ''
    const phone = formData.get('phone') as string || ''
    const course = formData.get('course') as string || ''
    const experience = formData.get('experience') as string || ''

    console.log("NEW LEAD RECEIVED:", { name, email, phone, course, experience });

    // 1. Save to Database
    const newInquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        course,
        experience,
      }
    });

    console.log("Saved to Database:", newInquiry.id);

    // 2. Send Automated Email
    const emailBody = `
      New Inquiry from Noetica-Tech Academy Website
      --------------------------------------------------
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Course Interested In: ${course}
      Experience Level: ${experience}
    `;

    if (process.env.MS_CLIENT_ID && process.env.MS_CLIENT_SECRET && process.env.MS_TENANT_ID && process.env.MS_EMAIL_FROM) {
      try {
        await sendEmail('support@noetica-tech.com.ng', `New Enrollment Inquiry: ${course} - ${name}`, emailBody);
        console.log("Automated email sent to support@noetica-tech.com.ng via MS Graph API");
      } catch (emailError) {
        console.error("MS Graph email failed, skipping.", emailError);
      }
    } else {
      console.log("MS Graph OAuth not configured. Skipping email delivery.");
    }

    return NextResponse.redirect(new URL('/success', req.url), 303)
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 })
  }
}
