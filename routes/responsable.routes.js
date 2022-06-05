const controller=require('../controllers/responsable.controller')
const express = require("express");
const router = express.Router();

router.post("/addResponsable",controller.addResponsable)
router.get("/getAllResponsable",controller.getAllResponsable)
 router.delete("/deleteResponsable/:id",controller.deleteResponsable)
 router.get("/getResponsable/:id",controller.getResponsbale)

 router.put('/updateResponsable/:id',controller.updateResponsable)
 
 
  
  module.exports = router; 