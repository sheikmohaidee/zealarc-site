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
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
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
    // Silently reject or return success to fool bots
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully!']);
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
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields (Name, Email, Message).']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
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

$dateTime = date('Y-m-d H:i:s') . ' UTC';

// HTML Email Body
$emailBody = "
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1d1d1f; line-height: 1.5; background-color: #f5f5f7; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.04); }
    .header { background-color: #0071e3; color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
    .content { padding: 30px; }
    .field-group { margin-bottom: 20px; border-bottom: 1px solid #f5f5f7; padding-bottom: 15px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #86868b; letter-spacing: 0.5px; margin-bottom: 5px; }
    .value { font-size: 15px; color: #1d1d1f; }
    .message-box { background: #f5f5f7; padding: 15px; border-radius: 12px; font-size: 14px; color: #1d1d1f; white-space: pre-wrap; margin-top: 5px; }
    .footer { background: #f5f5f7; text-align: center; padding: 20px; font-size: 11px; color: #86868b; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>New Inquiry Received</h1>
    </div>
    <div class='content'>
      <div class='field-group'>
        <div class='label'>Full Name</div>
        <div class='value'><strong>" . htmlspecialchars($name) . "</strong></div>
      </div>
      " . (!empty($company) ? "
      <div class='field-group'>
        <div class='label'>Company Name</div>
        <div class='value'>" . htmlspecialchars($company) . "</div>
      </div>" : "") . "
      <div class='field-group'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #0071e3; text-decoration: none;'>" . htmlspecialchars($email) . "</a></div>
      </div>
      " . (!empty($phone) ? "
      <div class='field-group'>
        <div class='label'>Phone Number</div>
        <div class='value'>" . htmlspecialchars($phone) . "</div>
      </div>" : "") . "
      <div class='field-group'>
        <div class='label'>Subject</div>
        <div class='value'>" . htmlspecialchars(!empty($subject) ? $subject : 'N/A') . "</div>
      </div>
      <div class='field-group'>
        <div class='label'>Message</div>
        <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
      </div>
      <div class='field-group'>
        <div class='label'>Date & Time of Submission</div>
        <div class='value'>" . htmlspecialchars($dateTime) . "</div>
      </div>
    </div>
    <div class='footer'>
      This email was sent automatically from the Zealarc website contact form.
    </div>
  </div>
</body>
</html>
";

// Dynamically determine the From domain to prevent Hostinger domain-mismatch blocking
$serverName = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'zealarc.com';
if (substr($serverName, 0, 4) === 'www.') {
    $serverName = substr($serverName, 4);
}
$fromEmail = 'noreply@' . $serverName;

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: Zealarc Web Form <' . $fromEmail . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Send Email (suppress warnings so we can capture the error object cleanly)
$mailSuccess = @mail($to, $emailSubject, $emailBody, implode("\r\n", $headers));

// Optional Database Logging
$dbSaved = false;
@include_once __DIR__ . '/db.php';
if (function_exists('getDatabaseConnection')) {
    try {
        // Connect directly to avoid the exit() behavior in db.php on failure
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
        $dbSaved = true;
    } catch (\Exception $e) {
        // Database failed but we don't block the response since email is the primary method
    }
}

if ($mailSuccess) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully! We\'ll get back to you within one business day.'
    ]);
} else {
    http_response_code(500);
    $errorMessage = 'Unable to send your message.';
    
    // Retrieve the PHP mail error if DEV_MODE is enabled
    @include_once __DIR__ . '/config.php';
    if (defined('DEV_MODE') && DEV_MODE) {
        $lastError = error_get_last();
        if ($lastError) {
            $errorMessage .= ' (PHP Error: ' . $lastError['message'] . ')';
        } else {
            $errorMessage .= ' (Check if your hosting mail server is enabled/configured)';
        }
    }
    
    echo json_encode([
        'success' => false,
        'message' => $errorMessage
    ]);
}
