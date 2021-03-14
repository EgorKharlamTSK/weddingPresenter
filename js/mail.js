$(document).ready(function() {

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Спасибо за отклик! Я скоро с Вами свяжусь!")
        });
        return false;
    });

});