const controller=require('../controllers/catalogue.controller')
const express = require("express");
const router = express.Router();
router.post("/addCataloge",controller.addCataloge)
router.get("/getAllCatalogue",controller.getAllCataloge)
router.delete("/deleteCatalog/:id",controller.deleteCataloge) 
module.exports = router; 