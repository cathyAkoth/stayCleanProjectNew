//Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const truckPaymentSchema = new mongoose.Schema({
  date: {
    type: String,
    //required: 'please fill in',
  },
  truckCode: {
    type: String,
    //required: 'please fill in',
  },
  service:{
      type: String,
      //required:'please select',
  },
  charge:{
    type: String,
    //require: 'please enter service'
  },
  paymentPlan:{
      type: String,
      //required: 'please fill in',
  },
  actualAmount:{
    type: String,
    //required:'please select',
  },
  service1:{
    type: String,
    //required:'please select',
},
charge1:{
  type: String,
  //require: 'please enter service'
},
paymentPlan1:{
    type: String,
    //required: 'please fill in',
},
actualAmount1:{
  type: String,
  //required:'please select',
},
service2:{
  type: String,
  //required:'please select',
},
charge2:{
type: String,
//require: 'please enter service'
},
paymentPlan2:{
  type: String,
  //required: 'please fill in',
},
actualAmount2:{
type: String,
//required:'please select',
},
service3:{
  type: String,
  //required:'please select',
},
charge3:{
type: String,
//require: 'please enter service'
},
paymentPlan3:{
  type: String,
  //required: 'please fill in',
},
actualAmount3:{
type: String,
//required:'please select',
},


  
})
// Export mongoose model.
module.exports = mongoose.model('TruckPayment', truckPaymentSchema)