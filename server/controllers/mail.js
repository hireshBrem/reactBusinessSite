const nodemailer = require("nodemailer")

const sendMail =  (req, res) => {
    console.log("req body", req.body);
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_FROM,
          pass: process.env.PASSWORD
        }
    });
    
    let email = req.body.email
    let message = req.body.message

    var mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: 'Sending Email via Node.js',
        text: {message}, 
    };
        
    mail.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = sendMail

