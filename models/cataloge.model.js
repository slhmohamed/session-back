const  mongoose = require("mongoose");
var Schema = mongoose.Schema;

 const catalogeSchema = new mongoose.Schema({
    titre: {type: String, required: true},
     description: {type: String, required: true},
    theme:[ {   type: Schema.Types.ObjectId, 
        ref: "Theme"
    }]
   
 })

 module.exports = mongoose.model("Cataloge", catalogeSchema);