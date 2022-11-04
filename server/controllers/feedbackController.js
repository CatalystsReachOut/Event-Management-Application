import Feedback from "../models/Feedback.js"

import bigPromise from "../middlewares/bigPromise.js"

export const createFeedback = bigPromise(async(req,res,next) =>
{
   const {email} = res.post;

   if((!email))
   {
     return res.status(400).json({

      success: false,
      message: "Fill the email"
   }

    const existingFeedback = await Feedback.findOne({email:email})

    if(existingFeedback){

    return res.status(501).json({

         status: true,
         message: "Feedback already exists!"
  })

}else {

     const feedback = await Feedback.create({

          email,
   })

   return res.status(201).json({

        success: true,
        message: "Feedback given Successfully!",
        data: feedback

}
)}

})
