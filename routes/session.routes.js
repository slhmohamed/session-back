const controller=require('../controllers/session.controller')
const express = require("express");
const router = express.Router();

router.post("/addSession",controller.addSession)
router.get("/getAllSession",controller.getAllSession)
 router.delete("/deleteSession/:id",controller.deleteSession)
 router.put('/participe/:id',controller.particper)
 router.get('/getSession/:id',controller.getSession)


 
  
  module.exports = router;