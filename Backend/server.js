/**
 * @author - T.P. Thalangama 
 * @description - This is Node.js server. All the server related configurations should be in here.
 * In here, we create and starts the HTTP server
 */


//Imports and Requires
const http = require('http');
const app = require('./app');

//Creates HTTP server
const server = http.createServer(app); 
module.exports = server; //Exports the HTTP server