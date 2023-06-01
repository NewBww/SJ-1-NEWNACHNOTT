-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sas` ;

-- -----------------------------------------------------
-- Schema sas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sas` DEFAULT CHARACTER SET utf8 ;
USE `sas` ;

-- -----------------------------------------------------
-- Table `sas`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sas`.`categories` ;

CREATE TABLE IF NOT EXISTS `sas`.`categories` (
  `categoryId` INT NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`categoryId`),
  UNIQUE INDEX `categoryName_UNIQUE` (`categoryName` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sas`.`announcements`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sas`.`announcements` ;

CREATE TABLE IF NOT EXISTS `sas`.`announcements` (
  `announcementId` INT NOT NULL AUTO_INCREMENT,
  `announcementTitle` VARCHAR(200) NOT NULL,
  `announcementDescription` VARCHAR(10000) NOT NULL,
  `publishDate` DATETIME NULL,
  `closeDate` DATETIME NULL,
  `announcementDisplay` ENUM('N', 'Y') NOT NULL DEFAULT 'N',
  `categoryId` INT NOT NULL,
  `viewCount` SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`announcementId`),
  INDEX `fk_announcements_categories_idx` (`categoryId` ASC) VISIBLE,
  CONSTRAINT `fk_announcements_categories`
    FOREIGN KEY (`categoryId`)
    REFERENCES `sas`.`categories` (`categoryId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS dbadmin;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'dbadmin' IDENTIFIED BY '3n';

GRANT SELECT, INSERT, TRIGGER ON TABLE `sas`.* TO 'dbadmin';
GRANT SELECT ON TABLE `sas`.* TO 'dbadmin';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `sas`.* TO 'dbadmin';
GRANT ALL ON `sas`.* TO 'dbadmin';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `sas`.`categories`
-- -----------------------------------------------------
START TRANSACTION;
USE `sas`;
INSERT INTO `sas`.`categories` (`categoryId`, `categoryName`) VALUES (1, 'ทั่วไป');
INSERT INTO `sas`.`categories` (`categoryId`, `categoryName`) VALUES (2, 'ทุนการศึกษา');
INSERT INTO `sas`.`categories` (`categoryId`, `categoryName`) VALUES (3, 'หางาน');
INSERT INTO `sas`.`categories` (`categoryId`, `categoryName`) VALUES (4, 'ฝึกงาน');

COMMIT;


-- -----------------------------------------------------
-- Data for table `sas`.`announcements`
-- -----------------------------------------------------
-- START TRANSACTION;
-- USE `sas`;
-- INSERT INTO `sas`.`announcements` (`announcementId`, `announcementTitle`, `announcementDescription`, `publishDate`, `closeDate`, `announcementDisplay`, `categoryId`, `viewCount`) VALUES (1, 'บริษัท เน็ตเซอร์พลัส จำกัด รับสมัครงาน 2 ตำแหน่ง', 'บริษัท เน็ตเซอร์พลัส จำกัด เปิดรับสมัครงาน 2 ตำแหน่ง Application Support และ Customer Support', NULL, NULL, 'N', 3, DEFAULT);
-- INSERT INTO `sas`.`announcements` (`announcementId`, `announcementTitle`, `announcementDescription`, `publishDate`, `closeDate`, `announcementDisplay`, `categoryId`, `viewCount`) VALUES (2, 'รายชื่อนักศึกษาที่ได้รับทุนการศึกษาประเภท \"ทุนจ้างงาน\" 2/2565', 'คณะ ฯ ประกาศรายชื่อนักศึกษาที่ได้รับทุนการศึกษาประเภท \"ทุนจ้างงาน\" ประจำภาคการศึกษา 2/2565', NULL, '2023-05-31 11:00:00', 'Y', 2, DEFAULT);
-- INSERT INTO `sas`.`announcements` (`announcementId`, `announcementTitle`, `announcementDescription`, `publishDate`, `closeDate`, `announcementDisplay`, `categoryId`, `viewCount`) VALUES (3, 'แนวปฎิบัติการสอบออนไลน์ พ.ศ. 2565', 'ประกาศมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เรื่องแนวทางปฎิบัติการสอบออนไลน์พ.ศ. 2565', '2023-01-26 23:00:00', NULL, 'Y', 1, DEFAULT);
-- INSERT INTO `sas`.`announcements` (`announcementId`, `announcementTitle`, `announcementDescription`, `publishDate`, `closeDate`, `announcementDisplay`, `categoryId`, `viewCount`) VALUES (4, 'กิจกรรมพี่อ้อย พี่ฉอด On Tour 2566', 'ขอเชิญนักศึกษาทุกชั้นปี เข้าร่วมกิจกรรมพี่อ้อย พี่ฉอด On Tour', '2023-04-18 23:00:00', '2023-05-08 11:00:00', 'Y', 1, DEFAULT);

-- COMMIT;

