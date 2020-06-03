let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let user = req.body.name;
    db.showFavoritedDrinks(user, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.send(response);
        }
    })
})

module.exports = router;