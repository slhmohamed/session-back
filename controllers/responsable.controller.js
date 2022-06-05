const Responsable = require("../models/responsable.model");
const Admin = require("../models/admin.model");
const Formateur = require("../models/formateur.model");
const Particpant = require("../models/participant.model");
const bcrypt = require("bcryptjs");

exports.addResponsable = async (req, res, next) => {
  const admin = await Admin.findOne({ email: req.body.email });
  const responsableo = await Responsable.findOne({ email: req.body.email });
  const particpantO = await Particpant.findOne({ email: req.body.email });
  const formateur = await Formateur.findOne({ email: req.body.email });
  if (admin || responsableo || particpantO || formateur) {
    console.log("err");
    res.status(500).json({
      error: 'Email déja exist'
    });

  }
  else {
    console.log("here");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const responsable = new Responsable({
      cin: req.body.cin,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      tel: req.body.tel,
      password: hashedPassword,
    });
    responsable
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
exports.deleteResponsable = (req, res) => {
  Responsable.findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.status(200).json("Deleted...")
    })
    .catch((error) => { console.log(error) });
}

exports.getAllResponsable = (req, res) => {
  Responsable.find({}).exec(function (err, responsable) {
    if (err) {
      console.error("erreur");
    } else {

      res.json(responsable);
    }
  });
}

exports.getResponsbale = async (req, res) => {
  const responsable = await Responsable.findById(req.params.id)
  
  res.json(responsable);
}

exports.updateResponsable=async (req,res)=>{
  var obj;
if(req.body.password==''){
    obj={
  
      cin: req.body.cin,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      tel: req.body.tel,
  }
}else{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    obj = {
    cin: req.body.cin,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    password: hashedPassword,
  }
}

  let result= await    Responsable.findByIdAndUpdate(req.params.id, {$set: obj});
  res.status(200).json("Updated...")

}
 
 