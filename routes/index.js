var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('home.html');
});

router.use('/difficulty', function (req, res, next) {
    res.render('difficultySelect.html');
});

router.use('/party', function (req, res, next) {
    res.render('nameParty.html');
});

router.use('/*', function (req, res) {
    res.status(404);
    res.send();
});

module.exports = router;