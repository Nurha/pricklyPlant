CREATE TABLE IF NOT EXISTS `products`(
  `product_id` int NOT NULL auto_increment,
  `product_name` char(100),
  `product_price` int,
  `img` text,
  PRIMARY KEY(product_id)
);
