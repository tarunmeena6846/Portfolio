import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST handler for sending emails
export async function POST(req: Request) {
  const body = await req.json();
  const { name, emailAddress, message } = body;
  console.log("name and email", name, emailAddress, message);
  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email service provider
    auth: {
      user: process.env.EMAIL_USER, // your email address from env
      pass: process.env.EMAIL_PASSWORD, // app-specific password (for Gmail) from env
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: "tarunmeena6846@gmail.com", // list of receivers
    subject: `New Contact Form Submission from ${name}`, // Subject line
    html: `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${emailAddress}</p>
           <p><strong>Message:</strong> ${message}</p>`, // HTML body content
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
