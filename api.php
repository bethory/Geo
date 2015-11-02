<?php

error_reporting(E_ALL & ~E_NOTICE);
error_reporting(0);
ob_start();
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include_once("core/location.php");

$loc = new location();

try {
  if(!isset($_GET['type']) || empty($_GET['type'])) {
    throw new exception("c2luIHBhcmFtZXRyb3M");
  }

  $type = $_GET['type'];
  if($type=='getCoordenadas') {
    $idMunicipio = $_GET['idMunicipio'];
    $data = $loc->getCoordenadas($idMunicipio);
  }

  if($type=='getProvincias') {
    $data = $loc->getProvincias();
  }

  if($type=='getMunicipios') {
    $proId = $_GET['proId'];
    $data = $loc->getMunicipios($proId);
  }

  if($type=='getMunicipiosAll') {
    $data = $loc->getMunicipiosAll();
  }

  if($type=='getRedes') {
    $data = $loc->getRedes();
  }
} catch (Exception $e) {
  $data = array('status'=>'error', 'tp'=>0, 'msg'=>$e->getMessage());
} finally {
  echo json_encode($data);
}