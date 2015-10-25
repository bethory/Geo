<?php
    require "../conexion.php";
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
    // echo (mysql_num_rows($resultado)!==0) ? mysql_result($resultado, 0, idProvincias) : "Todas";
    // $Municipio s=mysql_query("
    //     SELECT *
    //     FROM `Municipios`
    //     WHERE `Provincias_idProvincias` LIKE '" . $resultado . "'
    // ")
    // echo (mysql_num_rows($Municipios)!==0) ? mysql_result($Municipios, 0, Nombre) : "Todos";

?>

