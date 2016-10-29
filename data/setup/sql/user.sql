CREATE TABLE IF NOT EXISTS `users`(
  `user_id` int NOT NULL auto_increment,
  `username` varchar(100),
  `password` varchar(100),
  `admin` int,
  `picture` text,
  PRIMARY KEY(`user_id`)
);
