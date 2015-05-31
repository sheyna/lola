var express = require('express');
var router = express.Router();

/* GET shop page. */
router.get('/', function(req, res) {
  res.render('product', {
    title: 'Lola',
    imageURL: '../images/shop/dress1.jpg',
    itemClass: 'dresses',
    itemTitle: 'Racing with the Clock',
    itemID: 'fwtclock',
    itemPrice: 28.99,
    special: 0,
    discount: 0
  });
});

module.exports = router;
