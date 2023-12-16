//All the database operations should be in here as functions
const mongoose = require('mongoose');
require('dotenv').config();

//DataBase URI
const mongoDB_URI = process.env.DATABASE_URI;

//Connection instance
let mongoInstance = null;



/* Function to connect to MongoDB. Using async function so that we can use "await" keyword to pause execution till promise resolved.
    Connect function for Site Admin*/
async function create_connection() {
  try {
    const conn = await mongoose.connect(mongoDB_URI, {
      connectTimeoutMS: 30000,
      dbName: 'Apex_foods_DB'
    });
    console.log('MongoDB connected');

    return conn;

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}


// Singleton instance of mongoose 
function getInstance() {
  if (!mongoInstance) {
    mongoInstance = create_connection();
    
  }
  return mongoInstance;
}



module.exports = {
  getInstance
};

