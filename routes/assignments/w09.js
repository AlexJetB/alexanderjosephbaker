var express = require('express');
var router = express.Router();

/* Get page for postal prices, week09 Prove */
router.get('/', function(req, res, next) {
  res.render('pages/postRouter', { title: 'Postal Price Calculator' });
});

router.post('/postConfirm', function(req, res, next) {
  postConfirm(req, res);
});

function postConfirm(req, res) {
  const weight = req.body.mailWeight;
  const mail = req.body.mailType;

  console.log("Information get!");
  /*Calculate the rate according to USPS*/
  calculateRate(res, mail, weight);
}

function calculateRate(res, mail, weight) {
  let price = 0.00;

  try {
    switch(mail) {
      case 'lStamped':
        if (weight <= 3.0) {
          price = 0.55 + 0.15 * (Math.ceil(weight) - 1);
        } else if (weight > 3.0 && weight <= 3.5) {
          price = 1.00;
        } else throw "Stamped letter weight cannot weigh more than 3.5oz"
        break;
      case 'lMetered':
        if (weight <= 3) {
          price = 0.50 + 0.15 * (Math.ceil(weight) - 1);
        } else if (weight <= 3.5) {
          price = 0.95;
        } else throw "Metered letter weight cannot weigh more than 3.5oz"
        break;
      case 'largeEnv':
        if (weight <= 13.0) {
          price = 1.00 + 0.15 * (Math.ceil(weight) - 1);
        } else throw "Large envelope weight cannot weigh more than 13.0oz"
        break;
      case 'fCPackSR':
        if (weight > 0 && weight <= 5.0) {
          price = 3.66;
        } else if (weight > 5.0 && weight <= 9.0) {
          price = 4.39;
        } else if (weight > 9.0 && weight <= 12.0) {
          price = 5.19;
        } else if (weight > 12.0 && weight <= 13.0) {
          price = 5.71;
        } else throw "First-Class Packages cannot weigh more than 13.0oz"
        break;
      default:
        throw "Non-existent package type";
    }
    var termMap = {
      "lStamped": "Stamped letter",
      "lMetered": "Metered letter",
      "largeEnv": "Large envelope"
    };

    price = price.toFixed(2);
    mail = termMap[mail];
    res.render('pages/postConfirm', {mailWeight: weight,
      mailType: mail, price: price});
    res.end();
  } catch(err) {
    console.log(err);
    res.end();
  }
}

module.exports = router;
