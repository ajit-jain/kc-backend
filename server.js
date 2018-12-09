const express = require('express');
const app = express();
require('dotenv').config();
require('./services');
const bodyParser = require('body-parser');
const cors = require('cors');

const allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./routes')(app);


app.use(function (req, res, next) {
    res.status(404).send('Resource not found');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running');
})