const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const myEmail = process.env.EMAIL
const myPassword = process.env.PASSWORD
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
        user: myEmail,
        pass: myPassword,   
    },
});

app.post('/send-verification-email', (req, res) => {
    const email = req.body.email;
    const token = crypto.randomBytes(32).toString('hex');
    
    // Save the token and email in your database for later verification

    const mailOptions = {
        from: myEmail,
        to: email,
        subject: 'Confirm your email address',
        text: `Click on this link to verify your email: http://localhost/verify'?token=${token}'`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending verification email.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Verification email sent.');
        }
    });
});
