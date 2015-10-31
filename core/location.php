<?php

require_once("dbconfig.php");
class location extends dbconfig {
   
   public static $data;

   function __construct() {
     parent::__construct();
   }
 
  // Fetch
  public static function getProvincias() {
    try {
      $query = "SELECT * FROM Provincias";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("UHJvdmluY2lhcw");
      }
      $res = array();
        while($resultSet = mysqli_fetch_assoc($result)) {        
        $res[] = $resultSet['Nombre'];
      }
      $data = array('status'=>'success', 'tp'=>1, 'msg'=>"provincias", 'result'=>$res);
    } catch (Exception $e) {
      $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
    } finally {
      return $data;
    }
  }

  public static function getMunicipios($countryId) {
    try {
      $query = "SELECT * FROM `Municipios` WHERE `Provincias_idProvincias`='" . $countryId . "'";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("TXVuaWNpcGlvcw");
      }
      $res = array();
      while($resultSet = mysqli_fetch_assoc($result)) {
        $res[] = $resultSet['Nombre'] .','. $resultSet['Latitud'] .','. $resultSet['Longitud'];
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
      $query = "SELECT NombreRed FROM RedesTematicas";
      $result = dbconfig::run($query);
      if(!$result) {
        throw new exception("ZXJyb3IgY2FyZ2FuZG8gcmVkZXM");
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