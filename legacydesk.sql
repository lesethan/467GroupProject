-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 07:24 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csci467`
--

-- --------------------------------------------------------

--
-- Table structure for table `legacydesk`
--

CREATE TABLE `legacydesk` (
  `Part_ID` int(11) NOT NULL,
  `Desk_ID` int(11) NOT NULL,
  `Quantity` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `legacydesk`
--
ALTER TABLE `legacydesk`
  ADD PRIMARY KEY (`Part_ID`,`Desk_ID`),
  ADD KEY `Desk_ID` (`Desk_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `legacydesk`
--
ALTER TABLE `legacydesk`
  ADD CONSTRAINT `legacydesk_ibfk_1` FOREIGN KEY (`Part_ID`) REFERENCES `legacydatabase` (`Part_ID`),
  ADD CONSTRAINT `legacydesk_ibfk_2` FOREIGN KEY (`Desk_ID`) REFERENCES `desk` (`Desk_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;