require('dotenv').config();
import nodemailer  from "nodemailer";

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME, 
      pass: process.env.MAIL_PASSWORD, 
    },
  });


let sendNormalEmail = (toReceiver, toSubject, htmlContent) => {
    // send mail with defined transport object
    return transporter.sendMail({
        from: '"ViquiCoronado 👻"', 
        to: toReceiver,
        subject: toSubject,
        html: htmlContent, 
    });

}

module.exports = {
    sendNormalEmail: sendNormalEmail
}
