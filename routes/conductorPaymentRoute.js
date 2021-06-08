const express = require('express');
const router = express.Router();
const ConductorPayment = require('../models/ConductorPayment');
const ConductorReg = require('../models/ConductorReg');

// Defining conductorReg.
router.get('/conductorPayment', async(req, res) => {
  if (req.session) {
  const conductorReg = await ConductorReg.find();
    res.render('conductorPayment',{conductorReg:conductorReg});
  } 
  });

router.post('/conductorPayment', async(req, res) => { 
  if (req.session) {
  try{
console.log(req.body)
const conductorPayment = new ConductorPayment(req.body);

await conductorPayment.save()
res.redirect('/conductorPayment')
}catch(err){
    console.log(err);
    res.send('oops something went wrong')
} 
}
})


router.get('/', async (req, res) => {
    try {
      // Find all the data in conductor payment collection.
      let conductorPaymentDetails = await ConductorPayment.find();
      if (req.query.date) {
        conductorPaymentDetails = await conductorPayment.find({ date: req.query.date})
      }
      res.render('conductorPaymentList', { users: conductorPaymentDetails, title: 'conductorPayment list' })
  } catch (err) {
      console.log(err)
      res.send('Failed to retrive conductor payment details');
  }
  })


  
  //Delete and payment record from the database.
  // Add the delete code to the pug list file.
  router.post('/delete', async (req, res) => {
    if (req.session) {
    try {
        await ConductorPayment.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
     }
  })
  

  module.exports = router;