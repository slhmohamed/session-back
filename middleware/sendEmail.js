 
 
const nodemailer = require('nodemailer');
 
 

var mailer = require('nodemailer');

var transporter = async (req, mailConfig) => {
console.log(mailConfig);
req.transporter = mailer.createTransport(mailConfig);


};
module.exports.transporter = transporter;