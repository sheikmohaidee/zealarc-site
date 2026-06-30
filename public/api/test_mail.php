<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$to = 'contact.zealarc@gmail.com';
$subject = 'Zealarc Mail Test';
$message = "This is a test email to verify if PHP mail() is working on your Hostinger server.\n\nSent: " . date('Y-m-d H:i:s') . " UTC";

$serverName = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'zealarc.com';
if (substr($serverName, 0, 4) === 'www.') {
    $serverName = substr($serverName, 4);
}
$fromEmail = 'noreply@' . $serverName;

$headers = array(
    'From: ' . $fromEmail,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
);

echo "<h2>Testing PHP mail() on " . htmlspecialchars($serverName) . "</h2>";
echo "<p>Sending to: " . htmlspecialchars($to) . "</p>";
echo "<p>From (Header): " . htmlspecialchars($fromEmail) . "</p>";

// Attempt send using standard mail
$success = mail($to, $subject, $message, implode("\n", $headers), "-f" . $fromEmail);

if ($success) {
    echo "<p style='color: green; font-weight: bold; font-size: 16px;'>Success! mail() returned true.</p>";
    echo "<p>Check your inbox (and spam folder) at <strong>" . htmlspecialchars($to) . "</strong>.</p>";
} else {
    echo "<p style='color: red; font-weight: bold; font-size: 16px;'>Failure! mail() returned false.</p>";
    $lastError = error_get_last();
    if ($lastError) {
        echo "<p><strong>PHP Error Details:</strong> " . htmlspecialchars($lastError['message']) . "</p>";
    } else {
        echo "<p>No PHP error details were captured. This usually indicates that the mail transfer agent (sendmail/postfix) is disabled or unconfigured in the server's php.ini, or the server is blocking outgoing SMTP connections.</p>";
    }
}
?>
