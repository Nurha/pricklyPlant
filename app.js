'use strict';

var express = require('express'),
    exphbs = require('express-handlebars'),
    // mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var app = express();
//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
//setup middleware
//app.use(myConnection(mysql, dbOptions, 'single'));
//parse application/x-www-form-urlcoded
// app.use(bodyParser.urlcoded({extended: false}));
//parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err});
}

//setup the handlebars
app.get('/', function(req, res) {
  res.render('home');
});

app.get('/products', function(req, res) {
  res.render('products');
});

app.get('/suppliers', function(req, res) {
  res.render('suppliers');
});

app.use(errorHandler);

var portNumber = process.env.CRUD_PORT_NR || 5000;

app.listen(portNumber, function() {
  console.log('listening on:', portNumber);
});
