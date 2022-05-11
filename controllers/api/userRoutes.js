router = require('express').Router();
const router = require('.');
const {User} = require('../../models');

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