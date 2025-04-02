import { Router } from "express";
import { createJobs, draftJobs, getDraftJobs, getJobs } from "../controllers/jobController.js";

const router = Router();

router.get("/", getJobs);
router.post("/", createJobs);
router.get("/drafts", getDraftJobs);
router.post("/drafts", draftJobs);

export default router;
