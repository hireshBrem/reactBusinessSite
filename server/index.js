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
app.use("/api", router)

app.listen(port, () => console.log("Server Running on " + port));
