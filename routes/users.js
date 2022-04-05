
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//Login Page
router.get('/registration', (req,res)=> res.render('user/registration'));

//Register Page
router.get('/registration', (req,res)=> res.render('user/registration'));

 //Register HAndle
 router.post('/register', (req, res)=>{

 const{name, email, password, password} = req.body;
 let errors =[];

 //Check required fields
 if(!name || !email || !password || !password2){
     errors.push({msg:'Please fill in all Fields'})
 }

//check passwords match
if(password!== password2){
   errors.push({msg: 'Passwords do not match '})

}

//Check pass length

if(password.length< 6){
    errors.push({msg:'Password should be at least 6 characters'})
}
 });

if(errors.length> 0){

 res.render('register', {errors, name, email, password, password2});

}  else{
    User.findOne({email:email})
    .then(user =>{
        if(user) {
            //User exists
            errors.push({msg:'Email is already registered'});
            res.render('register', {errors, name, email, password, password2});
        } else{
           const newUser = new User({
               name,email,password
           }); 
        }
    })
}

module.export = router;