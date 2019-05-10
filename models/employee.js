const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  phone : {
      type : String,
      required : true,
  },
  birthDate : {
      type : Number
  },
  roles : {
      type : Array,
  },
  email : {
      type : String,
  },
  status : {
    type : Number
  } ,
  fullNameKhongDau : {
    type : String,
  },
  note : {
    type : String
  },
  fullName  : {
    type : String,
    required : true
  }
}); 


module.exports = mongoose.model('Employee', employeeSchema);
