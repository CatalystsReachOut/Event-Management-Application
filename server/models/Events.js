import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const eventSchema = new mongoose.Schema({

    eventName : {
                    type: String,
                    required: true,
                    maxlength: [100, 'Event name should be under 100 characters.']

      },

      venue: {
                type: String,
                required: true,
                maxlength: [40 , 'Please enter the venue name.']

        },

        subEvents:[
          {
            type: String,
            required: true,
            maxlength: [100, 'Sub-Event name should be under 100 characters.']

          }
        ],

        discription: {
                       type: String,
                       required: false,
                       maxlength: [300 , 'Whats the event is all about please describe.']
                       },

      date: {

          type: Date,
          required: true,

      },

      speakers:{
                   type: String,
                   required: true,
                   maxlength: [20 , 'Speaker name should be under 20 characters.']

      },

      Prize:
      {
        type: String,
        required: true,
        maxlength: [100 , 'Prize discription should be not be more then 100 characters.']
      },

     certificateTemplate:
    {
      type: String,
      required: true,
      maxlength: [100 , 'Certificate template should not be more then 100 character.']
    },

    Status:
    {
      type: String,
      required: true,
      maxlength: [15 , 'Status should should not be more then 15 character.']
    },

    ticketStatus:
    {
      type: String,
      required: true,
      maxlength: [15, 'Ticket Status should not be more then 15 character.']

    },

    })

    const Event = mongoose.model("Event",eventSchema);
    export default Event;
