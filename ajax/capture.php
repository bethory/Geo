<?php
    require "../conexion.php";
    if (strcmp($_POST['provincia'], "Todas") !== 0) {
        $resultado=mysql_query("
            SELECT *
            FROM `Provincias`
            WHERE `Nombre` LIKE '" . mysql_escape_string($_POST['provincia']) . "'
        ");
        // echo gettype($resultado), "\n"; //devuelve una variable tipo "resource"
        // echo get_resource_type($resultado) . "\n"; // devuelve "mysql result"
        $idProvincia=mysql_result($resultado, 0); //convertimos el resultado en un string
        $resultado=mysql_query("
            SELECT *
            FROM `Municipios`
            WHERE `Provincias_idProvincias`='" . $idProvincia . "'
        ");
        while ($fila = mysql_fetch_array($resultado)) {
            echo '<option value="'.$fila['idMunicipios'].'">'.$fila['Nombre'].'</option>';
        };
    }else{
        $resultado=mysql_query("
            SELECT *
            FROM `Municipios`
        ");
        while ($fila = mysql_fetch_array($resultado)) {
            echo '<option value="'.$fila['idMunicipios'].'">'.$fila['Nombre'].'</option>';
        };
    }
?>

