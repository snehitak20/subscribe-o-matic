const router = require('express').Router();
// const {User, Team, Subscribe} = require('../models');
const withAuth = require('../utils/auth');

//render login 
router.get('/', async (req, res) => {
    try {
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//render a teams stats
//router.get('/team/:id', async (req, res)=> {
// find team data by id
//query api
//})

router.get('/profile', withAuth, async (req, res) => {
    try{
        //find user data by id
        //include subscriptions
        //??query clientside api?
        res.render('profile')
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/team', async (req, res) => {
//find all teams, map team data, render on homepage
//const teamData = await Team.findAll
//const teams = teamData.map((team) => team.get({plain:true}));
//render should take in ,{teams, logged_in: req.session.logged_in}
 res.render('team')
})

//render login if not logged in or profile if logged in
router.get('/login', (req, res) => {
    if (req.session.logged) {
        res.redirect('/team')
    }
    res.render('login')
})

router.get('/signup', (req, res)=> {
    res.render('signup')
});

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;