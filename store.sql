/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.4.25-MariaDB : Database - store
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`store` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `store`;

/*Table structure for table `purchase_order` */

DROP TABLE IF EXISTS `purchase_order`;

CREATE TABLE `purchase_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_id` int(11) DEFAULT NULL,
  `item_name` varchar(50) DEFAULT NULL,
  `item_quantity` int(11) DEFAULT NULL,
  `unit_price` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `purchase_order` */

insert  into `purchase_order`(`id`,`vendor_id`,`item_name`,`item_quantity`,`unit_price`,`total_price`,`created_at`) values (1,1,'Rice',3,72,216,'2022-12-31 17:46:13'),(2,2,'Wheet',5,84,420,'2022-12-31 17:47:53');

/*Table structure for table `vendor_information` */

DROP TABLE IF EXISTS `vendor_information`;

CREATE TABLE `vendor_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(100) DEFAULT NULL,
  `phone_no` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `office_address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `active` int(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `vendor_information` */

insert  into `vendor_information`(`id`,`vendor_name`,`phone_no`,`email`,`office_address`,`created_at`,`updated_at`,`deleted_at`,`active`) values (1,'Omuk vendor','01515680903','omuk@gmail.com','Agrabad, Chittagong','2022-12-31 17:45:59',NULL,NULL,1),(2,'Tomuk Vendor','01735006009','tomuk@gmail.com','Boropol, Chittagong','2022-12-31 17:47:21',NULL,NULL,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
