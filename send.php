<?php
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require_once('phpMailer/PHPMailer.php');
require_once ('phpMailer/SMTP.php');
require_once ('phpMailer/Exception.php');

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'nerakont555@gmail.com';                     // SMTP username
    $mail->Password   = '36191545s';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('nerakont555@gmail.com');
    $mail->addAddress('inglish-333@mail.ru');  
        // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Новая заявка с сайта";
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";
    if(empty(${userEmail})){
        if(empty(${userQuestion})){
            $mail->Body    = "Имя пользователя: ${userName}, телефон: ${userPhone}. Заявка на онлайн контроль";
        } else {
        $mail->Body   = "Имя пользователя: ${userName}, телефон: ${userPhone}. Вопрос: ${userQuestion}";
        }
    };
    
   
    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
    
    
    
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}