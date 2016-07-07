var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-db');
var Student = require('./student');

Student.findOne({name:'Kyle'})
  .then(function(kyle) {
    console.log('Found:', kyle);
  })
  .catch(function(err){
    console.log('Kyle Cant find');
  });
