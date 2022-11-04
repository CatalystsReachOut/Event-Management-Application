import Events from "../models/Events.js"

import bigPromise from "../middlewares/bigPromise.js"

export const createEvent = bigPromise(async(req, res , next) => {

   const {eventName , discription , date} = req.post;

   if(!eventName || !discription || !date){
     return res.status(400).json({

       success:false,
       message: "All fields are required!"
     })
   }



   const existingEvent = await Event.findOne({eventName:eventName})
   if(existingEvent){

       return res.status(501).json({

         status:true,
         message:"Event already exists !",
       })
   }
   else{

      const event = await Events.create({
            eventName,
            discription,
            date


      })

      return res.status(201).json({
       success: true,
       message: "Event Created Successfully !",
       data:event


      })
   }

})
