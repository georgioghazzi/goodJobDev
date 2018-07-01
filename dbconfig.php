<?php
//The code below demonstrates a PDO connection to a database and a try catch block that will display errors about the connection if an exception is thrown. You will need to add your own database name, user and password for this PDO to work on your own project.


    $dsn = 'mysql:host=50.62.209.112:3306;dbname=DWP-DB';
    $username = 'dwp';
    $password = '2392129040';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
     
        exit();
    }
?>