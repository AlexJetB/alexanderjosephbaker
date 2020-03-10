const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/w09', {title: "W09 Assignment"});
});

module.exports = router;
