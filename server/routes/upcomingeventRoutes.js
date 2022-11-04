import express from "express"
const router = express.Router()

// import controllers
import {createUpcomingEvent } from "../controllers/upcomingeventController.js"

router.route("/createUpcomingEvent ").post(createUpcomingEvent )


export default router;
