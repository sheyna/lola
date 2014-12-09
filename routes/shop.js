var express = require('express');
var router = express.Router();

/* GET shop page. */
router.get('/', function(req, res) {
  res.render('shop', { title: 'Lola' });
});

module.exports = router;
