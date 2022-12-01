var express = require('express');
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
var router = express.Router();
var house_controller = require('../controllers/house'); 

/* GET home page. */
router.get('/', house_controller.house_view_all_Page);

/* GET detail house page */ 
router.get('/detail',secured,house_controller.house_view_one_Page); 

/* GET create house page */ 
router.get('/create', house_controller.house_create_Page); 

/* GET create update page */ 
router.get('/update',secured, house_controller.house_update_Page); 

/* GET delete house page */ 
router.get('/delete',secured, house_controller.house_delete_Page); 
 
 

module.exports = router;
