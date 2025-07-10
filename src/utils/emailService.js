// Email service for form submissions
// This uses EmailJS to send emails without a backend
import { EMAIL_CONFIG } from '../config/emailConfig';
import emailjs from 'emailjs-com';

// TODO: Replace these with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const HELP_TEMPLATE_ID = 'YOUR_HELP_TEMPLATE_ID';
const VOLUNTEER_TEMPLATE_ID = 'YOUR_VOLUNTEER_TEMPLATE_ID';
const USER_ID = 'YOUR_USER_ID_OR_PUBLIC_KEY';

export const sendHelpRequest = async (formData) => {
  try {
    // Prepare the template params as per your EmailJS template
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      helpType: formData.helpType,
      description: formData.description,
      fileName: formData.fileName,
      to_email: EMAIL_CONFIG.HELP_REQUESTS_EMAIL,
      date: new Date().toLocaleString('hi-IN'),
    };
    const result = await emailjs.send(
      SERVICE_ID,
      HELP_TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    return { success: true, result };
  } catch (error) {
    console.error('Error sending help request:', error);
    return { success: false, error: error.message };
  }
};

export const sendVolunteerRequest = async (formData) => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      type: formData.type,
      preferredArea: formData.preferredArea,
      availability: formData.availability,
      experience: formData.experience,
      donationType: formData.donationType,
      amount: formData.amount,
      paymentInfo: formData.paymentInfo,
      skills: Array.isArray(formData.skills) ? formData.skills.join(', ') : '',
      to_email: EMAIL_CONFIG.VOLUNTEER_REQUESTS_EMAIL,
      date: new Date().toLocaleString('hi-IN'),
    };
    const result = await emailjs.send(
      SERVICE_ID,
      VOLUNTEER_TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    return { success: true, result };
  } catch (error) {
    console.error('Error sending volunteer request:', error);
    return { success: false, error: error.message };
  }
}; 