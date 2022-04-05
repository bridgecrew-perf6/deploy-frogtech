const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

name:{
  type:String,
  required:True 
},

email:{
    type:String,
    required:True 
  },

contact:{
    type:String,
    required:True 
  },

category:{
    type:String,
    required:True 
  },

  message:{
    type:String,
    required:True 
  }, 

date:{
 type: Date,
 default:Date.now
}

});

const Messages = mongoosemongoose.model('User', UserSchema);

module.exports = User;