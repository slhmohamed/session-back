const Formateur = require("../models/formateur.model");
const Admin = require("../models/admin.model");
 const Particpant = require("../models/participant.model");
const Responsable = require("../models/responsable.model");
const bcrypt = require("bcryptjs");

exports.addFormateur = async(req, res, next) => { 

  const admin = await Admin.findOne({ email: req.body.email });
  const responsable = await Responsable.findOne({ email: req.body.email });
  const particpantO = await Particpant.findOne({ email: req.body.email });
  const formateuro = await Formateur.findOne({ email: req.body.email });

  if(admin||responsable||particpantO||formateuro){
    console.log("err");
    res.status(500).json({
      error: 'Email déja exist'
    });
  }
  else{
   const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const formateur = new Formateur({
        cin:req.body.cin,
        firstName:req.body.firstName,
         lastName: req.body.lastName,
         email:req.body.email,
         tel:req.body.tel,
         password:hashedPassword,
    });
    formateur
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
  exports.deleteFormateur = (req, res) => {
    Formateur.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAllFormateur = (req, res) => {
    Formateur.find({}).exec(function (err, formateur) {
      if (err) {
        console.error("erreur");
      } else {
  
        res.json(formateur);
      }
    });
  }

  exports.getFormateur = async(req, res) => {
  const formateur=  Formateur.findById(req.params.id)
  res.json(formateur);
  }

  
exports.updateFormateur=async (req,res)=>{
  var obj;
if(req.body.password==''){
    obj={
  
      firstName:req.body.firstName,
      lastName: req.body.lastName,
       tel:req.body.tel,
       email:req.body.email,
       cin:req.body.cin
  }
}else{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    obj = {
      firstName:req.body.firstName,
         lastName: req.body.lastName,
          tel:req.body.tel,
          email:req.body.email,
         password:hashedPassword,
         cin:req.body.cin
   }
}

  let result= await Formateur.findByIdAndUpdate(req.params.id, {$set: obj});
  res.status(200).json("Updated...")

}
 

