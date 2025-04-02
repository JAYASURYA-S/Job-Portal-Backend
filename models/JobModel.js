import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: [String],
      required: true,
    },
    jobType: {
      type: [String],
      enum: ["Internship", "Full Time", "Part Time", "Contract"],
      required: true,
    },
    salary: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    deadline: {
      type: Date,
      required: true,
    },
    experience: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const JobModel = mongoose.model("Job", JobSchema);

export default JobModel;
