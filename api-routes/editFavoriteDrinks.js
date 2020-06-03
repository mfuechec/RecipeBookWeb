let express = require('express');
let router = express.Router();
let db = require('../db/index');

router.post('/', (req, res, next) => {
    let meal = req.body;
    db.addFavoritedDrink(meal, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.statusMessage = 'Added to favorites';
            res.status(201).end();
        }
    });
})

router.delete('/', (req, res, next) => {
    let meal = req.body;
    db.deleteFavoritedDrink(meal, (error, response) => {
        if (error) {
            throw error;
        } else {
            res.status(201).json({
                message: 'Handled DELETE request to /editFavoriteDrinks',
                response: response
            })
        }
    })
})

module.exports = router;