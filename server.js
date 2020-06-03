let express = require('express');
let cors = require('cors');
let port = process.env.PORT || 4001;
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let addMealRoutes = require('./api-routes/editFavoriteMeals');
let addDrinkRoutes = require('./api-routes/editFavoriteDrinks');
let findMealRoutes = require('./api-routes/findFavoriteMeals');
let findDrinkRoutes = require('./api-routes/findFavoriteDrinks');
let login = require('./api-routes/login');
let signUp = require('./api-routes/signUp');

app.use(cors());
app.use(bodyParser());

app.use('/', express.static('public'));
app.use('/editFavoriteMeals', addMealRoutes);
app.use('/editFavoriteDrinks', addDrinkRoutes);
app.use('/findFavoriteMeals', findMealRoutes);
app.use('/findFavoriteDrinks', findDrinkRoutes);
app.use('/login', login);
app.use('/signUp', signUp);

app.use((req, res, next) => {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})