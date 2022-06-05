const Societe = require("../models/societe.model");


exports.saveSociete =   (req, res) => { 

  console.log("tets");
  console.log(req.body);
    const societe = new Societe({
        nom: req.body.nom ,
        raison_socail: req.body.raison_socail ,
        tel:  req.body.tel ,
    });
     societe
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
  };
  exports.deleteSociete = (req, res) => {
    Societe.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAllSociete = (req, res) => {
    Societe.find({}).exec(function (err, societe) {
      if (err) {
        console.error("erreur");
      } else {
  
        res.json(societe);
      }
    });
  }

  exports.getSociete = async(req, res) => {
    const societe= await Societe.findById(req.params.id)
    res.json(societe);
    }

    exports.updateSociete=async (req,res)=>{
       
     
        obj={
      
          nom: req.body.nom ,
          raison_socail: req.body.raison_socail ,
          tel:  req.body.tel ,
        }
    
      let result=    await Societe.findByIdAndUpdate(req.params.id, {$set: obj});
      res.status(200).json("Updated...")
    
    }
  