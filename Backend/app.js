
/**
 * @author - T.P. Thalangama
 * @description - This is the entry point to the express app server. All the app related configurations should be done in here.
 */


//Imports and requires
const AppExpress = require('express')
const app = AppExpress()
const path = require('path')
const appRouter =AppExpress.Router()
const feedbackRouter = require('./routes/feedbackRoutes')


//Mounting middleware to API calls
app.use(AppExpress.json())
app.use('/static', AppExpress.static(path.join(__dirname, 'public')))
app.use('/', appRouter)

/*Setup your routes here

ex :-
    app.use('/api/login',loginRouter)

*/

app.use('/api/feedback%FAQs', feedbackRouter)

//Backend static file serving is done from here.
app.use(AppExpress.static(path.join(__dirname, 'build')))
// Serving the production ready 'index.html' file for all requests
app.get('*', (req, res) => {

  //Index.html is served 
  res.sendFile(path.join(__dirname, 'build', 'index.html'))

});



module.exports = app;
console.log('Exporting app instance...');
