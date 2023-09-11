<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require('PHPMailer-master/src/PHPMailer.php');
require('PHPMailer-master/src/SMTP.php');
require('PHPMailer-master/src/Exception.php');
$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

$mail->setFrom('snxkrs.kz@mail.ru', 'Mailer');


$email = $_POST['user_email'];
$name = $_POST['user_name'];
$surname = $_POST['user_surname'];
$phone = $_POST['user_phone'];
$tema = $_POST['user_tema1'];
$soobshenie = $_POST['soobshenie'];

$body = '' .$name .$surname . ' оставил заявку, его телефон ' .$phone. 'Почта этого пользователя: ' .$email .$soobshenie;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'ssl://smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'snxkrs.kz@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '12122006RoDiiioN'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров


$mail->addAddress('snxkrs.kz@gmail.com');
$mail->Subject = $tema;
$mail->Body = $body;
echo "<pre>";
print_r($mail);
echo "</pre>";
try{
    $resual = $mail->send();
    print_r($resual);
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
