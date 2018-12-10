const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
var app = express();

const middleware = require('./middleware/middleware');
const routes = require('./routes/index');

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    middleware.setBaseUrl(req, res, next);
});

app.use('/', routes);

app.listen(4000, () => {
    console.log('server is ruuning at 4000 PORT');
});

