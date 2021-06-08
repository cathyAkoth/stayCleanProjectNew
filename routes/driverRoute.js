// Iniialisation and Imporatation.
const express = require('express');
const router = express.Router();
const DriverReg = require('../models/DriverReg');

//Get and show the driverReg.pug file
router.get('/driverReg', (req, res) => {
  if (req.session) {   
  res.render('driverReg');
  }
});

 //Save data from the driverReg pug file. 
  router.post('/driverReg', async(req, res) => { 
    if (req.session) {
    try{
    console.log(req.body)
    const driverReg = new DriverReg(req.body);
    
    await driverReg.save()
    res.redirect('/driver')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
    }
    }

    })

    // Show driverReg data from database on the driverRegList pug file.
    router.get('/', async (req, res) => {
      try {
        // Find all the data in the Driver collection.
        let driverRegDetails = await DriverReg.find();
        if (req.query.lastname) {
          driverRegDetails = await DriverReg.find({ lastname: req.query.lastname })
        }
        res.render('driverRegList', { users: driverRegDetails, title: 'Driver list' })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive driver details');
    }
    })

    
    // Obtaining data to be updated.
    router.get('/update/:id', async (req, res) => {
      try {
          const updateDri = await DriverReg.findOne({ _id: req.params.id })
          res.render('updateDriver', { user: updateDri })
      } catch (err) {
          res.status(400).send("Unable to find item in the database");
      }
    })


// Route to save the updated data.
  router.post('/update', async (req, res) => {
    try {
        await DriverReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/driver');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
  })

//Delete and driver record from the database.
// Add the delete code to the driverReglist pug file.
router.post('/delete', async (req, res) => {
  try {
      await DriverReg.deleteOne({ _id: req.body.id })
      res.redirect('back')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})


  
  module.exports = router;