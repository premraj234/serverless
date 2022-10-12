'use strict';

const mongoose = require('mongoose');
const Orders = require('./models');


function dataBaseConnection(){
  const url = mongoose.connect("mongodb+srv://prem:sY6adrpBgFv0zE5V@cluster0.z1f9bi2.mongodb.net/?retryWrites=true&w=majority");
  return (url)
}

module.exports.getData = async (event) => {
  await dataBaseConnection() 
  const Items = await Orders.find();
  return {
    statusCode: 200,
    body: JSON.stringify(Items),
  };
};


module.exports.postData = async(event)=>{

  // connecting to the database
  await dataBaseConnection();
  const data = JSON.parse(event.body);
  const ordering = new Orders({
    Items: data.Items,
   
});

const ordered = await ordering.save();
return{
  statusCode: 200,
  body: JSON.stringify(ordered),
}
}
