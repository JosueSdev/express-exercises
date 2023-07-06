var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cAbout', { title: '/About page' });
});

module.exports = router;
