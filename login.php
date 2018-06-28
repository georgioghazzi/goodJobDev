
<?php
//login.php
session_start();
$connect = mysqli_connect("50.62.209.112:3306", "dwp", "2392129040", "DWP-DB");
if(isset($_POST["User"]) && isset($_POST["Pass"]))
{
 $User = mysqli_real_escape_string($connect, $_POST["User"]);
 $Pass = md5(mysqli_real_escape_string($connect, $_POST["Pass"]));
 $sql = "SELECT * FROM `login-dwp` WHERE User = '".$User."' AND Pass = '".$Pass."'";
 $result = mysqli_query($connect, $sql);
 $num_row = mysqli_num_rows($result);
 if($num_row > 0)
 {
  $data = mysqli_fetch_array($result);
  $_SESSION["User"] = $data["User"];
  echo $data["User"];
 }
}
?>