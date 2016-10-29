CREATE TABLE IF NOT EXISTS `suppliers`(
  `supplier_id` int NOT NULL auto_increment,
  `supplier_name` char(100),
  `supplier_address` char(100),
  `supplier_number` int(10),
  PRIMARY KEY(`supplier_id`)
);
