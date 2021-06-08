// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    //required: 'please fill in',
  },
  lastname: {
    type: String,
    //required: 'please fill in',
  },
  nin:{
      type: String,
      unique: true,
      //required:'please select',
  },
  gender:{
    type: String,
    //required: 'please enter service'
  },
  age:{
    type: String,
    //required: 'please fill in',
  },
  date:{
      type: String,
      //required: 'please fill in',
  },
  telephoneNo:{
    type: String,
    //required:'please select',
  },
  userName:{
  type: String,
  //require: 'please enter '
  },
  role:{
    type: String,
    //required: 'please fill in',
},
image:{
  type: String,
  //required:'please select',
},


  
})
// Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema)