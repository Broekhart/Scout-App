import mongoose from 'mongoose';

const ScoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    coverImage: String,
    skills: [String],
  },
  {
    timestamps: true,
  }
);

const Scout = mongoose.models.Scout || mongoose.model('Scout', ScoutSchema);

export default Scout;
