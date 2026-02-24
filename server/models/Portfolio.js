import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    imageUrl: String,
    technologies: [String],
    liveUrl: String
  },
  { timestamps: true }
);

export default mongoose.model('Portfolio', portfolioSchema);
