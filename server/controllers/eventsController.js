import Events from "../models/Events.js"
import bigPromise from "../middlewares/bigPromise.js"
import multer from 'multer';
import fs from "fs"

   const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
export const createEvent = bigPromise(async(req, res , next) => {
  const {data} = req.body;
  const data1=JSON.parse(data);
  console.log(JSON.parse(data)?.eventName);
  //  if(!eventName || !description || !date){
  //    return res.status(400).json({

  //      success:false,
  //      message: "All fields are required!"
  //    })
  //  }
  
   const existingEvent = await Events.findOne({eventName:data.eventName})
   if(existingEvent){
       return res.status(501).json({

         status:true,
         message:"Event already exists !",
       })
   }
   else{

      const event = await Events({
       eventName:data1.eventName,
       description:data1.description,
       date:data1.date,
       img: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      }
      })

      event.save().then((res) =>{
     console.log("Success");
      }).catch((err) =>{
        console.log("Error")
      });

      return res.status(201).json({
       success: true,
       message: "Event Created Successfully !",
       data:event


      })
   }

})

export const getEvent = bigPromise(async(req,res,next)=>{
 
  const events = await Events.find({});
  if(events)
  {
  return res.status(200).json({
   success:true,
   message:"Successfully sent",
   data:events
  })
  }
  else{
    return res.status(500).json({
    success:false,
    message:"Failed to send it does not exist!"
    });
  }
})

