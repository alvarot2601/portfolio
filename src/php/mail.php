<?php 
	
	$asunto = 'Formulario Rellenado';


	if(mail('alvarot2601@gmail.com', 'asunto', 'mensaje')){
		echo "Correo enviado";
	}
 ?>