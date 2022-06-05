const express = require("express");
const bodyParser = require('body-parser');
const cors =require('cors');


 var app = require('express')();
 app.use(cors());
const sociteRoute=require('./routes/societe.routes')
const authRoute =require("./routes/authentificationRoute");
const partRoute =require("./routes/participant.routes");
const formRoute =require("./routes/formateur.routes");
const respRoute=require('./routes/responsable.routes')
const themeRoute=require('./routes/theme.controller')
const catalogeRoute=require('./routes/cataloge.routes')
const sessionRoute=require('./routes/session.routes')
const adminRoute=require('./routes/admin.routes')
require("./db");
app.use(bodyParser.json());  
app.use("/api/admin",adminRoute)  
app.use("/api/session",sessionRoute)
app.use("/api/cataloge",catalogeRoute)
app.use("/api/theme",themeRoute)
app.use("/api/formateur",formRoute)
app.use("/api/responsable",respRoute)
app.use("/api/participant",partRoute)
app.use("/api/societe",sociteRoute)
app.use("/api/auth", authRoute);
app.listen(3000, () => {
  console.log("app started on port 3000")
})
