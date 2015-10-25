<?php
    require "../conexion.php";
    $query=mysql_query("
        SELECT *
        FROM `Provincias`
        WHERE `Nombre` LIKE '" . mysql_escape_string($_POST['provincia']) . "'
    ");
    echo (mysql_num_rows($query)!==0) ? mysql_result($query, 0, idProvincias) : "no encontrada";
?>