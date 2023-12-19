
const faqModel = require('../models/faqModel')
const feedbackModel = require('../models/feedbackModel')
const httpStatus = require('http-status');


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

            sendMail()
            return  res.status(200).json({ message: 'feedback added!', savedFeedback });

        }
        else{
            return  res.status(400).json({ message: 'feedback Not added!', savedFeedback });
        }

    }catch (error){
        return  res.status(400).json({ message: 'Error at sendFeedBacks function!', error});
    }
}

const sendMail = async (req,res) =>{

}
