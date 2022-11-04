import express from "express"
const router = express.Router()

// import controllers
import {createEvent} from "../controllers/eventsController.js"

router.route("/createEvent").post(createEvent)


export default router;
