var express = require('express');
var router = express.Router();
var base= process.env.PWD;
// var posts= require('../controllers/posts');
// var products= require('../controllers/products');
Gener = require('../models/product');
/* GET home page. */
router.get('/about-us', function(req, res, next) {
  res.render('index', { title: 'Express', data: 'sasdakfjskdfsdakf sdkfjaskfd fsdjafksjdf' });
});


router.get('/test', function(req, res, next) {
	Gener.find(function(err,data){
 		 res.render('products/index', {title:"Here is My Titkle",gener:data })
	})
});

router.get('/', function(req, res,next) {
    res.render('products/index',{ title: 'Express'});
});

module.exports = router;

