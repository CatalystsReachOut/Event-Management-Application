// Import Model
import User from "../models/User.js"
import { cookieToken } from "../utils/cookieToken.js";
import { mailHelper } from "../utils/mailHelper.js";
import crypto from "crypto";
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

   export const logout=bigPromise(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    
    res.status(200).json({
        success:true,
        message:"loggedOut Successfully"
    })
})

export const forgotPassword= bigPromise(async(req,res,next)=>{
   const {email} =req.body;
   const user = await User.findOne({email});
   if(!user)
   {
    return res.status(400).json({
    success:"false",
    message:"No the user is not registered"
    });
   }
   const forgotToken=await user.getForgotPasswordToken();
   await user.save({validateBeforeSave:false});

   const myUrl=`${req.protocol}://${req.get('host')}/api/password/reset/${forgotToken}`

   const message=`copy paste this link in your urls and hit enter \n\n ${myUrl}`

   try {
       await mailHelper({
           email:user.email,
           subject:"Project Dashboard - Password Reset Email",
           message:message
       })

       res.status(200).json({
           success:true,
           message:"Email Sent Successfully!"
       })
   } catch (error) {
       user.forgotPasswordToken=undefined,
       user.forgotPasswordExpiry=undefined,
       await user.save({validateBeforeSave:false})

       return res.status(500).json({
           error:error.message
        })
   }
});


export const getLoggedinuserdetails= bigPromise(async(req,res,next)=>{

const user=await User.findById(req.user.id);

res.status(200).json({
 sucess:true,
 user
});
});

export const changePassword= bigPromise(async(req,res,next)=>{
 const userId=req.user.id;
 const user = User.findById(userId).select("+password");
 const user1=await user.isValidatedPassword(req.body.oldpassword,user.password);
 if(!user1)
 {
    res.status(400).json({
        success:false,
        message:"Old password is incorrect"
    })
 }
 const newpass=req.body.newpassword;
 user.password=newpass;
 cookieToken(user,res,"Password changed Successfully");
});

export const updateUserdetails=bigPromise(async(req,res,next)=>{
 const newData={
    name:req.body.name,
    email:req.body.email
 }
 const updated=await User.findByIdAndUpdate(req.user.id,newData,{
  new:True,
  runValidators:True,
  useModifyandUpdate:false
 });

 res.status(200).json({
    success:true,
    updated
 })
});

//Admin
//View all the users

export const adminallUsers=bigPromise(async(req,res,next)=>{
const users=await User.find();
res.status(200).json({
success:true,
users
});
});

export const admingetoneUser=bigPromise(async(req,res,next)=>{
const user=await User.findById(req.params.id);
if(!user)
res.status(200).json({
    success:true,
    user
})
});