<?php


if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "turvey.am@gmail.com";
    $headers = "From: ". $mailFrom;
    $txt = "You have recieved an email from ". $name. $message;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend")
}
