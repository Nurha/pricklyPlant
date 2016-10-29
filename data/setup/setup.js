var fs = require('fs');
var mysql = require('mysql');
exports.setup = function(){
var sconnection = mysql.createConnection({host: 'localhost', user: 'root',password: 'password123'});
var connection = mysql.createConnection({host: 'localhost', user: 'root',password: 'password123', database: `pricklyPlant`});

var setup = String(fs.readFileSync('./data/setup/sql/setup.sql'));
var products = String(fs.readFileSync('./data/setup/sql/products.sql'));
var customers= String(fs.readFileSync('./data/setup/sql/customers.sql'));
var purchases = String(fs.readFileSync('./data/setup/sql/purchases.sql'));
var sales = String(fs.readFileSync('./data/setup/sql/sales.sql'));
var slips = String(fs.readFileSync('./data/setup/sql/slips.sql'));
var specialOffers = String(fs.readFileSync('./data/setup/sql/specialOffers.sql'));
var suppliers = String(fs.readFileSync('./data/setup/sql/suppliers.sql'));
var users = String(fs.readFileSync('./data/setup/sql/user.sql'));

sconnection.query(setup);
connection.query(products);
connection.query(customers);
connection.query(purchases);
connection.query(sales);
connection.query(slips);
connection.query(specialOffers);
connection.query(suppliers)
connection.query(users);


};
