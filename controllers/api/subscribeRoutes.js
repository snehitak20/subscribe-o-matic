const router = require('express').Router();
const { Subscribe, User } = require('../../models');
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer');

router.post('/', withAuth, async (req, res) => {
    try {
        const newSubscribe = await Subscribe.create({
            user_id: req.session.user_id,  
            //team_name: req.body.team_name 
            team_id: req.body.team_id
        });
        
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        })
        const user = userData.get({plain: true});
       
        console.log(user)
        async function main() {
            // let testAccount = await nodemailer.createTestAccount();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'subscribeomaticmailer@gmail.com',
                    pass: 'Password1234!'
                }
            });
            let info = await transporter.sendMail({
                from: '"Subscribe-O-Matic" <subscribeomaticmailer@gmail.com>',
                to: user.email,
                subject: "You are Subscribed!",
                text: "Subscriptions via nodemailer",
                html: "<b>You are subscribed!</b>",
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } main().catch(console.error);
        
        res.status(200).json(newSubscribe);
    } catch (err) {
        res.status(400).json(err); 
    }
});

module.exports = router; 