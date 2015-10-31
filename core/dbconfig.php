<?php

class dbconfig {
  protected static $host = "localhost";
  protected static $username = "root";
  protected static $password = "";
  protected static $dbname = "diegoqui_convenio212";
  static $con;

  function __construct() {
    self::$con = self::connect(); 
  }

  protected static function connect() {
    try {
      $link = mysqli_connect(self::$host, self::$username, self::$password, self::$dbname); 
        $link->set_charset('utf8');    
        if(!$link) {
          throw new exception(mysqli_error($link));
        }
        return $link;
    } catch (Exception $e) {
      echo "error: ".$e->getMessage();
    } 
  }

  public static function close() {
    mysqli_close(self::$con);
  }

  public static function run($query) {
    try {
      if(empty($query) && !isset($query)) {
        throw new exception("ZXJyb3IgZW4gbGEgcXVlcnk");
      }
      $result = mysqli_query(self::$con, $query);
      self::close();
      return $result;
    } catch (Exception $e) {
      echo "error: ".$e->getMessage();
    }
  } 
}