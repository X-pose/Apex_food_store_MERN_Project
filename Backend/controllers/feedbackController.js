
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

const sendMail = async (username, email, fb) => {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: process.env.APEX_MAIL_SERVICE,
            auth: {
                user: process.env.APEX_MAIL,  // Your Gmail address
                pass: process.env.APEX_MAIL_PSW // Your Gmail password or an app-specific password
            }
        });

        console.log(process.env.APEX_MAIL + " " + process.env.APEX_MAIL_PSW);

        // Array of recipients
        const recipients = [process.env.ADMIN_MAIL_1, process.env.ADMIN_MAIL_2, process.env.ADMIN_MAIL_3];

        // Loop through recipients and send email to each one
        for (const recipient of recipients) {
            const mailOptions = {
                from: process.env.APEX_MAIL,
                to: recipient,
                subject: 'New feedback added - Apex food store',
                text: `A new feedback added by ${username} under this email - ${email} Feedback context - ${fb}`
            };

            // Send email
            const info = await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipient}:`, info.response);
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

