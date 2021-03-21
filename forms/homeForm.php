<?php
session_cache_limiter( 'nocache' );

$to = "tevanyan94@mail.ru";


$subject = 'Birthday Reminders for August';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

$message  = 'anun: ' . $_POST['hfFirstName'] . "<br>";
$message .= 'az: ' . $_POST['hfLastName'] . "<br>";
$message .= 'hfDateOfBirth: ' . $_POST['hfDateOfBirth'] . "<br>";
$message .= $_POST['message'];
print_r($message);

if (@mail($to, $subject, $message, $headers))
{
	echo 'sent';
}
else
{
	echo 'failed';
}
?>
