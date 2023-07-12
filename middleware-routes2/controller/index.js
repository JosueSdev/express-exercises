const express = require('express');
const path = require('node:path');

const router = express.Router();

router.get('/home', function(_req, res) {
  res.sendFile(path.join(process.cwd(), 'view/home.html'));
});

router.route('/login')
  .get(function(_req, res) {
    res.sendFile(path.join(process.cwd(), 'view/login.html'));
  });

router.get('/menu', function(_req, res) {
  res.sendFile(path.join(process.cwd(), 'view/menu.html'));
});

router.post('/logout', function (_req, res) {
  res.sendStatus(200);
});

module.exports = router;
