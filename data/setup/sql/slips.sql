CREATE TABLE IF NOT EXISTS `slips` (
  `slip_id` int NOT NULL auto_increment,
  `slip_date` DATE NOT NULL,
  `slip_type` char(100) NOT NULL,
  PRIMARY KEY(`slip_id`)
);
