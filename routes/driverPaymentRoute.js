const express = require('express');
const router = express.Router();
const DriverPayment = require('../models/DriverPayment');
const DriverReg = require('../models/DriverReg');

// Defining driverReg.
router.get('/driverPayment', async(req, res) => {
  if (req.session) {
  const driverReg = await DriverReg.find();
    res.render('driverPayment',{driverReg:driverReg});
  } 
  });

router.post('/driverPayment', async(req, res) => { 
  if (req.session) {
  try{
console.log(req.body)
const driverPayment = new DriverPayment(req.body);

await driverPayment.save()
res.redirect('/driverPayment')
}catch(err){
    console.log(err);
    res.send('oops something went wrong')
} 
}
})


router.get('/', async (req, res) => {
    try {
      // Find all the data in driver payment collection.
      let driverPaymentDetails = await DriverPayment.find();
      if (req.query.date) {
        driverPaymentDetails = await DriverPayment.find({ date: req.query.date})
      }
      res.render('driverPaymentList', { users: driverPaymentDetails, title: 'driverPayment list' })
  } catch (err) {
      console.log(err)
      res.send('Failed to retrive driver payment details');
  }
  })

  router.get('/update/:id', async (req, res) => {
    try {
        const updatePay = await DriverPayment.findOne({ _id: req.params.id })
        res.render('updateDriverPayment', { user: updatePay })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
  })
  
  
  
  
  // Route to save the updated data.
  router.post('/update', async (req, res) => {
    try {
        await DriverPayment.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/driverPayment');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
  })
  
  //Delete and payment record from the database.
  // Add the delete code to the pug file.
  router.post('/delete', async (req, res) => {
    if (req.session) {
    try {
        await DriverPayment.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
     }
  })
  
  
    

  
module.exports = router;
