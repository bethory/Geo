<?php
    //Conexión a la base de datos
    $con=mysql_connect("", "", "");
    mysql_set_charset('utf8');
    mysql_select_db("", $con) or die("conexión no establecida");
?>