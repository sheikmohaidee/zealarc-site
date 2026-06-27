-- MySQL Database Schema for Zealarc Website Contact Submissions
-- Import this SQL code inside your Hostinger phpMyAdmin database.

CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) DEFAULT NULL,
  `company` VARCHAR(100) DEFAULT NULL,
  `subject` VARCHAR(150) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
