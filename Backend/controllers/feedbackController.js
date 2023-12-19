
const faqModel = require('../models/faqModel')
const feedbackModel = require('../models/feedbackModel')
const httpStatus = require('http-status');
const nodemailer = require('nodemailer');
require('dotenv').config();


exports.getFAQ = async (req, res) => {


    try {
        const getFAQs = await faqModel.find();

        if (getFAQs) {

            return res.status(200).json({ message: 'FAQs retrieved!', getFAQs });
        } else {
            return res.status(404).json({ message: 'No FAQs found' });
        }
    } catch (error) {
        console.error('Error getting FAQ list:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.sendFeedBacks = async (req,res) => {
    try {

        const newFeedback = new feedbackModel({

            fbUserName: req.body.fbUserName,
            fbUserEmail: req.body.fbUserEmail,
            fbContext: req.body.fbContext
        })


        const savedFeedback = await newFeedback.save()

        if(savedFeedback){

            sendMail(savedFeedback.fbUserName,savedFeedback.fbUserEmail,savedFeedback.fbContext)
            return  res.status(200).json({ message: 'feedback added!', savedFeedback });

        }
        else{
            return  res.status(400).json({ message: 'feedback Not added!', savedFeedback });
        }

    }catch (error){
        return  res.status(400).json({ message: 'Error at sendFeedBacks function!', error});
    }
}

const sendMail = async (username, email, fb) =>{

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: process.env.APEX_MAIL_SERVICE,
        auth: {
            user: process.env.APEX_MAIL,  // Your Gmail address
            pass: process.env.APEX_MAIL_PSW // Your Gmail password or an app-specific password
        }
    });


// Array of recipients
    const recipients = [process.env.ADMIN_MAIL_1, 'recipient2@example.com', 'recipient3@example.com'];

// Loop through recipients and send email to each one
    recipients.forEach((recipient) => {
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: recipient,
            subject: 'New feedback added - Apex food store',
            text: `A new feedback added by ${username} under this email - ${email} Feedback context - ${fb}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(`Error sending email to ${recipient}:`, error);
            } else {
                console.log(`Email sent to ${recipient}:`, info.response);
            }
        });
    });
}
