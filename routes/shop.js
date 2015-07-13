var express = require('express');
var router = express.Router();

// original version:

/* GET shop page. */
// router.get('/', function(req, res) {
//   res.render('shop', { title: 'Lola' });
// });

/* GET shop page. with Database version */
router.get('/', function(req, res) {
    var db = req.db;
    var inventorylist = db.get('inventory');
    inventorylist.find({},{},function(e,docs){
        res.render('shop', {
            title: 'Lola',
            "shop" : docs
        });
    });
});

module.exports = router;


