CREATE TABLE IF NOT EXISTS `customers`(
  `customer_id` int NOT NULL auto_increment,
  `customer_name` varchar(100),
  `customer_number` int(10),
  `customer_email` varchar(100),
  `customer_address` varchar(100),
  PRIMARY KEY(`customer_id`)
);
