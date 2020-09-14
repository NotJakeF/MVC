const router = require('express').Router();
const UserName = require('../models/userName');
const bcrypt  = require('bcrypt');

router.post('/register',  (req, res) => {
    const userName = req.body.userName;
    console.log(userName);
    const passWord = req.body.pass;
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            if (err) {
                return res.status(500).json({message: err.message})
            }

            try {
                const record = await UserName.create({userName, hash})
                console.log(record);
                res.status(200).json({message: 'Everything A-okay'})
            } catch (err) {
                res.status(500).json({message: err.message})
            }

        });
    });
});


router.post('/login', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.pass;
    const results = await UserName.findAll({
        where: {
            userName: userName
        }

    });
    if (results.pass == passWord) {
        // need to redirect user to dashboard now
        res.render('dashboard', {
            userId: results.id,
            userName: results.userName
        })
    };
});

module.exports = router;