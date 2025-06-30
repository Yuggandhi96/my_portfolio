// server/routes/contact.js
import express from 'express';
import { validationResult } from 'express-validator';
import { 
  sendContactEmail,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';
import { contactValidationRules } from '../validation/contactValidation.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { logError } from '../utils/logger.js';

const router = express.Router();

/**
 * @route POST /api/contact
 * @desc Send contact form email and save to database
 * @access Public
 */
router.post(
  '/',
  contactLimiter, // Apply rate limiting
  contactValidationRules, // Apply validation rules
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors: errors.array() 
      });
    }

    try {
      // Add IP address to data
      const contactData = {
        ...req.body,
        ipAddress: req.ip || req.connection.remoteAddress
      };
      
      const result = await sendContactEmail(contactData);
      
      res.json({ 
        success: true, 
        message: 'Your message has been sent successfully. I will get back to you soon!',
        contactId: result.savedContact._id
      });
    } catch (error) {
      logError(error, 'Contact Email');
      res.status(500).json({ 
        success: false, 
        message: 'There was a problem sending your message. Please try again later.' 
      });
    }
  }
);

// The routes below should be protected by authentication middleware in production
// This is a simplified version without auth for the example

/**
 * @route GET /api/contact
 * @desc Get all contacts with pagination
 * @access Private/Admin
 */
router.get('/', async (req, res) => {
  try {
    const result = await getAllContacts(req.query);
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    logError(error, 'Get All Contacts');
    res.status(500).json({
      success: false,
      message: 'Error retrieving contacts'
    });
  }
});

/**
 * @route GET /api/contact/:id
 * @desc Get contact by ID
 * @access Private/Admin
 */
router.get('/:id', async (req, res) => {
  try {
    const contact = await getContactById(req.params.id);
    res.json({
      success: true,
      contact
    });
  } catch (error) {
    logError(error, 'Get Contact By ID');
    
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error retrieving contact'
    });
  }
});

/**
 * @route PATCH /api/contact/:id/status
 * @desc Update contact status
 * @access Private/Admin
 */
router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  
  // Validate status
  if (!status || !['new', 'read', 'replied'].includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid status. Must be "new", "read", or "replied"'
    });
  }
  
  try {
    const contact = await updateContactStatus(req.params.id, status);
    res.json({
      success: true,
      message: 'Contact status updated',
      contact
    });
  } catch (error) {
    logError(error, 'Update Contact Status');
    
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

/**
 * @route DELETE /api/contact/:id
 * @desc Delete a contact
 * @access Private/Admin
 */
router.delete('/:id', async (req, res) => {
  try {
    await deleteContact(req.params.id);
    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    logError(error, 'Delete Contact');
    
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error deleting contact'
    });
  }
});

export default router;