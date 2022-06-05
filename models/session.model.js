const { type } = require("express/lib/response");
const  mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SondageSchema = new mongoose.Schema  ({
  titre: {
    type: String,
  },
  reponse1: {
    type: String,
  } ,
  reponse2:{
   type: String,
   default:0
  },
  select:{
    type:Boolean,
    default:false
  },
  lisetVoters:
    []
 
});
 const themeSchema = new mongoose.Schema({
    titre: {type: String, required: true}, 
     date_debut: {type: String, required: true},
     date_fin: {type: String, required: true},
     theme: {
        type: Schema.Types.ObjectId, 
        ref: "Theme",
      },
      formateur: {
        type: Schema.Types.ObjectId, 
        ref: "Formateur",
      },
      listeParticpants: 
    [{   type: Schema.Types.ObjectId, 
        ref: "Participant"
    }],
    sondage:[SondageSchema]

    
   
 })

 module.exports = mongoose.model("Session", themeSchema);