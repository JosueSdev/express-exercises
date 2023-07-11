const express = require('express');
const router = express.Router();

router.get('/home', function(_req, res) {
  res.send('Welcome.');
});

module.exports = router;
