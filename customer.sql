-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 07:17 PM
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
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Customer_ID` int(11) NOT NULL,
  `ComName` varchar(50) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `Street` varchar(50) DEFAULT NULL,
  `Contact` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Customer_ID`, `ComName`, `City`, `Street`, `Contact`) VALUES
(1, 'IBM Corporation', 'Armonk, NY', 'The IBM Way', '1-800-CALL-IBM'),
(2, 'Ege Consulting, Inc.', 'Miami, FL', '14531 SW 76 Street', 'www.ege.com'),
(3, 'Alcatel - Lucent', 'Holmdel, NJ', '100 Crawfords Corner Road', 'www.lucent.com'),
(4, 'Insight Technologies Group', 'St. Louis, MO', 'Hollenberg Drive West, Suite 203', 'info@insight-tech.com'),
(5, 'Rational Software Corporation', 'Santa Clara, CA', 'Better than ARGO way', 'www.rational.com'),
(6, 'Bell South', 'Atlanta, GA', 'Braves Parkway', '1-305-970-BELL'),
(7, 'GE Corporation', 'New York, NY', '100 Wall Street', 'John Myers @ 1-202-452-8864'),
(8, 'Comcast - NBC', 'New York, NY', '	\r\nKaty and Matt Plaza', 'www.nbc.COMCAST.com'),
(9, 'Ralston Purina', 'Armadillo, TX', '12123 Dog Lane', 'Susan Powers @ 1-614-556-4266'),
(10, 'John Deere Corporation', 'West Lafayette, IN', 'One Greenway', 'www.johndeere.com'),
(11, 'Hilti GMBH & Co, KG', 'Zurich, Switzerland', 'Tobelstrasse 14', '+39-89787-562636'),
(12, 'Kress und Soehne', 'Hechingen, Germany', 'Industriegebiet', '+49-711-246012'),
(13, 'GemStone Corporation', 'Beaverton, OR', 'John von Neumann Drive', 'ally McBeal @ www.gemstone.com'),
(14, 'The Maibaum Coalition', 'Crepe Sushette, Greece', 'near Athens', 'mai.baum.gr'),
(15, 'Grabby Grubby Meast', 'Burlington, IL', '123 Water Tower Circle', 'meat.grub.com'),
(16, 'Mast und Schotbruch', 'Hamburg, Germany', '1776 Ronald McDonald Allee', 'www.ham.burg.de'),
(17, 'Golden Seventeen Corporation', 'Chicago, IL', 'North Bayshore Drive', '17@18.net'),
(18, 'South by Southwest', 'Austin, TX', '100 SquareMile Road', '1-800-sxs-west'),
(19, 'Diamonds are Forever', 'Kapstadt, South Africa', 'allover there', 'dia@south.africa.net'),
(20, 'Diamond Corporation', 'Hillsboro, OR', 'Wacker Drive', 'ceo@dia.com'),
(21, 'Excelsior Mutants', 'Vancouver, WA', '1 Columbia Circle', 'van@celsius.net'),
(22, 'Clever Building & Co.', 'Seattle, WA', 'Evergreen Parkview, stall #2', 'clever@huland.net'),
(23, 'Reams Paper and Sausage', 'Elburn, IL', 'IL Rt. 47', 'hackebeil@reams.tv'),
(24, 'Rivabeck Industrial Solutions', 'Sycamore, IL', '5566 Moore Ct', '1-815-riv-beck'),
(25, 'Asus Tech', 'Taiwan, TW', 'EllisWay Thoroughfare', 'asus.tw'),
(26, 'Hongkong Travel Ltd.', 'Hongkong', 'Sang Pang Wang', 'hong.kong'),
(27, 'Clowncar Development Subsidiaries', 'DesMoines, IA', '1492 West Far Out Blvd', 'clown.car.tv'),
(28, 'Big and Lovely Partnership', 'Salt Lake City, UT', 'smack in the middle', 'www.big.love.com'),
(30, 'United we Parcel ', 'Gremlin, FL', '1 Ocean Drive', 'united@ocean.com'),
(33, 'Customer: 22-10-25 18:27', 'Dekalb, IL', 'PM 51', 'www.niu.edu'),
(40, 'Atelier graphique', 'Nantes, France', '54, rue Royale', '40.32.2555'),
(41, 'Signal Gift Stores', 'Las Vegas, NV', '8489 Strong St.', '7025551838'),
(42, 'Australian Collectors, Co.', 'Melbourne, Australia', '636 St Kilda Road', '03 9520 4555'),
(43, 'La Rochelle Gifts', 'Nantes, France', '67, rue des Cinquante Otages', '40.67.8555'),
(44, 'Baane Mini Imports', 'Stavern, Norway', 'Erling Skakkes gate 78', '07-98 9555'),
(45, 'Mini Gifts Distributors Ltd.', 'San Rafael, CA', '5677 Strong St.', '4155551450'),
(46, 'Havel & Zbyszek Co', 'Warszawa, Poland', 'ul. Filtrowa 68', '(26) 642-7555'),
(47, 'Blauer See Auto, Co.', 'Frankfurt, Germany', 'Lyonerstr. 34', '+49 69 66 90 2555'),
(48, 'Mini Wheels Co.', 'San Francisco, CA', '5557 North Pendale Street', '6505555787'),
(49, 'Land of Toys Inc.', 'NYC, NY', '897 Long Airport Avenue', '2125557818'),
(50, 'Euro+ Shopping Channel', 'Madrid, Spain', 'C/ Moralzarzal, 86', '(91) 555 94 44'),
(51, 'Volvo Model Replicas, Co', 'Luleå, Sweden', 'Berguvsvägen  8', '0921-12 3555'),
(52, 'Danish Wholesale Imports', 'Kobenhavn, Denmark', 'Vinbæltet 34', '31 12 3555'),
(53, 'Saveley & Henriot, Co.', 'Lyon, France', '2, rue du Commerce', '78.32.5555'),
(54, 'Dragon Souveniers, Ltd.', 'Singapore, Singapore', 'Bronz Sok.', '+65 221 7555'),
(55, 'Muscle Machine Inc', 'NYC, NY', '4092 Furth Circle', '2125557413'),
(56, 'Diecast Classics Inc.', 'Allentown, PA', '7586 Pompton St.', '2155551555'),
(57, 'Technics Stores Inc.', 'Burlingame, CA', '9408 Furth Circle', '6505556809'),
(58, 'Handji Gifts& Co', 'Singapore, Singapore', '106 Linden Road Sandown', '+65 224 1555'),
(59, 'Herkku Gifts', 'Bergen, Norway  ', 'Brehmen St. 121', '+47 2267 3215'),
(60, 'American Souvenirs Inc', 'New Haven, CT', '149 Spinnaker Dr.', '2035557845'),
(61, 'Porto Imports Co.', 'Lisboa, Portugal', 'Estrada da saúde n. 58', '(1) 356-5555'),
(62, 'Daedalus Designs Imports', 'Lille, France', '184, chaussée de Tournai', '20.16.1555'),
(63, 'La Corne D\'abondance, Co.', 'Paris, France', '265, boulevard Charonne', '(1) 42.34.2555'),
(64, 'Cambridge Collectables Co.', 'Cambridge, MA', '4658 Baden Av.', '6175555555'),
(65, 'Gift Depot Inc.', 'Bridgewater, CT', '25593 South Bay Ln.', '2035552570'),
(66, 'Osaka Souveniers Co.', 'Kita-ku, Japan', '1-6-20 Dojima', '+81 06 6342 5555'),
(67, 'Vitachrome Inc.', 'NYC, NY', '2678 Kingston Rd.', '2125551500'),
(68, 'Toys of Finland, Co.', 'Helsinki, Finland', 'Keskuskatu 45', '90-224 8555'),
(69, 'AV Stores, Co.', 'Manchester, UK', 'Fauntleroy Circus', '(171) 555-1555'),
(70, 'Clover Collections, Co.', 'Dublin, Ireland', '25 Maiden Lane', '+353 1862 1555'),
(71, 'Auto-Moto Classics Inc.', 'Brickhaven, MA', '16780 Pompton St.', '6175558428'),
(72, 'UK Collectables, Ltd.', 'Liverpool, UK', '12, Berkeley Gardens Blvd', '(171) 555-2282'),
(73, 'Canadian Gift Exchange Network', 'Vancouver, Canada', '1900 Oak St.', '(604) 555-3392'),
(74, 'Online Mini Collectables', 'Brickhaven, MA', '7635 Spinnaker Dr.', '6175557555'),
(75, 'Toys4GrownUps.com', 'Pasadena, CA', '78934 Hillside Dr.', '6265557265'),
(76, 'Asian Shopping Network, Co', 'Singapore, Singapore', 'Suntec Tower Three', '+612 9411 1555'),
(77, 'Mini Caravy', 'Strasbourg, France', '24, place Kléber', '88.60.1555'),
(78, 'King Kong Collectables, Co.', 'Central Hong Kong, Hong Kong', 'Bank of China Tower', '+852 2251 1555'),
(79, 'Enaco Distributors', 'Barcelona, Spain', 'Rambla de Cataluña, 23', '(93) 203 4555'),
(80, 'Boards & Toys Co.', 'Glendale, CA', '4097 Douglas Av.', '3105552373'),
(81, 'Natürlich Autos', 'Cunewalde, Germany', 'Taucherstraße 10', '0372-555188'),
(82, 'Heintze Collectables', 'Århus, Denmark', 'Smagsloget 45', '86 21 3555'),
(83, 'Québec Home Shopping Network', 'Montréal, Canada', '43 rue St. Laurent', '(514) 555-8054'),
(84, 'ANG Resellers', 'Madrid, Spain', 'Gran Vía, 1', '(91) 745 6555'),
(85, 'Collectable Mini Designs Co.', 'San Diego, CA', '361 Furth Circle', '7605558146'),
(86, 'giftsbymail.co.uk', 'Cowes, UK', 'Garden House', '(198) 555-8888'),
(87, 'Alpha Cognac', 'Toulouse, France', '1 rue Alsace-Lorraine', '61.77.6555'),
(88, 'Messner Shopping Network', 'Frankfurt, Germany', 'Magazinweg 7', '069-0555984'),
(89, 'Amica Models & Co.', 'Torino, Italy', 'Via Monte Bianco 34', '011-4988555'),
(90, 'Lyon Souveniers', 'Paris, France', '27 rue du Colonel Pierre Avia', '+33 1 46 62 7555'),
(91, 'Auto Associés & Cie.', 'Versailles, France', '67, avenue de l\'Europe', '30.59.8555'),
(92, 'Toms Spezialitäten, Ltd', 'Köln, Germany', 'Mehrheimerstr. 369', '0221-5554327'),
(93, 'Royal Canadian Collectables, Ltd.', 'Tsawassen, Canada', '23 Tsawassen Blvd.', '(604) 555-4555'),
(94, 'Franken Gifts, Co', 'München, Germany', 'Berliner Platz 43', '089-0877555'),
(95, 'Anna\'s Decorations, Ltd', 'North Sydney, Australia', '201 Miller Street', '02 9936 8555'),
(96, 'Rovelli Gifts', 'Bergamo, Italy', 'Via Ludovico il Moro 22', '035-640555'),
(97, 'Souveniers And Things Co.', 'Chatswood, Australia', 'Monitor Money Building', '+61 2 9495 8555'),
(98, 'Marta\'s Replicas Co.', 'Cambridge, MA', '39323 Spinnaker Dr.', '6175558555'),
(99, 'BG&E Collectables', 'Fribourg, Switzerland', 'Rte des Arsenaux 41 ', '+41 26 425 50 01'),
(100, 'Vida Sport, Ltd', 'Genève, Switzerland', 'Grenzacherweg 237', '0897-034555'),
(101, 'Norway Gifts By Mail, Co.', 'Oslo, Norway  ', 'Drammensveien 126A', '+47 2212 1555'),
(102, 'Schuyler Imports', 'Amsterdam, Netherlands', 'Kingsfordweg 151', '+31 20 491 9555'),
(103, 'Der Hund Imports', 'Berlin, Germany', 'Obere Str. 57', '030-0074555'),
(104, 'Oulu Toy Supplies, Inc.', 'Oulu, Finland', 'Torikatu 38', '981-443655'),
(105, 'Petit Auto', 'Bruxelles, Belgium', 'Rue Joseph-Bens 532', '(02) 5554 67'),
(106, 'Mini Classics', 'White Plains, NY', '3758 North Pendale Street', '9145554562'),
(107, 'Mini Creations Ltd.', 'New Bedford, MA', '4575 Hillside Dr.', '5085559555'),
(108, 'Corporate Gift Ideas Co.', 'San Francisco, CA', '7734 Strong St.', '6505551386'),
(109, 'Down Under Souveniers, Inc', 'Auckland  , New Zealand', '162-164 Grafton Road', '+64 9 312 5555'),
(110, 'Stylish Desk Decors, Co.', 'London, UK', '35 King George', '(171) 555-0297'),
(111, 'Tekni Collectables Inc.', 'Newark, NJ', '7476 Moss Rd.', '2015559350'),
(112, 'Australian Gift Network, Co', 'South Brisbane, Australia', '31 Duncan St. West End', '61-7-3844-6555'),
(113, 'Suominen Souveniers', 'Espoo, Finland', 'Software Engineering Center', '+358 9 8045 555'),
(114, 'Cramer Spezialitäten, Ltd', 'Brandenburg, Germany', 'Maubelstr. 90', '0555-09555'),
(115, 'Classic Gift Ideas, Inc', 'Philadelphia, PA', '782 First Street', '2155554695'),
(116, 'CAF Imports', 'Madrid, Spain', 'Merchants House', '+34 913 728 555'),
(117, 'Men \'R\' US Retailers, Ltd.', 'Los Angeles, CA', '6047 Douglas Av.', '2155554369'),
(118, 'Asian Treasures, Inc.', 'Cork, Ireland', '8 Johnstown Road', '2967 555'),
(119, 'Marseille Mini Autos', 'Marseille, France', '12, rue des Bouchers', '91.24.4555'),
(120, 'Reims Collectables', 'Reims, France', '59 rue de l\'Abbaye', '26.47.1555'),
(121, 'SAR Distributors, Co', 'Hatfield, South Africa', '1250 Pretorius Street', '+27 21 550 3555'),
(122, 'GiftsForHim.com', 'Auckland, New Zealand', '199 Great North Road', '64-9-3763555'),
(123, 'Kommission Auto', 'Münster, Germany', 'Luisenstr. 48', '0251-555259'),
(124, 'Gifts4AllAges.com', 'Boston, MA', '8616 Spinnaker Dr.', '6175559555'),
(125, 'Online Diecast Creations Co.', 'Nashua, NH', '2304 Long Airport Avenue', '6035558647'),
(126, 'Lisboa Souveniers, Inc', 'Lisboa, Portugal', 'Jardim das rosas n. 32', '(1) 354-2555'),
(127, 'Precious Collectables', 'Bern, Switzerland', 'Hauptstr. 29', '0452-076555'),
(128, 'Collectables For Less Inc.', 'Brickhaven, MA', '7825 Douglas Av.', '6175558555'),
(129, 'Royale Belge', 'Charleroi, Belgium', 'Boulevard Tirou, 255', '(071) 23 67 2555'),
(130, 'Salzburg Collectables', 'Salzburg, Austria', 'Geislweg 14', '6562-9555'),
(131, 'Cruz & Sons Co.', 'Makati City, Philippines', '15 McCallum Street', '+63 2 555 3587'),
(132, 'L\'ordine Souveniers', 'Reggio Emilia, Italy', 'Strada Provinciale 124', '0522-556555'),
(133, 'Tokyo Collectables, Ltd', 'Minato-ku, Japan', '2-2-8 Roppongi', '+81 3 3584 0555'),
(134, 'Auto Canal+ Petit', 'Paris, France', '25, rue Lauriston', '(1) 47.55.6555'),
(135, 'Stuttgart Collectable Exchange', 'Stuttgart, Germany', 'Adenauerallee 900', '0711-555361'),
(136, 'Extreme Desk Decorations, Ltd', 'Wellington, New Zealand', '101 Lambton Quay', '04 499 9555'),
(137, 'Bavarian Collectables Imports, Co.', 'Munich, Germany', 'Hansastr. 15', ' +49 89 61 08 9555'),
(138, 'Classic Legends Inc.', 'NYC, NY', '5905 Pompton St.', '2125558493'),
(139, 'Feuer Online Stores, Inc', 'Leipzig, Germany', 'Heerstr. 22', '0342-555176'),
(140, 'Gift Ideas Corp.', 'Glendale, CT', '2440 Pompton St.', '2035554407'),
(141, 'Scandinavian Gift Ideas', 'Bräcke, Sweden', 'Åkergatan 24', '0695-34 6555'),
(142, 'The Sharp Gifts Warehouse', 'San Jose, CA', '3086 Ingle Ln.', '4085553659'),
(143, 'Mini Auto Werke', 'Graz, Austria', 'Kirchgasse 6', '7675-3555'),
(144, 'Super Scale Inc.', 'New Haven, CT', '567 North Pendale Street', '2035559545'),
(145, 'Microscale Inc.', 'NYC, NY', '5290 North Pendale Street', '2125551957'),
(146, 'Corrida Auto Replicas, Ltd', 'Madrid, Spain', 'C/ Araquil, 67', '(91) 555 22 82'),
(147, 'Warburg Exchange', 'Aachen, Germany', 'Walserweg 21', '0241-039123'),
(148, 'FunGiftIdeas.com', 'New Bedford, MA', '1785 First Street', '5085552555'),
(149, 'Anton Designs, Ltd.', 'Madrid, Spain', 'c/ Gobelas, 19-1 Urb. La Florida', '+34 913 728555'),
(150, 'Australian Collectables, Ltd', 'Glen Waverly, Australia', '7 Allen Street', '61-9-3844-6555'),
(151, 'Frau da Collezione', 'Milan, Italy', '20093 Cologno Monzese', '+39 022515555'),
(152, 'West Coast Collectables Co.', 'Burbank, CA', '3675 Furth Circle', '3105553722'),
(153, 'Mit Vergnügen & Co.', 'Mannheim, Germany', 'Forsterstr. 57', '0621-08555'),
(154, 'Kremlin Collectables, Co.', 'Saint Petersburg, Russia', '2 Pobedy Square', '+7 812 293 0521'),
(155, 'Raanan Stores, Inc', 'Herzlia, Israel', '3 Hagalim Blv.', '+ 972 9 959 8555'),
(156, 'Iberia Gift Imports, Corp.', 'Sevilla, Spain', 'C/ Romero, 33', '(95) 555 82 82'),
(157, 'Motor Mint Distributors Inc.', 'Philadelphia, PA', '11328 Douglas Av.', '2155559857'),
(158, 'Signal Collectibles Ltd.', 'Brisbane, CA', '2793 Furth Circle', '4155554312'),
(159, 'Double Decker Gift Stores, Ltd', 'London, UK', '120 Hanover Sq.', '(171) 555-7555'),
(160, 'Diecast Collectables', 'Boston, MA', '6251 Ingle Ln.', '6175552555'),
(161, 'Kelly\'s Gift Shop', 'Auckland  , New Zealand', 'Arenales 1938 3\'A\'', '+64 9 5555500');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Customer_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Customer_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
