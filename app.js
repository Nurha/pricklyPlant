'use strict';

var express = require('express'),
    exphbs = require('express-handlebars'),
    mysql = require('mysql'),
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

app.get('/saleItems', function(req, res) {
  res.render('saleItems');
});

app.get('/suppliers', function(req, res) {
  res.render('suppliers');
});

app.get('/purchases', function(req, res) {
  res.render('purchases');
});

app.get('/sales', function(req, res) {
  res.render('sales');
});

app.get('/users', function(req, res) {
  res.render('users');
});
app.get('/login', function(req, res){
res.render('login');
});
app.get('/signup', function(req, res){
  res.render('signup');
})
app.use(errorHandler);

var portNumber = process.env.CRUD_PORT_NR || 5000;

app.listen(portNumber, function() {
  console.log('listening on:', portNumber);
});
