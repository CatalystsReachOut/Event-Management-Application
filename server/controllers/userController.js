// Import Model
import User from "../models/User.js"

// Making Promise
import bigPromise from "../middlewares/bigPromise.js"

export const createUser = bigPromise(async(req,res,next)=>{

    const {firstname,lastname,email,password}=req.body;
    console.log(req.body);
    if((!firstname) || (!lastname) || (!email) || (!password)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }

    const user=await User.create({
        firstname,
        lastname,
        email,
        password
    })

    return res.status(201).json({
        success:true,
        message:"User Created Successfully !",
        data:user
    })
})

   export const login=bigPromise(async(req,res,next)=>{
    
    const {email,password}=req.body;
    console.log(req.body);
    if(!email){
        return res.status(400).json({
            message: "Bad Request"
        })
    }
    const existingUser = await User.findOne({
        email:email
    }).catch(err => {
        console.log(err);
    })

    if(!existingUser){
        return res.status(501).json({
            success:true,
            message:"Invalid User !", 
        })
    }

    const isPasswordCorrect=await existingUser.isValidatedPassword(password, existingUser.password)

    if(!isPasswordCorrect){
        return res.status(401).json({
            success:"false",
            message:"Incorrect Password"
        })
    }

    return res.status(200).json({
        success:"True",
        message:"Correct Password"
    });
    

   })