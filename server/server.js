let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());
app.use('/', express.static('public'));

app.use('/bundle', express.static('public/bundle.ts'));
app.use('/styleSheet', express.static('public/styles.css'));

app.listen(3000, () => {
    console.log('listening');
})