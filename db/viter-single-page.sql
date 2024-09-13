-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2024 at 10:05 AM
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
-- Database: `viter-single-page`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_header`
--

CREATE TABLE `tbl_header` (
  `header_aid` int(11) NOT NULL,
  `header_logo_img` varchar(100) NOT NULL,
  `header_banner_img` varchar(100) NOT NULL,
  `header_nav_a` varchar(20) NOT NULL,
  `header_nav_b` varchar(20) NOT NULL,
  `header_nav_c` varchar(20) NOT NULL,
  `header_nav_d` varchar(20) NOT NULL,
  `header_banner_text` varchar(50) NOT NULL,
  `header_button_text` varchar(20) NOT NULL,
  `header_created` datetime NOT NULL,
  `header_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_header`
--

INSERT INTO `tbl_header` (`header_aid`, `header_logo_img`, `header_banner_img`, `header_nav_a`, `header_nav_b`, `header_nav_c`, `header_nav_d`, `header_banner_text`, `header_button_text`, `header_created`, `header_datetime`) VALUES
(2, 'pedalLogo.png', 'Rectangle.webp', 'Home', 'About', 'Services', 'Testimonials', 'Lorem, ipsum dolor sit amet', 'Talk to Us', '2024-09-12 03:47:58', '2024-09-12 03:47:58');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `services_aid` int(11) NOT NULL,
  `services_title` varchar(50) NOT NULL,
  `services_subtitle` varchar(50) NOT NULL,
  `services_product_a` varchar(50) NOT NULL,
  `services_product_b` varchar(50) NOT NULL,
  `services_product_c` varchar(50) NOT NULL,
  `services_description_a` varchar(100) NOT NULL,
  `services_description_b` varchar(100) NOT NULL,
  `services_description_c` varchar(100) NOT NULL,
  `services_button_text_a` varchar(20) NOT NULL,
  `services_button_text_b` varchar(20) NOT NULL,
  `services_button_text_c` varchar(20) NOT NULL,
  `services_img_a` varchar(100) NOT NULL,
  `services_img_b` varchar(100) NOT NULL,
  `services_img_c` varchar(100) NOT NULL,
  `services_created` datetime NOT NULL,
  `services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`services_aid`, `services_title`, `services_subtitle`, `services_product_a`, `services_product_b`, `services_product_c`, `services_description_a`, `services_description_b`, `services_description_c`, `services_button_text_a`, `services_button_text_b`, `services_button_text_c`, `services_img_a`, `services_img_b`, `services_img_c`, `services_created`, `services_datetime`) VALUES
(1, '', '', 'dfdfd', '', '', 'dfdf', '', '', 'dfdf', '', '', 'pngwing.com (1) 1.png', 'feedback1.png', '', '2024-09-13 03:30:35', '2024-09-13 03:30:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_header`
--
ALTER TABLE `tbl_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_header`
--
ALTER TABLE `tbl_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
