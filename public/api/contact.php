<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

// Read JSON input
$inputRaw = file_get_contents('php://input');
$input = json_decode($inputRaw, true);

if (!$input) {
    $input = $_POST;
}

// Honeypot spam protection
if (!empty($input['b_url'])) {
    echo json_encode(['success' => true]);
    exit;
}

// Retrieve and sanitize fields
$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$company = isset($input['company']) ? strip_tags(trim($input['company'])) : '';
$subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

// Clean inputs to prevent email injection
$name = str_replace(array("\r", "\n"), '', $name);
$email = str_replace(array("\r", "\n"), '', $email);
$company = str_replace(array("\r", "\n"), '', $company);
$phone = str_replace(array("\r", "\n"), '', $phone);

// Prepare Email
$to = 'contact.zealarc@gmail.com';
$emailSubject = !empty($subject) ? "Zealarc Contact: " . $subject : "New Zealarc Inquiry from " . $name;

// Format plain text email body
$emailBody = "New Contact Form Submission\n\n";
$emailBody .= "Name:\n" . $name . "\n\n";
$emailBody .= "Email:\n" . $email . "\n\n";
$emailBody .= "Phone:\n" . ($phone ? $phone : 'N/A') . "\n\n";
$emailBody .= "Company:\n" . ($company ? $company : 'N/A') . "\n\n";
$emailBody .= "Subject:\n" . ($subject ? $subject : 'N/A') . "\n\n";
$emailBody .= "Message:\n" . $message . "\n";

// Include configuration
@include_once __DIR__ . '/config.php';

// Helper function to send email via SMTP (Zero-Dependency)
function sendMailSMTP($to, $subject, $body, $replyToEmail) {
    if (!defined('SMTP_USER') || !defined('SMTP_PASS') || empty(SMTP_USER) || empty(SMTP_PASS) || SMTP_USER === 'your-email@domain.com') {
        return false; // SMTP not configured
    }

    $host = 'ssl://smtp.hostinger.com';
    $port = 465;
    $username = SMTP_USER;
    $password = SMTP_PASS;

    $socket = @fsockopen($host, $port, $errno, $errstr, 8);
    if (!$socket) {
        return false;
    }

    $getResponse = function($socket) {
        $response = "";
        while (substr($response, 3, 1) != ' ') {
            if (!($line = fgets($socket, 512))) {
                return false;
            }
            $response .= $line;
        }
        return $response;
    };

    $getResponse($socket); // Read greeting

    fwrite($socket, "EHLO " . (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost') . "\r\n");
    $getResponse($socket);

    fwrite($socket, "AUTH LOGIN\r\n");
    $getResponse($socket);

    fwrite($socket, base64_encode($username) . "\r\n");
    $getResponse($socket);

    fwrite($socket, base64_encode($password) . "\r\n");
    $authRes = $getResponse($socket);
    if (strpos($authRes, '235') === false) {
        fclose($socket);
        return false;
    }

    fwrite($socket, "MAIL FROM: <" . $username . ">\r\n");
    $getResponse($socket);

    fwrite($socket, "RCPT TO: <" . $to . ">\r\n");
    $getResponse($socket);

    fwrite($socket, "DATA\r\n");
    $getResponse($socket);

    $headers = array(
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=utf-8',
        'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
        'To: ' . $to,
        'From: Zealarc Web Form <' . $username . '>',
        'Reply-To: ' . $replyToEmail,
        'Date: ' . date('r'),
        'X-Mailer: PHP/' . phpversion()
    );

    $data = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.\r\n";
    fwrite($socket, $data);
    $dataRes = $getResponse($socket);

    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return strpos($dataRes, '250') !== false;
}

// 1. First attempt sending via SMTP if credentials are set
$mailSuccess = sendMailSMTP($to, $emailSubject, $emailBody, $email);

// 2. If SMTP is not configured or fails, fallback to PHP mail()
if (!$mailSuccess) {
    $serverName = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'zealarc.com';
    if (substr($serverName, 0, 4) === 'www.') {
        $serverName = substr($serverName, 4);
    }
    $fromEmail = 'noreply@' . $serverName;

    $headers = array(
        'From: ' . $fromEmail,
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=utf-8'
    );

    $mailSuccess = @mail($to, $emailSubject, $emailBody, implode("\n", $headers), "-f" . $fromEmail);
}

// 3. Optional Database Logging (if database constants are defined in config.php and connection succeeds)
if (defined('DB_HOST') && defined('DB_NAME') && defined('DB_USER') && defined('DB_PASS') && !empty(DB_NAME)) {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $db = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 3 // short timeout
        ]);
        
        $sql = "INSERT INTO contact_submissions (name, email, phone, company, subject, message, created_at) 
                VALUES (:name, :email, :phone, :company, :subject, :message, NOW())";
        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone' => $phone,
            ':company' => $company,
            ':subject' => $subject,
            ':message' => $message
        ]);
    } catch (\Exception $e) {
        // Database failed, but we do not block the response since email delivery is the primary method.
    }
}

if ($mailSuccess) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false]);
}
