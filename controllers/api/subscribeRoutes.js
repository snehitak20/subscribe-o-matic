const router = require('express').Router();
const { Subscribe } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newSubscribe = await Subscribe.create({
            ...req.body,
            user_id: req.session.user_id,
            team_id: req.session.team_id,
        });
        
        res.status(200).json(newSubscribe);
    } catch (err) {
        res.status(400).json(err); 
    }
});

module.exports = router; 