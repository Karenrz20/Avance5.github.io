<?php 
echo "Hola Mundo!";
?>
<? "Me llamo Roberto" ?>
<?php
$nombre = "Roberto";
$fdn  = new DateTime("2004-10-08 07:34:41");
$altura = 1.70;
$casado = false;
define("PI", 3.1416);
?>
<h1><?= $nombre ?></h1>
<h3><?= $fdn->format("D/M/Y h:i:s") ?></h3>
