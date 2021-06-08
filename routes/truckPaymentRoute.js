const express = require('express');
const router = express.Router();
const TruckPayment = require('../models/TruckPayment');
const Truck = require('../models/Truck')

// Route that gets information from truckPayment.
router.get('/truckPayment', async(req, res) => {
  if (req.session) {
    const truck = await Truck.find();
    res.render('truckPayment',{truck:truck});
  }
});

//Route to post truckPayment data.
router.post('/truckPayment', async(req, res) => { 
  if (req.session) {
  try{
console.log(req.body)
const truckPayment = new TruckPayment(req.body);

await truckPayment.save()
res.redirect('/truckPayment')
}catch(err){
    console.log(err);
    res.send('oops something went wrong')
}
}
})


router.get('/', async (req, res) => {
    try {
      // Find all the data in the collection.
      let truckPaymentDetails = await TruckPayment.find();
      if (req.query.truckCode) {
        truckPaymentDetails = await TruckPayment.find({ truckCode: req.query.truckCode})
      }
      res.render('truckPaymentList', { users: truckPaymentDetails, title: 'truckPayment list' })
  } catch (err) {
      console.log(err)
      res.send('Failed to retrive truck payment details');
  }
  })

  // router.get('/update/:id', async (req, res) => {
  //   try {
  //       const updatePay = await TruckPayment.findOne({ _id: req.params.id })
  //       res.render('updateTruckPayment', { user: updatePay })
  //   } catch (err) {
  //       res.status(400).send("Unable to find item in the database");
  //   }
  // })
  
  //Delete a truck payment record from the database.
  
  router.post('/delete', async (req, res) => {
    try {
        await TruckPayment.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  })
  
  
    

  
module.exports = router;
