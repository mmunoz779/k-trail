var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    if (!req.session.state) {
        fs.readFile('../client/JSON/state.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                req.session.state = data;
            }
        });
    }
    res.render('home.html');
});

router.use('/difficulty', function (req, res, next) {
    res.render('difficultySelect.html');
});

router.use('/createparty', function (req, res, next) {
    res.render('createParty.html');
});

router.use('/purchasing', function (req, res, next) {
    res.render('purchasing.html');
});

router.use('/introduction', function (req, res, next) {
   res.render('storyIntroduction.html');
});

router.use('/viewparty', function (req, res, next) {
    res.render('viewParty.html');
})

router.use('/shop', function (req, res, next) {
    res.render('shop.html');
});
router.get('/DayAnimation', function (req, res, next) {
    res.render('DayAnimation.html');
});
router.get('/Inventory', function (req, res, next) {
    res.render('Inventory.html');
});
router.get('/DayPrompt', function (req, res, next) {
    res.render('DayPrompt.html');
});
router.get('/DayPromptTown', function (req, res, next) {
    res.render('DayPromptTown.html');
});
router.use('/*', function (req, res) {
    res.status(404);
    res.send();
});

module.exports = router;