const controller=require('../controllers/participant.controller')
const express = require("express");
const { Router } = require('express');
const router = express.Router();

router.post("/addParticipant",controller.addParticipant)
router.get("/getAllParticipant",controller.getAllParticipant)
 router.delete("/deleteParticipant/:id",controller.deleteParticipant)

 router.get("/getParticipant/:id",controller.getParticipant)
 router.put('/updateParticipant/:id',controller.updateParticipant)

  
  module.exports = router;