import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const eventSchema = new mongoose.Schema({

    img:{
      data: Buffer,
    contentType: String,
    },

    eventName : {
                    type: String,
                    required: true,
                    maxlength: [100, 'Event name should be under 100 characters.']

      },

      venue: {
                type: String,
                maxlength: [40 , 'Please enter the venue name.']

        },

        subEvents:[
          {
            type: String,
            maxlength: [100, 'Sub-Event name should be under 100 characters.']

          }
        ],

        description: {
                       type: String,
                       required:true,
                       maxlength: [300 , 'Whats the event is all about please describe.']
                       },

      date: {

          type: Date,
          required: true,

      },

      speakers:[{
                   type: String,
                   maxlength: [20 , 'Speaker name should be under 20 characters.']

      }],

      Prize:
      {
        type: String,
        maxlength: [100 , 'Prize discription should be not be more then 100 characters.']
      },

     certificateTemplate:
    {
      type: String,
      maxlength: [100 , 'Certificate template should not be more then 100 character.']
    },

    Status:
    {
      type: String,
      maxlength: [15 , 'Status should should not be more then 15 character.']
    },

    ticketStatus:
    {
      type: String,
      maxlength: [15, 'Ticket Status should not be more then 15 character.']
    },

    })

    const Event = mongoose.model("Event",eventSchema);
    export default Event;
