const controller=require('../controllers/formateur.controleer')
const express = require("express");
const router = express.Router();

router.post("/addFormateur",controller.addFormateur)
router.get("/getAllFormateur",controller.getAllFormateur)
 router.delete("/deleteFormateur/:id",controller.deleteFormateur)
router.get("/getFormateur/:id",controller.getFormateur)
router.put("/updateFormateur/:id",controller.updateFormateur)
 
  
  module.exports = router;