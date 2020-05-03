let express = require('express');
let cors = require('cors');
let app = express();
let port = process.env.PORT || 3000;

app.use(cors());
app.use('/', express.static('public'));

app.use('/bundle', express.static('public/bundle.ts'));
app.use('/styleSheet', express.static('public/styles.css'));

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})