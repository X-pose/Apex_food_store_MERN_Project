/*This is a controller class - Class names should be in camel case and should follow controller suffix (ex - loginController)
for better readability
*/

const savingObj = new objModel({

    keyName: req.body.keyName,
  
})


const savedObj = await savingObj.save()


