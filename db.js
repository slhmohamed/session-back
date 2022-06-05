const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pfe-stip")
.then(db => console.log("database connected"))
.catch(err => console.log(err));
