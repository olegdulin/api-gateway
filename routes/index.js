var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  var gatewayRequest={
    headers: req.headers,
    path: req.url, //TODO Take the substring
    method: req.method,
    query: req.query
  }
  console.log(gatewayRequest);
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req));
  res.render('index', { title: 'Express' });
});

router.put('/', function(req, res, next) {
  console.log(JSON.stringify(req));
  res.render('index', { title: 'Express' });
});

router.delete('/', function(req, res, next) {
  console.log(JSON.stringify(req));
  res.render('index', { title: 'Express' });
});

module.exports = router;
