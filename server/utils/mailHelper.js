import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()
 
export const mailHelper=async(option)=>{
    // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
  });

  // send mail with defined transport object
  const message = {
    from: 'shreyasjakati66@gmail.com', // sender address
    to: option.email, // list of receivers
    subject: option.subject, // Subject line
    text:option.message, // plain text body
  }
    await transporter.sendMail(message);
}