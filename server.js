const express = require('express');
const app = express();
require('dotenv').config();
require('./services');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./routes')(app);


app.use(function (req, res, next) {
    res.status(404).send('Resource not found');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running');
})