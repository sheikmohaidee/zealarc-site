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
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
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
    echo json_encode(['success' => false, 'error' => 'Invalid input or missing required fields.']);
    exit;
}

// Clean inputs to prevent email injection
$name = str_replace(array("\r", "\n"), '', $name);
$email = str_replace(array("\r", "\n"), '', $email);
$company = str_replace(array("\r", "\n"), '', $company);
$phone = str_replace(array("\r", "\n"), '', $phone);

// Include configuration
@include_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = defined('SMTP_USER') ? SMTP_USER : 'contact@zealarc.com';
    $mail->Password   = defined('SMTP_PASS') ? SMTP_PASS : '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom(defined('SMTP_USER') ? SMTP_USER : 'contact@zealarc.com', 'Zealarc Web Form');
    $mail->addAddress('contact.zealarc@gmail.com');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false); // Plain text
    $mail->Subject = 'New Website Enquiry - Zealarc';
    
    // Format plain text email body
    $emailBody = "New Website Enquiry - Zealarc\n\n";
    $emailBody .= "Name:\n" . $name . "\n\n";
    $emailBody .= "Email:\n" . $email . "\n\n";
    $emailBody .= "Phone:\n" . ($phone ? $phone : 'N/A') . "\n\n";
    $emailBody .= "Company:\n" . ($company ? $company : 'N/A') . "\n\n";
    $emailBody .= "Subject:\n" . ($subject ? $subject : 'N/A') . "\n\n";
    $emailBody .= "Message:\n" . $message . "\n\n";
    $emailBody .= "Date & Time:\n" . date('Y-m-d H:i:s') . ' UTC';

    $mail->Body = $emailBody;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => $mail->ErrorInfo,
        "exception" => $e->getMessage()
    ]);
    exit;
}
