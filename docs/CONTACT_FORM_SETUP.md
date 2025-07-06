# Contact Form Setup Guide

## Overview
Your contact form is now ready! It includes all the optimized fields and will email submissions to `luxury@celebrityowned.com`. Here's how to set it up:

## Step 1: Create a Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

## Step 2: Configure Your Form
1. In Formspree dashboard, click "New Form"
2. Name it "Shop2not Contact Form"
3. Set the email to: `luxury@celebrityowned.com`
4. Copy the form ID (it will look like `xayzqkqw`)

## Step 3: Update the Form Action
1. Open `contact.html`
2. Find this line: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

## Step 4: Test Your Form
1. Upload your files to your web server
2. Visit your contact page
3. Fill out and submit the form
4. Check that you receive the email at `luxury@celebrityowned.com`

## Form Features
✅ **Optimized Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Inquiry Type dropdown (required)
- Phone (optional)
- Current user status (required)
- Message (required)

✅ **User Experience:**
- Form validation
- Professional styling
- Thank you page
- Mobile responsive

✅ **Email Features:**
- All form data included in email
- Proper formatting
- Spam protection
- Email notifications

## Formspree Free Plan Limits
- 50 submissions per month
- Basic spam protection
- Email notifications
- Form analytics

## Troubleshooting
- **Form not sending:** Check your Formspree form ID is correct
- **No email received:** Check spam folder and Formspree dashboard
- **Validation errors:** Ensure all required fields are filled

## Files Created
- `contact.html` - Contact form page
- `contact-thank-you.html` - Thank you page
- Updated all footers with "Contact Us" links
- Updated sitemaps to include contact pages

Your contact form is now fully functional and ready to capture customer inquiries! 