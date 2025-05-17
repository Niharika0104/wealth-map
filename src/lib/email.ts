// Email service implementation

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
  text?: string;
}

// Import the email service of your choice
// Here's an implementation using Resend as an example
// npm install resend
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Wealth Map <noreply@wealthmap.com>',
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Failed to send email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

// You can also implement specialized email functions for specific use cases
export async function sendWelcomeEmail(user: { email: string; name: string }): Promise<void> {
  await sendEmail({
    to: user.email,
    subject: "Welcome to Wealth Map!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Welcome to Wealth Map!</h2>
        <p>Hello ${user.name},</p>
        <p>Thank you for joining Wealth Map. We're excited to have you on board!</p>
        <p>Start planning your financial future today by exploring our features.</p>
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
        <p>Best regards,<br>The Wealth Map Team</p>
      </div>
    `
  });
}

// Example for sending 2FA verification codes
export async function send2FACode({ email, name }: { email: string; name: string }, code: string): Promise<void> {
  await sendEmail({
    to: email,
    subject: 'Your Wealth Map 2FA Code',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Your 2FA Code</h2>
        <p>Hello ${name},</p>
        <p>Your verification code is:</p>
        <p style="font-size: 24px; font-weight: bold; letter-spacing: 2px; text-align: center; padding: 20px; background: #f5f5f5; border-radius: 4px;">${code}</p>
        <p>This code will expire in 5 minutes.</p>
        <p>If you didn't request this code, please ignore this email.</p>
      </div>
    `
  });
}
