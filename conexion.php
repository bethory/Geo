<?php
    //Conexión a la base de datos
    $con=mysql_connect("diegoquiroga.com", "diegoqui_usuario", "proyecto212");
    mysql_set_charset('utf8');
    mysql_select_db("diegoqui_convenio212", $con) or die("conexión no establecida");
?>