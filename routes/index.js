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
    montevistateam: montaVistaTeam,
    valleychristianteam: valleyChristianTeam
  });
});

module.exports = router;
