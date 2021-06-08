// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const truckSchema = new mongoose.Schema({
  regNumber: {
    type: String,
   
  },
  codeNumber: {
    type: String,
    unique: true,
    
  },
  truckService:{
      type: String,
     
  },
  driver:{
    type: String,
  }
  
})
// Export mongoose model.
module.exports = mongoose.model('Truck', truckSchema)