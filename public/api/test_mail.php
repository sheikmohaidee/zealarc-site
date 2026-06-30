<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

@include_once __DIR__ . '/config.php';

$to = 'contact@zealarc.com';
$subject = 'Zealarc Mail Diagnostic';
$message = "This is a diagnostic email from your Hostinger server.\n\nSent: " . date('Y-m-d H:i:s') . " UTC";

$serverName = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'zealarc.com';
if (substr($serverName, 0, 4) === 'www.') {
    $serverName = substr($serverName, 4);
}
$fromEmail = 'noreply@' . $serverName;

echo "<h2>Zealarc Mail Diagnostic on " . htmlspecialchars($serverName) . "</h2>";

// Test 1: SMTP
echo "<h3>Test 1: Hostinger SMTP Connection</h3>";
if (defined('SMTP_USER') && defined('SMTP_PASS') && !empty(SMTP_USER) && SMTP_USER !== 'your-email@domain.com') {
    echo "<p>SMTP Configured User: <strong>" . htmlspecialchars(SMTP_USER) . "</strong></p>";
    
    $host = 'ssl://smtp.hostinger.com';
    $port = 465;
    $username = SMTP_USER;
    $password = SMTP_PASS;

    $socket = @fsockopen($host, $port, $errno, $errstr, 8);
    if (!$socket) {
        echo "<p style='color: red;'><strong>SMTP Connection Failed:</strong> Could not connect to $host:$port ($errno - $errstr)</p>";
    } else {
        echo "<p style='color: green;'><strong>SMTP Connection Success:</strong> Connected to $host:$port</p>";
        
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

        $getResponse($socket);
        fwrite($socket, "EHLO " . $serverName . "\r\n");
        $getResponse($socket);

        fwrite($socket, "AUTH LOGIN\r\n");
        $getResponse($socket);

        fwrite($socket, base64_encode($username) . "\r\n");
        $getResponse($socket);

        fwrite($socket, base64_encode($password) . "\r\n");
        $authRes = $getResponse($socket);
        
        if (strpos($authRes, '235') === false) {
            echo "<p style='color: red;'><strong>SMTP Authentication Failed:</strong> Please verify your email username and password. Response: " . htmlspecialchars($authRes) . "</p>";
            fclose($socket);
        } else {
            echo "<p style='color: green;'><strong>SMTP Authentication Success!</strong> Credentials are correct.</p>";
            
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
                'Date: ' . date('r')
            );

            $data = implode("\r\n", $headers) . "\r\n\r\n" . $message . "\r\n.\r\n";
            fwrite($socket, $data);
            $dataRes = $getResponse($socket);

            fwrite($socket, "QUIT\r\n");
            fclose($socket);

            if (strpos($dataRes, '250') !== false) {
                echo "<p style='color: green; font-weight: bold;'>SMTP Mail Sent Successfully! Check your inbox at $to</p>";
            } else {
                echo "<p style='color: red;'>SMTP Mail Send Failed. Response: " . htmlspecialchars($dataRes) . "</p>";
            }
        }
    }
} else {
    echo "<p style='color: orange;'>SMTP credentials not configured in api/config.php. Skipping SMTP test.</p>";
}

// Test 2: PHP mail()
echo "<h3>Test 2: PHP mail() Function</h3>";
$headers = array(
    'From: ' . $fromEmail,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=utf-8'
);

$success = @mail($to, $subject, $message, implode("\n", $headers), "-f" . $fromEmail);

if ($success) {
    echo "<p style='color: green; font-weight: bold;'>Success! mail() returned true.</p>";
    echo "<p>Check your inbox (and spam folder) at <strong>" . htmlspecialchars($to) . "</strong>.</p>";
} else {
    echo "<p style='color: red; font-weight: bold;'>Failure! mail() returned false.</p>";
    $lastError = error_get_last();
    if ($lastError) {
        echo "<p><strong>PHP Error Details:</strong> " . htmlspecialchars($lastError['message']) . "</p>";
    } else {
        echo "<p>No PHP error details captured. This indicates the built-in mail server is disabled or blocked on this domain by your hosting provider.</p>";
    }
}
?>
