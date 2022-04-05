 
 const router = require('express').Router();
 const  nodemailer = require('nodemailer')


router.get('/' ,(req,res)=> res.render('main'));

router.post('/', async(req, res)=> {

const output = `
<p>You have a new contact request</p>
<h3>Contact Details</h3>
<ul>
    <li>Name: ${req.body.name}</li>
    <li>Company: ${req.body.company}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
</ul>
<h3>Message</h3>
<p>${req.body.message}</p>`;


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  
  service:'gmail',
  //host: 'mail.frogtech.co.zw',
  port: 25,//FrogTech port to be defined
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'frogtech4@gmail.com', // generated frogtech user email
    pass: 'Frogtech2021', // generateds' password
  },
  tls:{
   rejectUnauthorized:false// this is done when we are still on local host
  }
});



// send mail with defined transport object
let info = await transporter.sendMail({
  from: '"FrogTech New Contact" <>', // sender address
  to: 'khumalobuja@gmail.com, ct.mupfurutsa@gmail.com', // list of receivers
  subject: "Website Form Submission", // Subject line
  
  html: output, // html body
}); 

console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

main().catch(console.error);

res.render('main', {msg: 'message has been sent'});

});


 module.exports = router;