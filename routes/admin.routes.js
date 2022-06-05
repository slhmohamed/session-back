const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin.controller");
 
 
router.post("/addAdmin", controller.saveAdmin);

 
module.exports = router;