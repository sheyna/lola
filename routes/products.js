var express = require('express');
var router = express.Router();

// original version:

/* GET products page. */
// router.get('/', function(req, res) {
//   res.render('products', { title: 'Lola' });
// });

/* GET products page. with Database version */
router.get('/', function(req, res) {
  var db = req.db;
  var inventorylist = db.get('inventory');
  inventorylist.find({},{},function(e,docs){
    res.render('products', {
      title: 'Lola',
      "products" : docs
    });
  });
});

module.exports = router;


