const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const app = express()
const mail = require("./routes/mail")
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
dotenv.config()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use("/api", mail)

app.listen(port, () => console.log("Server Running"));
