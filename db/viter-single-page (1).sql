-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2024 at 09:51 AM
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
-- Table structure for table `tbl_about`
--

CREATE TABLE `tbl_about` (
  `about_aid` int(11) NOT NULL,
  `about_img_a` varchar(50) NOT NULL,
  `about_img_b` varchar(50) NOT NULL,
  `about_title_a` varchar(100) NOT NULL,
  `about_title_b` varchar(100) NOT NULL,
  `about_description_a` varchar(500) NOT NULL,
  `about_description_b` varchar(800) NOT NULL,
  `about_content_title_a` varchar(50) NOT NULL,
  `about_content_title_b` varchar(50) NOT NULL,
  `about_content_title_c` varchar(50) NOT NULL,
  `about_content_description_a` varchar(500) NOT NULL,
  `about_content_description_b` varchar(500) NOT NULL,
  `about_content_description_c` varchar(500) NOT NULL,
  `about_contact_text` varchar(20) NOT NULL,
  `about_contact_number` varchar(20) NOT NULL,
  `about_created` datetime NOT NULL,
  `about_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`about_aid`, `about_img_a`, `about_img_b`, `about_title_a`, `about_title_b`, `about_description_a`, `about_description_b`, `about_content_title_a`, `about_content_title_b`, `about_content_title_c`, `about_content_description_a`, `about_content_description_b`, `about_content_description_c`, `about_contact_text`, `about_contact_number`, `about_created`, `about_datetime`) VALUES
(2, 'biking.webp', 'pedal.webp', 'Discover the Beauty of Nature on Two Wheels', 'About Pedal', 'Biking refers to the activity of riding a bicycle, which is a pedal-driven, two-wheeled vehicle. It\'s a popular form of transportation, recreation, and exercise that involves using leg power to propel the bike forward. Biking can be done on various types of terrain, including roads, trails, and off-road paths, and it offers numerous physical and mental health benefits, as well as environmental advantages.', 'Our bike shop is a family-owned business dedicated to promoting sustainable transportation and fostering a love for cycling in our community. We offer a wide range of high-quality bikes, accessories, and gear to cater to riders of all levels – from beginners to seasoned enthusiasts. Our knowledgeable staff is always ready to assist you in finding the perfect bike, ensuring a comfortable and enjoyable riding experience. Additionally, we provide professional bike servicing and maintenance to keep your ride running smoothly. Join us in our mission to create a greener, healthier world through the joy of cycling!', 'Improved Health', 'Const-Effective Transportation', 'Environmental Benefits', 'Cycling is an excellent low-impact exercise that can help improve cardiovascular fitness, increase muscle strength, and boost overall endurance. It\'s also great for maintaining a healthy weight.', 'Biking is an affordable way to get around, especially compared to driving a car. It also helps save money on parking fees, fuel costs, and vehicle maintenance.', 'Cycling is an eco-friendly mode of transportation that doesn\'t produce air pollution or noise pollution. By choosing to ride a bike instead of drive, you can reduce your carbon footprint and contribute to a cleaner environment.', 'Our Direct Line:', '+63 987 654 3210', '2024-09-24 02:43:49', '2024-09-24 02:43:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_colors`
--

CREATE TABLE `tbl_colors` (
  `colors_aid` int(11) NOT NULL,
  `colors_primary` varchar(50) NOT NULL,
  `colors_secondary` varchar(50) NOT NULL,
  `colors_accent` varchar(50) NOT NULL,
  `colors_text` varchar(50) NOT NULL,
  `colors_hover` varchar(50) NOT NULL,
  `colors_created` datetime NOT NULL,
  `colors_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_colors`
--

INSERT INTO `tbl_colors` (`colors_aid`, `colors_primary`, `colors_secondary`, `colors_accent`, `colors_text`, `colors_hover`, `colors_created`, `colors_datetime`) VALUES
(1, '#ffffff', '#ffffe7', '#c7ac27', '#000000', '#bba01a', '2024-10-03 07:35:21', '2024-10-03 07:35:21');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact_banner`
--

CREATE TABLE `tbl_contact_banner` (
  `contact_banner_aid` int(11) NOT NULL,
  `contact_banner_img` varchar(100) NOT NULL,
  `contact_banner_title` varchar(50) NOT NULL,
  `contact_banner_button_text` varchar(20) NOT NULL,
  `contact_banner_created` datetime NOT NULL,
  `contact_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_contact_banner`
--

INSERT INTO `tbl_contact_banner` (`contact_banner_aid`, `contact_banner_img`, `contact_banner_title`, `contact_banner_button_text`, `contact_banner_created`, `contact_banner_datetime`) VALUES
(1, 'Rectangle.webp', 'Unleash Your Adventurous Spirit:  Ride a Bike and ', 'Join Our Community', '2024-09-24 09:13:00', '2024-09-24 09:13:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_footer`
--

CREATE TABLE `tbl_footer` (
  `footer_aid` int(11) NOT NULL,
  `footer_copyright` varchar(100) NOT NULL,
  `footer_created` datetime NOT NULL,
  `footer_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_footer`
--

INSERT INTO `tbl_footer` (`footer_aid`, `footer_copyright`, `footer_created`, `footer_datetime`) VALUES
(1, 'pedal2024', '2024-10-03 03:26:27', '2024-10-03 03:26:27');

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
(2, 'pedalLogo.png', 'Rectangle.webp', 'Home', 'Services', 'About', 'Testimonials', 'The largest community of Bike enthusiasts', 'Talk to Us', '2024-09-12 03:47:58', '2024-09-12 03:47:58');

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
  `services_description_a` varchar(200) NOT NULL,
  `services_description_b` varchar(200) NOT NULL,
  `services_description_c` varchar(200) NOT NULL,
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
(1, 'Choose your Companion', 'Escape the Ordinary: Experience the Thrill', 'Sed ut perspiciatis', 'Lorem ipsum dolor', 'Nemo enim ipsam', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.', 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehenderi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque quod ab nostrum quas reprehender', 'Talk to Us', 'Talk to Us', 'Talk to Us', 'pngwing.com (1) 1.png', 'bike2.webp', 'pngwing.com (2) 1.png', '2024-09-13 03:30:35', '2024-09-13 03:30:35');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_testimonial`
--

CREATE TABLE `tbl_testimonial` (
  `testimonial_aid` int(11) NOT NULL,
  `testimonial_title` varchar(50) NOT NULL,
  `testimonial_subtitle` varchar(100) NOT NULL,
  `testimonial_img_a` varchar(100) NOT NULL,
  `testimonial_img_b` varchar(100) NOT NULL,
  `testimonial_img_c` varchar(100) NOT NULL,
  `testimonial_name_a` varchar(100) NOT NULL,
  `testimonial_name_b` varchar(100) NOT NULL,
  `testimonial_name_c` varchar(100) NOT NULL,
  `testimonial_description_a` varchar(400) NOT NULL,
  `testimonial_description_b` varchar(400) NOT NULL,
  `testimonial_description_c` varchar(400) NOT NULL,
  `testimonial_created` datetime NOT NULL,
  `testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_testimonial`
--

INSERT INTO `tbl_testimonial` (`testimonial_aid`, `testimonial_title`, `testimonial_subtitle`, `testimonial_img_a`, `testimonial_img_b`, `testimonial_img_c`, `testimonial_name_a`, `testimonial_name_b`, `testimonial_name_c`, `testimonial_description_a`, `testimonial_description_b`, `testimonial_description_c`, `testimonial_created`, `testimonial_datetime`) VALUES
(1, 'You\'re in good Shop          ', 'A Fun and Healthy Way to Connect with Your Community and the Environment', 'feedback1.png', 'feedback2.webp', 'feedback3.webp', 'Jason Ramello', 'Annalyn Jovellano', 'Mark Anthony Bilog', 'Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit \npellentesque amet diam amet.', 'Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit.', 'Lorem ipsum dolor sit amet consectetur. Neque risusaugue eget vel pellentesque amet diam amet ultricies. Sapien suspendisse sollicitudin dignissim cursus. Ut acmorbi pretium eget porta magna arcu sit.', '2024-10-02 06:16:58', '2024-10-02 06:16:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_about`
--
ALTER TABLE `tbl_about`
  ADD PRIMARY KEY (`about_aid`);

--
-- Indexes for table `tbl_colors`
--
ALTER TABLE `tbl_colors`
  ADD PRIMARY KEY (`colors_aid`);

--
-- Indexes for table `tbl_contact_banner`
--
ALTER TABLE `tbl_contact_banner`
  ADD PRIMARY KEY (`contact_banner_aid`);

--
-- Indexes for table `tbl_footer`
--
ALTER TABLE `tbl_footer`
  ADD PRIMARY KEY (`footer_aid`);

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
-- Indexes for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  ADD PRIMARY KEY (`testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_about`
--
ALTER TABLE `tbl_about`
  MODIFY `about_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_colors`
--
ALTER TABLE `tbl_colors`
  MODIFY `colors_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_contact_banner`
--
ALTER TABLE `tbl_contact_banner`
  MODIFY `contact_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_footer`
--
ALTER TABLE `tbl_footer`
  MODIFY `footer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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

--
-- AUTO_INCREMENT for table `tbl_testimonial`
--
ALTER TABLE `tbl_testimonial`
  MODIFY `testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
