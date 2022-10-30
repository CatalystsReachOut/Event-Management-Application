import express from "express"
const router = express.Router()

// import controllers
import {createUser} from "../controllers/userController.js"
import {login} from "../controllers/userController.js"
router.route("/login").post(login)
router.route("/signup").post(createUser);

export default router;