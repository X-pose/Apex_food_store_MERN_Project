const mongoose = require('mongoose');
const connectDB = require('../config/database')

const feedbackSchema = new mongoose.Schema({

    fbUserName: { type: String, required: false},
    fbUserEmail: { type: String, required: false},
    fbContext: {type:String,required:false}

},{ collection: 'feedbackCollection' });

connectDB.getInstance();

const feedbackModel = mongoose.model('feedbackModel', feedbackSchema, 'feedbackCollection')

module.exports = feedbackModel;