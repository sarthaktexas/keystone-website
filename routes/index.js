var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Keystone Mentorship'
  });
});

/* GET rise page. */
router.get('/rise', function (req, res, next) {
  res.render('rise', {
    title: 'Keystone Mentorship - Rise'
  });
});

/* GET meet-the-team page. */
router.get('/meet-the-team', function (req, res, next) {
  const coreTeam = require('../public/json/core-team.json')
  const cupertinoTeam = require('../public/json/cupertino-team.json')
  const evergreenValleyTeam = require('../public/json/evergreen-valley-team.json')
  const leighTeam = require('../public/json/leigh-team.json')
  const lynbrookTeam = require('../public/json/lynbrook-team.json')
  const montaVistaTeam = require('../public/json/monta-vista-team.json')
  const valleyChristianTeam = require('../public/json/valley-christian-team.json')
  res.render('meet-the-team', {
    title: 'Keystone Mentorship - Meet the Team',
    coreteam: coreTeam,
    cupertinoteam: cupertinoTeam,
    evergreenvalleyteam: evergreenValleyTeam,
    leighteam: leighTeam,
    lynbrookteam:  lynbrookTeam,
    montavistateam: montaVistaTeam,
    valleychristianteam: valleyChristianTeam
  });
});

/* GET find-a-mentor page. */
router.get('/find-a-mentor', function (req, res, next) {
  res.render('find-a-mentor', {
    title: 'Keystone Mentorship - Find A Mentor'
  });
});

/* GET mentors page. */
router.get('/mentors', function (req, res, next) {
  res.render('mentors', {
    title: 'Keystone Mentorship - Mentors'
  });
});


/* GET our-badges page. */
router.get('/our-badges', function (req, res, next) {
  res.render('our-badges', {
    title: 'Keystone Mentorship - Our Badges'
  });
});

/* GET about-us page. */
router.get('/about-us', function (req, res, next) {
  res.render('about-us', {
    title: 'Keystone Mentorship - About Us'
  });
});

/* GET faqs page. */
router.get('/faqs', function (req, res, next) {
  res.render('faqs', {
    title: 'Keystone Mentorship - Frequently Asked Questions'
  });
});

/* GET policies page. */
router.get('/policies', function (req, res, next) {
  res.render('policies', {
    title: 'Keystone Mentorship - Policies'
  });
});

/* GET our-badges page. */
router.get('/special-thanks', function (req, res, next) {
  res.render('special-thanks', {
    title: 'Keystone Mentorship - Special Thanks'
  });
});

module.exports = router;
