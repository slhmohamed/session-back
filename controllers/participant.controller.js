const Particpant = require("../models/participant.model");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.model");
const Formateur = require("../models/formateur.model");
 const Responsable = require("../models/responsable.model");

exports.addParticipant = async(req, res, next) => { 

  const admin = await Admin.findOne({ email: req.body.email });
  const responsable = await Responsable.findOne({ email: req.body.email });
  const particpantO = await Particpant.findOne({ email: req.body.email });
  const formateur = await Formateur.findOne({ email: req.body.email });

  if(admin||responsable||particpantO||formateur){
  
    res.status(500).json({
      error: 'Email déja exist'
    });
  }else{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const particpant = new Particpant({
      
         firstName:req.body.firstName,
         lastName: req.body.lastName,
          tel:req.body.tel,
          raison_social:req.body.raison_social,
         email:req.body.email,
         password:hashedPassword,
         adresse:req.body.adresse,
         socite:req.body.socite
    });
    particpant
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
  exports.deleteParticipant = (req, res) => {
    Particpant.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAllParticipant = async(req, res) => {
    const Particpants = await Particpant.find({}).populate({ path: 'socite', select: 'nom' })
  console.log(Particpants);
  res.status(200).json({
    status: true,
    data: Particpants,
  });
  }
  
  exports.getParticipant = async (req, res) => {
    const particpant= await Particpant.findById(req.params.id)
    res.json(particpant);
    }

    
exports.updateParticipant=async (req,res)=>{
  var obj;
if(req.body.password==''){
    obj={
  
      firstName:req.body.firstName,
      lastName: req.body.lastName,
       tel:req.body.tel,
       raison_social:req.body.raison_social,
      email:req.body.email,
       adresse:req.body.adresse,
      socite:req.body.socite
  }
}else{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
    obj = {
      firstName:req.body.firstName,
         lastName: req.body.lastName,
          tel:req.body.tel,
          raison_social:req.body.raison_social,
         email:req.body.email,
         password:hashedPassword,
         adresse:req.body.adresse,
         socite:req.body.socite
  }
}

  let result= await Particpant.findByIdAndUpdate(req.params.id, {$set: obj});
  res.status(200).json("Updated...")

}
 