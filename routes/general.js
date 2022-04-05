 
 const router = require('express').Router();



 
 router.get('/services' , (req,res)=> res.render('general/services'));
 
 router.get('/learnmore' , (req,res)=> res.render('general/learnmore'));
 
 router.get('/contact' , (req,res)=> res.render('general/contact'));
 
 router.post('/contact', (req,res)=> {
                      console.log(req.body)
                      res.send('hello');         
                    
                    })



  module.exports = router;