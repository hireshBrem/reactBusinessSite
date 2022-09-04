const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const app = express()
const router = require("./routes/mail.js")
const bodyParser = require("body-parser")

const port = process.env.PORT || 3001;
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.get("/", cors(), async(req, res) => {
    res.send("This is working!")
})

app.post("/post_contact", async (req, res) => {
    let {firstname, lastname, email, file, message} = req.body

    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: email,
        to: process.env.MAIL_TO,
        subject: 'CONTACT FROM WEBSITE',
        text: `${message}, Name: ${firstname} ${lastname} Email: ${email}`,
        attachment: [{
            path: file,
        }], 
    };

    mail.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})

app.use("/api", router)


app.listen(port, () => console.log("Server Running on " + port));
