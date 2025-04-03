import mongoose from "mongoose";

const DraftJobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
    },
    companyName: {
      type: String,
    },
    location: {
      type: [String],
      default: undefined, // Prevents Mongoose from setting an empty array
    },
    jobType: {
      type: [String],
      enum: ["Internship", "Full Time", "Part Time", "Contract"],
      default: undefined, 
    },
    salary: {
      min: { type: Number },
      max: { type: Number },
    },
    deadline: {
      type: Date,
    },
    experience: {
      min: { type: Number },
      max: { type: Number },
    },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const DraftJobModel = mongoose.model("DraftJob", DraftJobSchema);

export default DraftJobModel;
