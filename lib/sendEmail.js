"use server";

import { Resend } from "resend";
import { validateStr, getErrorMsg } from "@/lib/utils";

const resend = new Resend('re_KHgiGL2R_7K2W1zakpC32rV9hULRVA4Rc');

export const sendEmail = async (formData) => {
  try {
    // Validaciones 
    const senderEmail = formData.get("email")?.toString().trim();
    const senderName = formData.get("name")?.toString().trim();
    const senderMessage = formData.get("message")?.toString().trim();

    if (!validateStr(senderEmail, 500) || !/\S+@\S+\.\S+/.test(senderEmail)) {
      return { error: "Invalid sender email" };
    }

    if (!validateStr(senderName, 100)) {
      return { error: "Name must be between 1 and 100 characters long" };
    }

    if (!validateStr(senderMessage, 1000)) {
      return { error: "Message must be between 1 and 1000 characters long" };
    }

    // Enviar 
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "emibuthay@gmail.com",
      subject: "New message",
      reply_to: senderEmail,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${senderEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${senderMessage}</p>
        </div>
      `,
    });

    return { data: response };
  } catch (error) {
    return { error: getErrorMsg(error) };
  }
};
