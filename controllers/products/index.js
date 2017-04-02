const Product = require('../../models/product');


// var getProduct = function(req, res) {
//   Product.find((err, products)){
//      res.render('products/index', { title: 'Express',products:'products'});
//   }
// }

var getProduct = function(req, res) {
 Product.find((err, geners) => {
    if(err) { res.send(500, err); }
    if(post) {
       res.render('products/index', { title: 'Express',products:'geners'});
    }
  });
};

module.exports={
	getProduct
}

