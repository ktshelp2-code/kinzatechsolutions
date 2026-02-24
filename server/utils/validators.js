import Joi from 'joi';

export const contactValidator = Joi.object({
  name: Joi.string().min(2).max(80).required(),
  email: Joi.string().email().required(),
  company: Joi.string().allow('').max(80),
  message: Joi.string().min(20).max(2000).required()
});
