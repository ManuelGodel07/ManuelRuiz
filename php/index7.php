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
        <form name="envio-get_frm" action="envio.php" methd="GET" enctype="application/x-www-form-urlencoded">
            <label>Ingresa tu nombre</label>
            <input type="text" name="nombre_txt"/>

        </form>

        <?php
            include("conexion.php")
        ?>   
    </body>
</html>