const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Create Scheme
const UserPersonalSchema = new Schema({
    
    username: {
        type: String,
        default: '',
        required: true
    },
   email: {
        type: String,
        default: '',
        required: true
    },
    firstname: {
        type: String,
        default: '',
      
    },
    lastname: {
        type: String,
        default: '',
        
    },
    birthday: {
        type: Object,
        default: '',
        required: true
    },
   
});

module.exports = UserPersonal = mongoose.model('userpersonal', UserPersonalSchema);