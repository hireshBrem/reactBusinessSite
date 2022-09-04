const express = require('express');
const router = express.Router();

const {sendMail} = require("../controllers/mail")

router.post("/sendmail" , (req,res) => {sendMail});

module.exports = router;