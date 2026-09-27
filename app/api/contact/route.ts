import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'noreply@brainerslabs.com';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@brainerslabs.com';
const REPLY_TO = process.env.CONTACT_REPLY_TO || 'info@brainerslabs.com';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('Contact form submission received:', {
      name,
      email,
      company,
      timestamp: new Date().toISOString()
    });

    // Try to send email with Resend
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const result = await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1F1C1B; border-bottom: 2px solid #5B3AF5; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>

              <div style="margin: 20px 0;">
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
              </div>

              <div style="background-color: #F7F6F0; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1F1C1B; margin-top: 0;">Message:</h3>
                <p style="color: #585858; line-height: 1.6; white-space: pre-wrap;">
                  ${escapeHtml(message)}
                </p>
              </div>

              <div style="border-top: 1px solid #ddd; padding-top: 15px; font-size: 12px; color: #999;">
                <p>Submitted at: ${new Date().toLocaleString('en-US', {
                  timeZone: 'UTC',
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })} UTC</p>
                <p>From: Brainers Labs Website Contact Form</p>
              </div>
            </div>
          `,
        });

        if (result.error) {
          console.error('Resend email error:', result.error);
          emailSent = false;
        } else {
          console.log('Email sent successfully:', result.data?.id);
          emailSent = true;
        }
      } catch (emailError) {
        console.error('Error sending email with Resend:', emailError);
        emailSent = false;
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email will not be sent');
    }

    // Return success regardless (with or without email)
    return NextResponse.json({
      ok: true,
      fallback: true,
      emailSent,
      message: 'Thank you! We received your message and will contact you soon at ' + email
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
