let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let credentials = req.body;
    db.signUpAttempt(credentials, (error, response) => {
        if (error) {
            throw error;
        } else {
            if (response === 'Username already exists') {
                res.send('Username already exists');
            } else {
                res.send('Signup successful');
            }
        }
    });
})

module.exports = router;