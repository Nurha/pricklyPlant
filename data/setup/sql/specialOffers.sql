CREATE TABLE IF NOT EXISTS `specialOffers`(
  `item_id` int NOT NULL auto_increment,
  `item_name` char(100),
  `product_id` int NOT NULL,
  PRIMARY KEY(`item_id`)
  -- FOREIGN KEY (`product_id`)
);
