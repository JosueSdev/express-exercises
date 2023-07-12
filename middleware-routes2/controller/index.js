const express = require('express');
const path = require('node:path');

const router = express.Router();

router.get('/home', function(_req, res) {
  res.sendFile(path.join(process.cwd(), 'view/home.html'));
});

router.route('/login')
  .get(function(_req, res) {
    res.sendFile(path.join(process.cwd(), 'view/login.html'));
  })
  .post(function(req, res) {
    const loginId = req.body.loginId;

    if (loginId) {
      req.session.loginId = loginId;
      res.redirect('/menu');
    } else {
      res.sendStatus(400);
    }
  });

router.get('/menu', function(req, res) {
  if (req.session.loginId) {
    res.sendFile(path.join(process.cwd(), 'view/menu.html'));
  } else {
    res.redirect('/login');
  }
});

router.post('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
