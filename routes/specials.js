var express = require('express');
var router = express.Router();

/* GET specials page. */
router.get('/', function(req, res) {
  res.render('specials', { title: 'Lola' });
});

module.exports = router;
