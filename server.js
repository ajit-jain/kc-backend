const express = require('express');
const app = express();
require('dotenv').config();
require('./services');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({
    'origin': req.headers['origin'] || '*',
    // 'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE,PATCH',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, X-HTTP-Method-Override,Content-Type,Accept,Content-Encoding,Authorization',
    // 'Access-Control-Max-Age': '86400',
    // 'Access-Control-Allow-Credentials':true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./routes')(app);


app.use(function (req, res, next) {
    res.status(404).send('Resource not found');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running');
})