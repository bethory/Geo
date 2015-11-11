<?php

require_once("dbconfig.php");
class location extends dbconfig {

  public static $data;

  function __construct() {
    parent::__construct();
  }

  public static function getCoordenadas($idMunicipio) {
    try {
      $query = "SELECT * FROM Municipios WHERE `idMunicipios`='" . $idMunicipio . "'";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("c");
      }
      $res = array();
        while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['Latitud'] .','. $resultSet["Longitud"];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"Coordenadas", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getInstituciones($municipio) {
    try {
      $query = "SELECT Sede,idInstitucionesEducativas FROM InstitucionesEducativas WHERE `Municipios_idMunicipios`='" . $municipio . "' ORDER BY Sede ASC";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("c");
      }
      $res = array();
        while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['idInstitucionesEducativas'].'|'. $resultSet["Sede"];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"Sedes", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getProvincias() {
    try {
        $query = "SELECT Nombre,idProvincias FROM Provincias ORDER BY Nombre ASC";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("p");
      }
      $res = array();
        while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['Nombre'] .','. $resultSet["idProvincias"];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"provincias", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getMunicipiosAll() {
    try {
      $query = "SELECT * FROM `Municipios` ORDER BY Nombre ASC";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("m");
      }
      $res = array();
      while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['Nombre'] .','. $resultSet['idMunicipios'];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"municipios", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getMunicipios($proId) {
    try {
      $query = "SELECT * FROM `Municipios` WHERE `Provincias_idProvincias`='" . $proId . "' ORDER BY Nombre ASC";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("m");
      }
      $res = array();
      while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['Nombre'] .','. $resultSet['idMunicipios'];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"municipios", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getRedes() {
    try {
      $query = "SELECT NombreRed FROM RedesTematicas ORDER BY NombreRed ASC";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("r");
      }
      $res = array();
      while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['NombreRed'];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"redes", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }
}