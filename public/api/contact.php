<?php
// Set CORS headers for local development if needed, though they will be on the same domain in production.
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
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Only POST is allowed.']);
    exit;
}

require_once __DIR__ . '/db.php';

// Read JSON input
$inputRaw = file_get_contents('php://input');
$input = json_decode($inputRaw, true);

// Fallback to $_POST if JSON payload is empty (e.g. form-urlencoded submission)
if (!$input) {
    $input = $_POST;
}

// Retrieve and sanitize fields
$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : '';
$company = isset($input['company']) ? strip_tags(trim($input['company'])) : '';
$subject = isset($input['subject']) ? strip_tags(trim($input['subject'])) : '';
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';

// Basic validations
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide your name, email, and message.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// Insert into Database
$db = getDatabaseConnection();
$sql = "INSERT INTO contact_submissions (name, email, phone, company, subject, message, created_at) 
        VALUES (:name, :email, :phone, :company, :subject, :message, NOW())";

try {
    $stmt = $db->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':company' => $company,
        ':subject' => $subject,
        ':message' => $message
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully. We will get back to you shortly!'
    ]);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred while saving your message. Please try again later.',
        'error' => DEV_MODE ? $e->getMessage() : 'Query Error'
    ]);
}
