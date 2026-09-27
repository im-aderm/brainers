# Resend Email Integration Setup

## Overview
The contact form now uses **Resend** to send professional HTML emails. Resend is a modern, reliable email API designed for developers and works great with Next.js.

## Step 1: Get a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** (usually in settings)
3. Create a new API key or copy your existing one
4. Keep this key secure - don't share it publicly!

## Step 3: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=noreply@brainerslabs.com
CONTACT_TO_EMAIL=info@brainerslabs.com
CONTACT_REPLY_TO=info@brainerslabs.com
```

## Step 4: Verify Your Domain (Optional but Recommended)

For production, verify your domain with Resend:

1. Go to Resend dashboard → Domains
2. Add your domain (e.g., `brainerslabs.com`)
3. Follow the DNS verification steps
4. Update `CONTACT_FROM_EMAIL` to use your verified domain:
   ```env
   CONTACT_FROM_EMAIL=noreply@brainerslabs.com
   ```

## Step 5: Test the Contact Form

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3001/contact

3. Fill out and submit the form

4. Check your inbox (CONTACT_TO_EMAIL) for the email

5. Check server logs for confirmation:
   ```
   Email sent successfully: xxxx-xxxx-xxxx-xxxx
   ```

## Features

✅ **HTML Email Templates** - Professional formatted emails  
✅ **Error Handling** - Graceful fallback if API fails  
✅ **Security** - HTML escaping to prevent injection  
✅ **Logging** - Track submissions and email status  
✅ **Reply-To** - Emails reply directly to sender  
✅ **Validation** - Input validation before sending  

## What Happens When Form is Submitted

1. **Validation**: Email format and required fields checked
2. **Submission Logged**: Form data logged to console for debugging
3. **Email Sent**: Professional HTML email sent via Resend
4. **User Notified**: Success message displayed to user
5. **Admin Notified**: Email received at CONTACT_TO_EMAIL

## Email Template

The email includes:
- Sender's name and contact info
- Company (if provided)
- Full message in readable format
- Timestamp of submission
- Reply-To field set to sender's email

## Troubleshooting

### "RESEND_API_KEY not configured"
- Check that `.env.local` exists and has the correct API key
- Restart the dev server after adding/changing env variables

### Email not arriving
- Check spam/junk folder
- Verify email address in CONTACT_TO_EMAIL is correct
- Check server logs for error messages

### Free tier limits (Resend)
- **Emails per month**: 3,000 (free tier)
- **Contacts**: Unlimited
- **Features**: All features available

## API Response

### Success Response
```json
{
  "ok": true,
  "fallback": true,
  "emailSent": true,
  "message": "Thank you! We received your message..."
}
```

### Error Response
```json
{
  "ok": false,
  "error": "Invalid email format"
}
```

## Production Deployment

When deploying to production:

1. Add `RESEND_API_KEY` to your hosting platform's environment variables
2. Verify your domain with Resend
3. Update email addresses if needed
4. Test the form after deployment

## Resend Documentation

For more information, visit:
- [Resend Docs](https://resend.com/docs)
- [API Reference](https://resend.com/docs/api-reference)
- [Email Templates Guide](https://resend.com/docs/emails)

## Security Notes

⚠️ **Never commit .env.local** - It contains secrets!
- `.env.local` is in `.gitignore`
- Share only the `.env.local.example` file
- Each developer/environment needs their own `.env.local`

---

**Status**: ✅ Contact form with Resend integration ready
**Last Updated**: 2026-09-27
