// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const driverPaymentSchema = new mongoose.Schema({
  date: {
    type: String,
    //required: 'please fill in',
  },
  driverName: {
    type: String,
    //required: 'please fill in',
  },
  wage:{
      type: String,
      //required:'please select',
  },
  days:{
    type: String,
    //require: 'please enter service'
  },
  results:{
      type: String,
      //required: 'please fill in',
  },
 


  
})
// Export mongoose model.
module.exports = mongoose.model('DriverPayment', driverPaymentSchema)