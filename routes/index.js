let express = require('express');
let router = express.Router();

let Register = require('../models/register');


/* GET home page. */
router.get('/', (req, res, next) => {
  Register.find((err, registers) => {
    //console.log(personas);
    if (err) throw err;
    res.render('index', { registers: registers });
  });
});

router.get('/register/new', (req, res, next) => {
  res.render('register-form', {});
});
router.get('/login', (req, res, next) => {
  res.render('login', {});
});

router.get('/register/update/:id', (req, res, next) => {
  let _id = req.params.id;  
  Register.findOne({ _id }, (err, register) => {
    //console.log(persona);
    if (err) throw err;
    res.render('register-form', { register: register });
  });
});

router.get('/register/delete/:id', (req, res, next) => {
  let _id = req.params.id;

  Register.remove({ _id }, (err) => {
    if (err) throw err;
  
    res.redirect('/');
  });
});
//admin login validation

router.post("/login", async(req,res)=>{
 
  try{
    const email= req.body.email;
    const password = req.body.password;
    // console.log(email)
    // console.log(password)

    const useremail = await Register.findOne({email:email});
    console.log(useremail)
   if(useremail.password===password){
    res.redirect('/');


   }else{
     res.send("password not matching")
   }
  }catch(err){
    console.log({ err })
    res.status(400).send("invalid Email")
  }
})
module.exports = router;
