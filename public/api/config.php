<?php
// Hostinger Database Configuration
// Edit these credentials once deployed to your Hostinger MySQL Database.

define('DB_HOST', 'localhost');
define('DB_NAME', 'zealarc_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// Set to false in production to disable detailed error messages
define('DEV_MODE', true);

if (DEV_MODE) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}
