const router = require('express').Router();
const {User} = require('../../models');

// POST route for creating a new user 
router.post('/', async (req, res)=> {
    try{
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

// POST route for login--> calling on previous inputted info
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: { name: req.body.name}});

        if(!userData) {
            res.status(400).json({message: 'Incorrect username'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: 'Incorrect password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user:userData, message: 'Login Successful'})
        });
    } catch(err) {
        res.status(400).json(err);
    }
} )
// POST route to destroy the session (LOGOUT)
router.post('/logout', (req, res)=> {
    if(req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end(); 
        });
    } else {
        res.status(404).end(); 
    }
})

module.exports = router;