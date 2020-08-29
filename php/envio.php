<?php
    if (isset($_POST["enviar_btn"])) {
        echo "exito";
        echo "El nombre es: " . $_POST["nombre_txt"];
        echo "La contraseña es: " . $_POST["password_txt"];
    } else {
        echo "tristeza";
    }
    





?>