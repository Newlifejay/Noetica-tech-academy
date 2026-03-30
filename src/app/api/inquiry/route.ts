import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import nodemailer from 'nodemailer'

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

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // fallback to gmail
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // We only try to send if SMTP setup is provided
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: 'support@noetica-tech.com.ng',
        subject: `New Enrollment Inquiry: ${course} - ${name}`,
        text: emailBody,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);
      console.log("Automated email sent to support@noetica-tech.com.ng");
    } else {
      console.log("SMTP not configured. Skipping email delivery.");
    }

    return NextResponse.redirect(new URL('/success', req.url))
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 })
  }
}
