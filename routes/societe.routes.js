const controller=require('../controllers/socite.controller')
const express = require("express");
const router = express.Router();

router.post("/addSocitie",controller.saveSociete)
router.get("/getAllSociete",controller.getAllSociete)
router.delete("/deleteSociete/:id",controller.deleteSociete)
router.get("/getSocitie/:id",controller.getSociete)

router.put("/updateSociete/:id",controller.updateSociete)
 
  
  module.exports = router;