const mongoose = require('mongoose');
const connectDB = require('../config/database')

const faqSchema = new mongoose.Schema({

    faqName: { type: String, required: false},
    faqQuestion: { type: String, required: true},
    faqAnswer: {type:String,required:true}

},{ collection: 'faqCollection' });

connectDB.getInstance();

const faqModel = mongoose.model('faqModel', faqSchema, 'faqCollection')

module.exports = faqModel;