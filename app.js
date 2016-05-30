'use strict';

var express = require('express'),
    exphbs = require('express-handlebars'),
    // mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// app.use(myConnection(mysql, 'single'));

app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err});
}

app.get('/', function(req, res) {
  res.send('A man who knows meditation never dies!');
});

app.use(errorHandler);

var portNumber = process.env.CRUD_PORT_NR || 5000;

app.listen(portNumber, function() {
  console.log('listening on:', portNumber);
});
