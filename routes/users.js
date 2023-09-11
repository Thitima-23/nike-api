var express = require('express');
var router = express.Router();
const usersController = require('../controller/usersController');



/* GET users listing. */
router.get('/',usersController.index);
router.get('/hh',usersController.hh);
router.post('/',usersController.insert);
router.get('/:id',usersController.finduserByid);
router.put('/:id',usersController.updateUser);



module.exports = router;
