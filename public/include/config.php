<?php

define("WEB_TITLE","UBTInternational"); // Bank Name
define("WEB_URL","https://yomiyomi.xyz/archbb"); // No Ending splash
define("WEB_EMAIL","info@yomiyomi.xyz"); // Your Website Email

$web_url = WEB_URL;

function dbConnect(){
    $servername = "localhost";
    $username = "homewydm_archusr";//DATABASE USERNAME
    $password = "887^1OCo0=Bv";//DATABASE PASSWORD
    $database = "homewydm_archdb";//DATABASE NAME
    $dns = "mysql:host=$servername;dbname=$database";

    try {
        $conn = new PDO($dns, $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}
//return dbConnect();

function inputValidation($value): string
{
    return trim(htmlspecialchars(htmlentities($value)));
}