const  mongoose = require("mongoose");
 
 const formateurSchema = new mongoose.Schema({
     cin:{type: String, required: true},
    firstName: {type: String, required: true},
     lastName: {type: String, required: true},
     tel:{type: String, required: true},
       email:{type: String, required: true},
     password:{type: String, required: true},
    
 })

 module.exports = mongoose.model("Formateur", formateurSchema);