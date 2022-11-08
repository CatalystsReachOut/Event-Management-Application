import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"
const app=express()
app.use(cors());
dotenv.config();
import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())
// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
import eventRoutes from "./routes/eventsRoutes.js"
import feedbackroutes from "./routes/feedbackRoutes.js"
// router middleware
app.use("/api/user",userRoutes);
app.use("/api/event",eventRoutes);
app.use("/api/feedback",feedbackroutes);
export default app;