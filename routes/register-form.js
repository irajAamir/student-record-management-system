let express = require('express');
let router = express.Router();

let Register = require('../models/register');

router.post('/register', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let registration = new Register({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    });
    
    registration.save();
  } else {    
    //console.log(req.body._id);
    Register.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;
