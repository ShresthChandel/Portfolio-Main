"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const gotcha = formData.get("_gotcha") as string;

  if (gotcha) {
    return { error: "Spam detected." };
  }

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <portfolio@grindtracker.com>",
      to: "shresthsingh003@gmail.com",
      replyTo: email,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { error: error.message || "Something went wrong." };
  }
}
