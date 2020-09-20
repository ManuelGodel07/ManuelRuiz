<!DOCTYPE html>
<html lang="es-MES">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHP</title>
        <link rel="stylesheet" type="text/css" href="#">
        <link rel="shortcut icon" href="../favicon/man.ico">
    </head>
    <body>
        <hgroup>
            <h1>Formulario</h1>
        </hgroup>
        <form name="envio-post_frm" action="envio.php" method="POST" enctype="application/x-www-form-urlencoded">
            <label>Ingresa tu nombre</label>
            <input type="text" name="nombre_txt"/>
            <label>Ingresa tu contraseña</label>
            <input type="password" name="password_txt"/>

            <input type="submit" name="enviar_btn" value="Enviar"/> 
        </form>

        <?php
            include("conexion.php")
        ?>   
    </body>
</html>