const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/example', { title: 'Welcome to Week 10'});
});

router.post('/add', function (req, res, next) {
  //console.log(req.body.op1);
  const op1 = parseInt(req.body.op1);
  const op2 = parseInt(req.body.op2);

  const _result = op1 + op2;
  res.json({answer: _result});
});

router.post('/sub', function (req, res, next) {
  const op1 = parseInt(req.body.op1);
  const op2 = parseInt(req.body.op2);

  const _result = op1 - op2;
  res.json({answer: _result});
});

module.exports = router;
