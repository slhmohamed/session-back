const Cataloge = require("../models/cataloge.model");


exports.addCataloge =   (req, res) => { 

 
  console.log(req.body);
    const cataloge = new Cataloge({
      titre: req.body.titre ,
      description: req.body.description ,
      theme:  req.body.theme ,
    });
    cataloge
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
  exports.deleteCataloge = (req, res) => {
    console.log(req.params.id);
    Cataloge.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAllCataloge = (req, res) => {
    Cataloge.find({}).exec(function (err, cataloge) {
      if (err) {
        console.error("erreur");
      } else {
  
        res.json(cataloge);
      }
    });
  }