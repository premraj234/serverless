const mongoose = require('mongoose');


const orderItems = new  mongoose.Schema({
    Items:{
        type:String,
        require:true
    },
    

});

// Registering models with the mongodb

module.exports = mongoose.model('Orders',orderItems );