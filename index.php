<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <script src="js/vendor/jquery-1.11.2.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/main.css">

</head>

<body>
    <?php
    require 'conexion.php';
    ?>
    <div id="map" class="col-xs-8"></div>
    <div class="col-xs-4">
        <h4>CRITERIOS DE GEORREFERENCIACIÓN:</h4>
        <form>
            <div class="form-group" id="lista_prov">
                <label class="col-sm-2 control-label" for="formgroup">Provincias:</label>
                <select class="form-control" id="lista_provincias">
                    <option>Todas</option>
                    <?php
                  $result=mysql_query("SELECT * FROM Provincias");
                  while ($row=mysql_fetch_array($result)) { ?>
                        <option>
                            <?php echo $row["Nombre"]; ?>
                        </option>
                        <?php
                  }
                  ?>
                </select>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" for="formgroup">Municipios:</label>
                <select class="form-control">
                    <option>Todos</option>
                    <?php
                  $result=mysql_query("SELECT * FROM Municipios");
                  while ($row=mysql_fetch_array($result)) { ?>
                        <option>
                            <?php echo $row["Nombre"]; ?>
                        </option>
                        <?php
                  }
                  ?>
                </select>
            </div>
            <div class="form-group multiple">
                <label class="col-sm-2 control-label" for="formgroup">Red:</label>
                <select class="form-control">
                    <option>Todas</option>
                    <option>Opción 1</option>
                    <option>Opción 2</option>
                    <option>Opción 3</option>
                    <option>Opción 4</option>
                </select>
            </div>
            <div class="radio-inline">
                <label>
                    <input type="radio" name="optionsRadios" id="radio_estudianes" checked> Estudiantes
                </label>
            </div>
            <div class="radio-inline">
                <label>
                    <input type="radio" name="optionsRadios" id="radio_docentes"> Docentes
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Ambito 1
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Ambito 2
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Ambito 3
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Ambito 4
                </label>
            </div>
            <div class="form-group centro">
                <button type="submit" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-ok"></span> Filtrar</button>
                <button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove"></span> Limpiar</button>
            </div>
        </form>
    </div>
    <script type="text/javascript" src="js/main.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhlSF73e8YiV_mjZCUJ3v0le6l9OFUggc&callback=initMap">
    </script>
</body>

</html>