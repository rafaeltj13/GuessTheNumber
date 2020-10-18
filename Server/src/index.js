
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const routers = require('./index.routers');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(morgan('tiny'));
app.use('/api', routers);

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Guess The Number! Api listening on port ${port}!`);
});