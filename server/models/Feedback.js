import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const feedbackSchema = new mongoose.Schema({

    eventId: {

      type: String,
      required: true,
      maxlength: [100 , 'Event id should be not more then 100 characters.']
    },

    eventDate:

    {
      type: Date,
      required: true,

    },

    eventNumber:
    {
      type: Number,
      required: true,
    },

    remarks:
    {
      type: String,
      required: true,
      maxlength: [200 , 'remarks should not be more then 200 characters.']
    },


})

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
