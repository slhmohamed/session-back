const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentificationCont");
 
 
router.post("/signin", authController.signin);

 
module.exports = router;