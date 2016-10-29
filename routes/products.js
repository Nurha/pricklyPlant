var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root',password: 'password123', database: `pricklyPlant`});
exports.showProducts = function(req,res){
var data = [];
connection.query('SELECT * FROM `products`', function(err, result){
for(var x = 0; x < result.length; x ++){
  data.push({name: result[x].product_name,
            description: result[x].product_description,
            price: result[x].product_price});
}




res.render('products', data);
})

}
