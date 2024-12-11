require("dotenv").config();
const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "simpleorders24x7@gmail.com",
        pass:process.env.email_pass,
    },
});


module.exports = transporter;
