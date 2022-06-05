const Admin = require("../models/admin.model");
 const Formateur = require("../models/formateur.model");
const Particpant = require("../models/participant.model");
const Responsable = require("../models/responsable.model");
const bcrypt = require("bcryptjs");

exports.saveAdmin =async (req, res, next) => { 

  const admino = await Admin.findOne({ email: req.body.email });
  const responsable = await Responsable.findOne({ email: req.body.email });
  const particpantO = await Particpant.findOne({ email: req.body.email });
  const formateuro = await Formateur.findOne({ email: req.body.email });

  if(admino||responsable||particpantO||formateuro){
    console.log("err");
    res.status(500).json({
      error: 'Email déja exist'
    });
  }else{

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const admin = new Admin({
        firstName:req.body.firstName,
         lastName: req.body.lastName,
         email:req.body.email,
         password:hashedPassword,
          
    });
    admin
      .save()
      .then(result => {
 
        res.status(200).json({
          status: true,
          data: result,
      });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    }
  };
  exports.deleteAdmin = (req, res) => {
    Admin.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAll = (req, res) => {
    Admin.find({}).exec(function (err, admin) {
      if (err) {
        console.error("erreur");
      } else {
  
        res.json(societe);
      }
    });
  }