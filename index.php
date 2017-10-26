<?php
# en este index mostraremos la salida de las vistas al usuario y tambien a traves de
#el enviaremos las distinas acciones que el usuario envie al controlador
require_once "controllers/controller.php";


$mvc = new MvcController();
$mvc -> plantillas();

 ?>
