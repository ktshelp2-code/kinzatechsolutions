import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/mailer.js';
import { contactValidator } from '../utils/validators.js';

export const createContact = async (req, res, next) => {
  try {
    const { error, value } = contactValidator.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ message: 'Validation error', errors: error.details.map((d) => d.message) });

    const contact = await Contact.create(value);
    await sendContactEmail(value);
    return res.status(201).json({ message: 'Contact inquiry submitted successfully', data: contact });
  } catch (err) {
    return next(err);
  }
};
