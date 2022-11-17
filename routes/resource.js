var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var house_controller = require('../controllers/house'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/house', house_controller.house_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/house/:id', house_controller.house_delete); 
 
// PUT request to update Costume. 
router.put('/house/:id', house_controller.house_update_put); 
 
// GET request for one Costume. 
//router.get('/house/:id', house_controller.house_detail); 
 
// GET request for list of all Costume items. 
router.get('/house', house_controller.house_list); 
 
module.exports = router; 