const Session = require("../models/session.model");



exports.addSession = async (req, res, next) => {


  const session = new Session({

    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    formateur: req.body.formateur,
    listeParticpants: req.body.listeParticpants,
    theme: req.body.theme,
    titre: req.body.titre,
    sondage:req.body.sondage
  });
  session
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
exports.deleteSession = (req, res) => {
  Session.findOneAndDelete({ _id: req.params.id })
    .then((data) => {
      res.status(200).json("Deleted...")
    })
    .catch((error) => { console.log(error) });
}

exports.getAllSession = async (req, res) => {
  let sessions = await Session.find({}).populate({ path: 'theme', select: 'titre' }).populate({ path: 'formateur', select: 'firstName lastName' }).populate({ path: 'listeParticpants', select: 'firstName lastName' })

  res.json(sessions);


}


exports.particper = async (req, res) => {
  let clientId = req.body.clientId

  const session = await Session.findById(req.params.id)
 

  if (session.listeParticpants.length > 0) {
    session.listeParticpants.forEach(el => {

      if (el == req.body.clientId) {
        console.log("ok");
        res.status(500).json({
          error: 'Déja participé'
        });
      } else {

        session.listeParticpants.push(clientId)
        let liset=session.listeParticpants
        console.log(liset);

        let ses = Session.updateOne({ _id: req.params.id }, { $set: { listeParticpants: [...liset] } })
        res.status(200).json({
          mesg: 'Participé avec succes'
        });
      }
    })
  } else {

    session.listeParticpants.push(clientId)
    let liset=session.listeParticpants
    console.log(liset);

    let ses = await Session.findOneAndUpdate({ _id: req.params.id }, { $set: { listeParticpants: liset } })
 console.log(ses);
    res.status(200).json({
      mesg: 'Participé avec succes'
    });
  }
}

exports.getSession = async(req, res) => {
  const session=  Session.findById(req.params.id)
  res.json(session);
  }

    
  exports.getSession = async (req, res) => {
    const sessions= await Session.findById(req.params.id).populate({ path: 'theme', select: 'titre' }).populate({ path: 'formateur', select: 'firstName lastName' }).populate({ path: 'listeParticpants', select: 'firstName lastName' })
    res.json(sessions);
    }
