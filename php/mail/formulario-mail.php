<!DOCTYPE html>
<html lang="es-MEX">
<head>
<meta http-equiv="X-UA-Compatible" content="IE-Chrome-1">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0 maximum-scale=1.0 minimum-scale=1.0 shrink-to-fit=no">
		<meta description= "Manuel Ruiz">
		<meta name="keywords" content="Formulario de correos">
		<link rel="stylesheet" type="text/css" href="..\CSS\style11.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<title>Manuel Ruiz</title>
	<script>
		function validarForm(){
			let verificar = true;
			var expRegEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if(!document.mail_frm.de_txt.value){
					alert("El campo 'De' es requerido");
					document.mail_frm.de_txt.focus();
					verificar = false;	
			} else if(!expRegEmail.exec(document.mail_frm.para_txt.value)){
					alert("El campo 'Para' no es válido");
					document.mail_frm.para_txt.focus();
					verificar = false;
			} else if(!document.mail_frm.asunto_txt.value){
					alert("El campo 'Asunto' es requerido");
					document.mail_frm.asunto_txt.focus();
					verificar = false;	
			} else if(!document.mail_frm.mensaje_txa.value){
					alert("El campo 'Mensaje' es requerido");
					document.mail_frm.mensaje_txa.focus();
					verificar = false;	
			}else if(!document.mail_frm.archivo_fls.value){
					alert("El campo 'Archivo' es requerido");
					document.mail_frm.archivo_fls.focus();
					verificar = false;	
			}
			if(verificar){
				document.mail_frm.submit();
			}
		}

		window.onload = function(){
			document.mail_frm.enviar_btn.onclick = validarForm;
		}

	</script>
</head>
<body>
	<form name="mail_frm" action="enviar-mail.php" method="post" enctype="multipart/form-data">
		
		De: <input type="text" name="de_txt"/><br/><br/>
		Para: <input type="text" name="para_txt"/><br/><br/>
		Asunto: <input type="text" name="asunto_txt"/><br/><br/>
		Mensaje:<br/><textarea name="mensaje_txa"></textarea><br/><br/>
		Adjuntar archivo: <input type="file" name="archivo_fls"/></br>
		<input type="button" name="enviar_btn" value="Enviar"/><br/>


		<?php
		error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
		if(isset($_GET["respuesta"])){
			echo "<span>". $_GET["respuesta"] . "</span>";
		}
		?>
	</form>
</body>
</html>