-- Create Locify Database and Tables (No Dummy Data)

DROP DATABASE IF EXISTS locify;
CREATE DATABASE locify;
USE locify;

-- Table: register
CREATE TABLE `register` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `contact` BIGINT(10) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `profile_password` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table: website
CREATE TABLE `website` (
  `web_id` INT(11) NOT NULL AUTO_INCREMENT,
  `web_name` VARCHAR(100) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `reg_id` INT(11) NOT NULL,
  PRIMARY KEY (`web_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
