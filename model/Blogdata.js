const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const data = new mongoose.Schema({
    name:{
        type:String,
        required:'name is required'
    },

    email:{
        type:String,
        required:'email is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        // unique: true
    },

    password:{
        types:String,
        // required:'password is required'
    },

    blog:{
        type:String,
        // required:'Enter your blog data'
    }
})

const Blogdata=new mongoose.model('Blogdata',data)

module.exports=Blogdata;