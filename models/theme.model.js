const  mongoose = require("mongoose");
var Schema = mongoose.Schema;

 const themeSchema = new mongoose.Schema({
    titre: {type: String, required: true},
     description: {type: String, required: true},
     cataloge:[
         {
            type: Schema.Types.ObjectId, 
            ref: "Cataloge"
         }
    ]
    
   
 })

 module.exports = mongoose.model("Theme", themeSchema);