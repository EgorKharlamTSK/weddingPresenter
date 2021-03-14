<?php
    $name = $_POST['name'];
    $secondName = $_POST['secondName'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $email = $_POST['email'];


    if (mail("test@test", "Форма с сайта-визитки", "Имя:".$name.". E-mail: ".$email, "Фамилия:".$secondName, "Телефон:".$phone, "Сообщение:".$message ,"From: example2@mail.ru \r\n"))
        {
            echo "сообщение успешно отправлено";
        } else {
            echo "при отправке сообщения возникли ошибки";
        }
?>