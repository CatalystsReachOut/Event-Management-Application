// Import Model
import User from "../models/User.js"

// Making Promise
import bigPromise from "../middlewares/bigPromise.js"

export const createUser = bigPromise(async(req,res,next)=>{

    const {username,email,password}=req.body;
    if((!username) || (!email) || (!password)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }

    const existingUser = await User.findOne({email:email})
    if(existingUser){
        return res.status(501).json({
            success:true,
            message:"User Already Exists !",
        })
    }
    else{
        const user=await User.create({
            username,
            email,
            password
        })
    
        return res.status(201).json({
            success:true,
            message:"User Created Successfully !",
            data:user
        })
    }

})