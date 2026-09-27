import { NextRequest, NextResponse } from 'next/server';

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

    // Format email content
    const emailContent = `
New Contact Form Submission from Brainers Labs Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Message: ${message}

---
Submitted from: ${request.headers.get('user-agent') || 'Unknown'}
Time: ${new Date().toISOString()}
    `;

    // Try to send via email (placeholder for now)
    // In production, you'd use services like:
    // - SendGrid: https://sendgrid.com
    // - Mailgun: https://mailgun.com
    // - Resend: https://resend.com
    // - AWS SES: https://aws.amazon.com/ses/

    console.log('Contact form submission:', {
      name,
      email,
      company,
      timestamp: new Date().toISOString()
    });

    // For now, return success with fallback note
    // This will show users the success message
    return NextResponse.json({
      ok: true,
      fallback: true,
      message: 'Form submitted successfully. We will contact you soon at ' + email
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
