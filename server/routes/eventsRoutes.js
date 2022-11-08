import express from "express"
import multer from "multer"
// import controllers
import {createEvent,getEvent} from "../controllers/eventsController.js"
const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

router.route("/").post(upload.single("img"),createEvent)
router.route("/").get(getEvent);

export default router;
