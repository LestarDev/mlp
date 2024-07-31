<?php

header("Access-Control-Allow-Origin: https://lestardev.github.io");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");

 

$config = require_once("dbConfig.php");

$sql = $_GET["SQL"];

$con = mysqli_connect($config["dbHost"],$config["dbUserName"],$config["dbPassword"],$config["dbName"]);

 if(!$con){
    mysqli_close($con);
        // header("Location: ".$url);
echo "Con error";
    exit();
 }else{
    // $query_uzytkownik = "SELECT postacie.nick, postacie.lvl, postacie.HP, postacie.Cialo, postacie.Umysl, postacie.Urok, postacie.Zrecznosc, postacie.Niezlomnosc, postacie.Intuicja, postacie.Szczescie, postacie.Slimaki FROM `postacie` WHERE postacie.id_uzytkownika='$id';";
    $res_uzytkownik = mysqli_query($con, str_replace(array('+'),' ',$sql));
    
    if(!$res_uzytkownik) {echo json_encode($tabError); return;}

    echo $res_uzytkownik;
    
    
 }

?>