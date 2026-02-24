import Portfolio from '../models/Portfolio.js';
import portfolioSeed from '../data/portfolioSeed.js';

export const getPortfolio = async (_req, res, next) => {
  try {
    const portfolio = await Portfolio.find().lean();
    return res.status(200).json(portfolio.length ? portfolio : portfolioSeed);
  } catch (err) {
    return next(err);
  }
};
