<?php 
    $recepient = "egorkharlamov070793@gmail.com";
    $sitename = "Ведущий Егор Харламов";
    
    $name = trim($_POST['name']);
    $secondName = trim($_POST['secondName']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);
    $email = trim($_POST['email']);


    mail($recepient, $sitename, $name, $secondName, $phone, $message, $email );

?>