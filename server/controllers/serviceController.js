import Service from '../models/Service.js';
import servicesSeed from '../data/servicesSeed.js';

export const getServices = async (_req, res, next) => {
  try {
    const services = await Service.find().lean();
    return res.status(200).json(services.length ? services : servicesSeed);
  } catch (err) {
    return next(err);
  }
};
