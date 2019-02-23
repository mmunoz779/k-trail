var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('home.html');
});

router.use('/character', function (req, res, next) {
    res.render('characterSelect.html');
});

router.use('/*', function (req, res) {
    res.status(404);
    res.send();
});

module.exports = router;