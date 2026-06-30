<?php
// Load .env file securely from the same directory if it exists
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        $parts = explode('=', $line, 2);
        if (count($parts) === 2) {
            $name = trim($parts[0]);
            $value = trim($parts[1]);
            // Strip optional surrounding quotes
            $value = preg_replace('/^[\'"]|[\'"]$/', '', $value);
            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }
    }
}

// Database Configuration
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'zealarc_db');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') !== false ? getenv('DB_PASS') : '');

// Hostinger SMTP Configuration
define('SMTP_USER', getenv('SMTP_USER') ?: 'contact@zealarc.com');
define('SMTP_PASS', getenv('SMTP_PASS') ?: 'xoxwup-cebvyj-9mIhke');

// Set to false in production to disable detailed error messages
define('DEV_MODE', getenv('DEV_MODE') !== false ? filter_var(getenv('DEV_MODE'), FILTER_VALIDATE_BOOLEAN) : false);

if (DEV_MODE) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}
?>
