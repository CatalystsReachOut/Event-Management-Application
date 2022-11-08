import express from "express"
const router = express.Router()

// import controllers
import {createFeedback} from "../controllers/feedbackController.js"
router.route("/createFeedback").post(createFeedback)
export default router;
