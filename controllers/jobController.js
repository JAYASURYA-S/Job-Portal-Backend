import DraftJobModel from "../models/DraftJobModel.js";
import JobModel from "../models/JobModel.js";

//getting all the jobs
export const getJobs = async (req, res) => {
  try {
    const allJobs = await JobModel.find();
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//posting the new job
export const createJobs = async (req, res) => {
  const job = req.body;
  try {
    const newJob = new JobModel(job);
    await newJob.save();
    res.status(200).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//getting the saved(drafts) jobs
export const getDraftJobs = async (req, res) => {
  try {
    const allJobDrafts = await DraftJobModel.find();
    res.status(200).json(allJobDrafts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//posting the saved(drafts) jobs
export const draftJobs = async (req, res) => {
  const job = req.body;
  try {
    const newJobDraft = new DraftJobModel(job);
    await newJobDraft.save();
    res.status(200).json({
      message: "Job Draft created successfully",
      jobDraft: newJobDraft,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete the saved (draft) jobs
export const deleteDraftJobs = async (req, res) => {
  const { draftId } = req.params; // Assuming you're passing jobId in the request URL

  try {
    const deletedJob = await DraftJobModel.findByIdAndDelete(draftId);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job Draft not found" });
    }

    res.status(200).json({ message: "Job Draft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

