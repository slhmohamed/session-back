const Theme = require("../models/theme.model");


exports.addTheme =   (req, res) => { 

  console.log("tets");
  console.log(req.body);
    const theme = new Theme({
      titre: req.body.titre ,
      description: req.body.description ,
      cataloge:  req.body.cataloge ,
    });
    theme
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
  exports.deleteTheme = (req, res) => {
    Theme.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.status(200).json("Deleted...")
      })
      .catch((error) => { console.log(error) });
  }

  exports.getAllTheme = (req, res) => {
    Theme.find({}).exec(function (err, theme) {
      if (err) {
        console.error("erreur");
      } else {
  
        res.json(theme);
      }
    });
  }