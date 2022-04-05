
 const router = require('express').Router();



 
 router.get('/software' , (req,res)=> res.render('services/software'));
 
 router.get('/hardware' , (req,res)=> res.render('services/hardware'));
 
 router.get('/networking' , (req,res)=> res.render('services/networking'));


 
 
 
  module.exports = router;