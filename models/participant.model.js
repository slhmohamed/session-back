const  mongoose = require("mongoose");
var Schema = mongoose.Schema;

 const participantSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
     lastName: {type: String, required: true},
      tel:{type: String, required: true},
      raison_social:{type: String, required: true},
     email:{type: String, required: true},
     password:{type: String, required: true},
     adresse:{type: String, required: true},
     socite: {
        type: Schema.Types.ObjectId, 
        ref: "Societe",
      },
     
   
 })

 module.exports = mongoose.model("Participant", participantSchema);