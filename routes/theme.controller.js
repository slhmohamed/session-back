const controller=require('../controllers/theme.controller')
const express = require("express");
const router = express.Router();
router.post("/addTheme",controller.addTheme)
router.get("/getAllTheme",controller.getAllTheme)
router.delete("/deleteTheme/:id",controller.deleteTheme) 
module.exports = router;