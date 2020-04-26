var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  const username = req.body.username;
  let loginResult = login(username, req.body.password);

  if (loginResult) {
    res.render('home', { username: username });
  } else {
    res.render('index', { error: true });
  }
});
module.exports = router;
