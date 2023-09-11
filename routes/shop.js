const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');

/* GET users listing. */
router.get('/',shopController.index);
router.get('/menu',shopController.getmenuAll);
router.get('/:id',shopController.shopwithMenu);


// router.get('/kat',shopController.kat );

module.exports = router;
