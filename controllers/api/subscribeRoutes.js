const router = require('express').Router();
const { Subscribe, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newSubscribe = await Subscribe.create({
            user_id: req.session.user_id,
            //team_id: req.body.team_id,   
        });
        //console.log(req.session.user_id)
        //console.log(req.body.teamName)
        //console.log(req.body.team_id)
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']}
        })
        const user = userData.get({plain: true});
        
        console.log(user.email)
        console.log(user)
        res.status(200).json(newSubscribe);
    } catch (err) {
        res.status(400).json(err); 
    }
});

module.exports = router; 