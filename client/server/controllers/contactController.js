import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Contact } from '../models/index.js';
import { logError } from '../utils/logger.js';

dotenv.config();

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Send email from contact form and save to database
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.subject - Email subject
 * @param {string} contactData.message - Email message
 * @param {string} [contactData.ipAddress] - IP address of sender
 * @returns {Promise} - Email sending result and saved contact
 */
export const sendContactEmail = async (contactData) => {
  const { name, email, subject, message, ipAddress } = contactData;
  
  try {
    // Save contact to database first
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress: ipAddress || 'Not provided'
    });
    
    await newContact.save();
    
    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        Contact ID: ${newContact._id}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Contact ID: ${newContact._id}</small></p>
        </div>
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    
    return {
      emailInfo: info,
      savedContact: newContact
    };
  } catch (error) {
    logError(error, 'Contact Email');
    throw error;
  }
};

/**
 * Get all contacts (admin only)
 * @returns {Promise<Array>} - List of contacts
 */
export const getAllContacts = async (query = {}) => {
  try {
    const { page = 1, limit = 10, status, sort = '-createdAt' } = query;
    
    // Build filter
    const filter = {};
    if (status) filter.status = status;
    
    // Execute query with pagination
    const contacts = await Contact.find(filter)
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
      
    // Get total count
    const count = await Contact.countDocuments(filter);
    
    return {
      contacts,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalContacts: count
    };
  } catch (error) {
    logError(error, 'Get Contacts');
    throw error;
  }
};

/**
 * Get contact by ID (admin only)
 * @param {string} id - Contact ID
 * @returns {Promise<Object>} - Contact details
 */
export const getContactById = async (id) => {
  try {
    const contact = await Contact.findById(id);
    
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    return contact;
  } catch (error) {
    logError(error, 'Get Contact By ID');
    throw error;
  }
};

/**
 * Update contact status (admin only)
 * @param {string} id - Contact ID
 * @param {string} status - New status ('new', 'read', 'replied')
 * @returns {Promise<Object>} - Updated contact
 */
export const updateContactStatus = async (id, status) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    return contact;
  } catch (error) {
    logError(error, 'Update Contact Status');
    throw error;
  }
};

/**
 * Delete contact (admin only)
 * @param {string} id - Contact ID
 * @returns {Promise<Object>} - Deleted contact
 */
export const deleteContact = async (id) => {
  try {
    const contact = await Contact.findByIdAndDelete(id);
    
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    return contact;
  } catch (error) {
    logError(error, 'Delete Contact');
    throw error;
  }
};