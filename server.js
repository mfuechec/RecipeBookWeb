let express = require('express');
let cors = require('cors');
let port = process.env.PORT || 4001;
let app = express();

app.use(cors());

app.use('/', express.static('public'));
app.use('/bundle', express.static('public/bundle'));
app.use('/styleSheet', express.static('public/styles'));

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})