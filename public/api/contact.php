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

// Prepare Email
$to = 'contact.zealarc@gmail.com';
$emailSubject = !empty($subject) ? "Zealarc Contact: " . $subject : "New Zealarc Inquiry from " . $name;

// Clean inputs to prevent email injection
$name = str_replace(array("\r", "\n"), '', $name);
$email = str_replace(array("\r", "\n"), '', $email);
$company = str_replace(array("\r", "\n"), '', $company);
$phone = str_replace(array("\r", "\n"), '', $phone);
$emailSubject = str_replace(array("\r", "\n"), '', $emailSubject);

// Format plain text email body
$emailBody = "New Contact Form Submission\n\n";
$emailBody .= "Name:\n" . $name . "\n\n";
$emailBody .= "Email:\n" . $email . "\n\n";
$emailBody .= "Phone:\n" . ($phone ? $phone : 'N/A') . "\n\n";
$emailBody .= "Company:\n" . ($company ? $company : 'N/A') . "\n\n";
$emailBody .= "Subject:\n" . ($subject ? $subject : 'N/A') . "\n\n";
$emailBody .= "Message:\n" . $message . "\n";

// Determine the From domain dynamically to prevent Hostinger domain-mismatch blocking
$serverName = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'zealarc.com';
if (substr($serverName, 0, 4) === 'www.') {
    $serverName = substr($serverName, 4);
}
$fromEmail = 'noreply@' . $serverName;

// Headers separated by \n (standard for Linux/Unix mail servers to prevent doubled CR/LF issues)
$headers = array(
    'From: ' . $fromEmail,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
);

// Send Email using the fifth parameter -f to set the envelope sender (required by Hostinger to authorize the send)
$mailSuccess = @mail($to, $emailSubject, $emailBody, implode("\n", $headers), "-f" . $fromEmail);

if ($mailSuccess) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false]);
}
