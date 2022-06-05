const  mongoose = require("mongoose");
var Schema = mongoose.Schema;

 const sociteSchema = new mongoose.Schema({
    nom: {type: String, required: true},
     raison_socail: {type: String, required: true},
     tel: {type: String, required: true},

    
   
 })

 module.exports = mongoose.model("Societe", sociteSchema);