import Upcoming_Event from "../models/Upcoming_Event.js"

import bigPromise from "../middlewares/bigPromise.js"

export const createUpcomingEvent = bigPromise(async(req,res,next)=>{

     const{eventName , speakers , status} = req.post;

     if((!eventName) || (!speakers) || (!status))
     {

       return res.status(400).json({

         success:false,
         message: "Fill the required fields!"
     }

     const existingUpcomingEvent = await Event.findOne({eventName: eventName})

     if(existingUpcomingEvent){
              return res.status(501).json({

             status: true,
             message: "Upcoming Event already exists"

            })
            }

            else {
                    const upcomingevent = await Upcoming_Event.create({

                         eventName,
                         speakers,
                         status


                    })

                    return res.status(201).json({

                         success: true,
                         message: "Upcoming Event created Successfully!",
                         data: upcomingevent


                    })
            }

})
