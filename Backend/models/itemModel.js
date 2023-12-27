const mongoose = require('mongoose');
const connectDB = require('../config/database');

const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemDescription: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemImage: { type: String, required: false }
}, { collection: 'itemCollection' });

connectDB.getInstance();

// Correct the model creation by using 'itemModel' instead of 'faqModel'
const itemModel = mongoose.model('itemModel', itemSchema, 'itemCollection');

module.exports = itemModel;