// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const conductorRegSchema = new mongoose.Schema({
  firstname: {
    type: String,
    //required: 'please fill in',
  },
  lastname: {
    type: String,
    //required: 'please fill in',
  },
  gender:{
      type: String,
      //required:'please select',
  },
  age:{
    type: String,
    //require: 'please enter service'
  },
  date:{
      type: String,
      //required: 'please fill in',
  },
  telephoneNo:{
    type: String,
    //required:'please select',
  },
  nin:{
  type: String,
  //unique: true,
  //require: 'please enter '
  },
  cresidence:{
    type: String,
    //required: 'please fill in'
},



  
})
// Export mongoose model.
module.exports = mongoose.model('ConductorReg', conductorRegSchema)