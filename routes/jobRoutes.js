import { Router } from "express";
import { createJobs, deleteDraftJobs, draftJobs, getDraftJobs, getJobs } from "../controllers/jobController.js";

const router = Router();

router.get("/", getJobs);
router.post("/", createJobs);
router.get("/drafts", getDraftJobs);
router.post("/drafts", draftJobs);
router.delete("/drafts/:draftId", deleteDraftJobs);

export default router;
