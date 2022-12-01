var express = require('express'); 
var passport = require('passport'); 
var router = express.Router(); 
var Account = require('../models/account'); 
 
router.get('/', function (req, res) { 
    res.render('index', { title: 'house App', user : req.user }); 
}); 
 
router.get('/register', function(req, res) { 
    res.render('register', { title: 'house App Registration'}); 
}); 
 
router.post('/register', function(req, res) { 
  Account.findOne({ username : req.body.username },  
    function(err, user) { 
      if(err) { 
        return res.render('register', { title: 'Registration',  
                  message: 'Registration error', account : req.body.username }) 
      } 
      if(user == {} ){ 
        return res.render('register', { title: 'Registration',  
                   message: 'Existing User', account : req.body.username }) 
      } 
      let newAccount = new Account({ username : req.body.username }); 
      Account.register(newAccount, req.body.password, function(err, user){ 
        if (err) { 
          return res.render('register', { title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        } 
        if(!user){ 
          return res.render('register',{ title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        }  
        console.log('Sucess, redirect'); 
        res.redirect('/'); 
      }) 
    })    
  }) 
  
router.get('/login', function(req, res) { 
    res.render('login', { title: 'house App Login', user : req.user }); 
}); 
 
router.post('/login', passport.authenticate('local'), function(req, res) { 
    res.redirect('/'); 
}); 
 
router.get('/logout', function(req, res) { 
    req.logout(); 
    res.redirect('/'); 
}); 
 
router.get('/ping', function(req, res){ 
    res.status(200).send("pong!"); 
}); 
 
module.exports = router; 