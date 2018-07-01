<?php
$servername = "50.62.209.112:3306";
$username = "dwp";
$password = "2392129040";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>