CREATE TABLE IF NOT EXISTS `sales`(
  `sales_id` int NOT NULL auto_increment,
  `product_name` varchar(100),
  `slip_id` int,
  `product_price` int,
  -- FOREIGN KEY(`product_price`) REFERENCES products(`product_price`),
  -- FOREIGN KEY(`product_name`) REFERENCES products(`product_name`),
  PRIMARY KEY(`sales_id`)
);
