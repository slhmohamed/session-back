
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.model");
const Formateur = require("../models/formateur.model");
const Particpant = require("../models/participant.model");
const Responsable = require("../models/responsable.model");

const jwt = require("jsonwebtoken");
const { secret } = require("../middleware/config.json");
exports.signin = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  const responsable = await Responsable.findOne({ email: req.body.email });
  const particpant = await Particpant.findOne({ email: req.body.email });
  const formateur = await Formateur.findOne({ email: req.body.email });

 
  if (admin) {
    let isMatch = await bcrypt.compare(req.body.password, admin.password)
    if (isMatch) {
      var token = jwt.sign(
        { _id: admin._id, role: "Admin" },
        secret,
        { expiresIn: "1h" }
      );

      res.json({
        success: true,
        token: token,
        role: "Admin",
      });
    } else {
      res.send({
        success: false,
        msg: "Authentication failed. Wrong password.",
      });
    }
  } else if (responsable) {
    let isMatch = await bcrypt.compare(req.body.password, responsable.password)
    if (isMatch) {
      var token = jwt.sign(
        { _id: responsable._id, role: "Responsable" },
        secret,
        { expiresIn: "1h" }
      );

      res.json({
        success: true,
        token: token,
        role: "Responsable",
      });
    } else {
      res.send({
        success: false,
        msg: "Authentication failed. Wrong password.",
      });
    }
  }else if(particpant){
    let isMatch = await bcrypt.compare(req.body.password, particpant.password)
    if (isMatch) {
      var token = jwt.sign(
        { _id: particpant._id, role: "Particpant" },
        secret,
        { expiresIn: "1h" }
      );

      res.json({
        success: true,
        token: token,
        id: particpant._id,
        role: "Particpant",
      });
    } else {
      res.send({
        success: false,
        msg: "Authentication failed. Wrong password.",
      });
    }
  }else if(formateur){
    let isMatch = await bcrypt.compare(req.body.password, formateur.password)
    if (isMatch) {
      var token = jwt.sign(
        { _id: formateur._id, role: "Formateur" },
        secret,
        { expiresIn: "1h" }
      );

      res.json({
        success: true,
        token: token,
        id:formateur._id,
        role: "Formateur",
      });
    } else {
      res.send({
        success: false,
        msg: "Authentication failed. Wrong password.",
      });
    }
  }else{
    res.send({
      error: false,
      msg: "Authentication failed. Wrong password.",
    }); 
  }

}