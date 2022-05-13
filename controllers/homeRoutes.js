const router = require('express').Router();
const {User, Team, Subscribe} = require('../models');
const withAuth = require('../utils/auth');

// GET route to render the login
router.get('/', async (req, res) => {
    try {
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// GET route to find the user and user data, and posting the information found to the profile page 
router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: Subscribe}]
        })
        const user = userData.get({plain: true});
        console.log(user)

        res.render('profile', {
            ...user,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET route to find all teams, map team data, render on homepage
router.get('/team', withAuth, async (req, res) => {
    const teamData = await Team.findAll()
        const teams = teamData.map((team)=> team.get({plain: true}))
    res.render('team', {teams,
        logged_in: req.session.logged_in })
})

// GET route to render login if not logged in or profile if logged in
router.get('/login', (req, res) => {
    if (req.session.logged) {
        res.redirect('/team')
    }
    res.render('login')
})

// GET route for signup page
router.get('/signup', (req, res)=> {
    res.render('signup')
});

// FUTURE ROUTE FOR ABOUT PAGE
router.get('/about', async (req, res) => {
    try{     
        
         res.render('about')
    } catch(err) {
        res.status(500).json(err);
    }
    
})

module.exports = router;