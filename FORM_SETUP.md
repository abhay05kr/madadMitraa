# Form Setup Guide

When someone submits a form on your AASRA WELFARE FOUNDATION website, the data will be sent to your email address. Here's how to set it up:

## Step 1: Get EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID

## Step 2: Update Configuration

Open `src/config/emailConfig.js` and update:

```javascript
export const emailConfig = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id', 
  PUBLIC_KEY: 'your_public_key',
  ORGANIZATION_NAME: 'AASRA WELFARE FOUNDATION',
};
```

## Step 2: Test the Forms

1. Start your development server: `npm start`
2. Go to the "Get Help" page and submit a test form
3. Go to the "Join Us" page and submit a test volunteer form
4. Check your email - you should receive the form data

## What Happens When Someone Submits a Form?

### Get Help Form:
- Opens your email client with a pre-filled email
- Subject: "नई मदद का अनुरोध - [Person's Name]"
- Body contains: Name, Phone, Location, Help Type, Description, File Name, Date

### Join Us Form:
- Opens your email client with a pre-filled email
- Subject: "नया Volunteer Registration - [Person's Name]"
- Body contains: All form details based on the type (Volunteer/Donor/Skill Contributor)

## Advanced Setup (Optional)

### Option 1: EmailJS (Recommended for Production)

For automatic email sending without opening email client:

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Set up email templates
4. Update `src/utils/emailService.js` with your EmailJS credentials

### Option 2: Google Forms Integration

1. Create Google Forms for each form type
2. Use Google Forms API to submit data
3. Get email notifications from Google Forms

### Option 3: Database + Backend

1. Set up a backend server (Node.js, Python, etc.)
2. Create a database to store submissions
3. Set up email notifications from the backend

## Current Features

✅ **Get Help Form**: Collects help requests with file uploads
✅ **Join Us Form**: Collects volunteer/donor registrations
✅ **Email Notifications**: Sends data to your email
✅ **Form Validation**: Ensures required fields are filled
✅ **Success Messages**: Shows confirmation to users
✅ **Error Handling**: Handles submission errors gracefully

## Troubleshooting

### Forms not sending emails?
1. Check your email configuration in `emailConfig.js`
2. Make sure your email address is correct
3. Check browser console for errors

### Want to change email format?
Edit the email templates in `src/utils/emailService.js`

### Want to add more form fields?
1. Add the field to the form in the respective page
2. Add the field to the form data collection
3. Update the email template

## Security Notes

- Form data is sent via email, not stored on the website
- No sensitive data is stored on the server
- File uploads are handled locally (not uploaded to server)
- Consider adding CAPTCHA for spam protection in production 