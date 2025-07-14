-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2025 at 03:25 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locify`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact` bigint(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `profile_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`user_id`, `name`, `email`, `contact`, `password`, `profile_password`) VALUES
(22, 'user1', 'user1@gmail.com', 1111111111, 'user1', 'user1@'),
(23, 'user2', 'user2@gmail.com', 2222222222, 'user2', 'user2@'),
(24, 'user3', 'user3@gmail.com', 3333333333, 'user3', 'user3@'),
(25, 'user4', 'user4@gmail.com', 4444444444, 'user4', 'user4@'),
(26, 'user5', 'user5@gmail.com', 5555555555, 'user5', 'user5@'),
(27, 'user6', 'user6@gmail.com', 6666666666, 'user6', 'user6@'),
(28, 'user7', 'user7@gmail.com', 7777777777, 'user7', 'user7@'),
(29, 'user8', 'user8@gmail.com', 8888888888, 'user8', 'user8@'),
(30, 'user9', 'user9@gmail.com', 9999999999, 'user9', 'user9@'),
(31, 'user10', 'user10@gmail.com', 1010101010, 'user10', 'user10@'),
(32, 'user11', 'user11@gmail.com', 1234567890, 'user11', 'user11@'),
(33, 'cool', 'vansh123@gmail.com', 9265259222, '1234', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `website`
--

CREATE TABLE `website` (
  `web_id` int(11) NOT NULL,
  `web_name` varchar(100) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `reg_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `website`
--

INSERT INTO `website` (`web_id`, `web_name`, `username`, `password`, `reg_id`) VALUES
(23, 'Facebook', 'user1_fb', 'fb123', 22),
(24, 'Instagram', 'user1_ig', 'ig123', 22),
(25, 'Twitter', 'user1_tw', 'tw123', 22),
(26, 'Gmail', 'user1_gm', 'gm123', 22),
(27, 'Facebook', 'user2_fb', 'fb123', 23),
(28, 'Instagram', 'user2_ig', 'ig123', 23),
(29, 'Twitter', 'user2_tw', 'tw123', 23),
(30, 'Gmail', 'user2_gm', 'gm123', 23),
(31, 'Facebook', 'user3_fb', 'fb123', 24),
(32, 'Instagram', 'user3_ig', 'ig123', 24),
(33, 'Twitter', 'user3_tw', 'tw123', 24),
(34, 'Gmail', 'user3_gm', 'gm123', 24),
(35, 'Facebook', 'user4_fb', 'fb123', 25),
(36, 'Instagram', 'user4_ig', 'ig123', 25),
(37, 'Twitter', 'user4_tw', 'tw123', 25),
(38, 'Gmail', 'user4_gm', 'gm123', 25),
(39, 'Facebook', 'user5_fb', 'fb123', 26),
(40, 'Instagram', 'user5_ig', 'ig123', 26),
(41, 'Twitter', 'user5_tw', 'tw123', 26),
(42, 'Gmail', 'user5_gm', 'gm123', 26),
(43, 'instragram.com', 'vansh123@gmail.com', '12345', 33);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `website`
--
ALTER TABLE `website`
  ADD PRIMARY KEY (`web_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `website`
--
ALTER TABLE `website`
  MODIFY `web_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
