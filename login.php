
<?php
//login.php
session_start();
require_once 'dbconfig.php';

if(isset($_POST['btn-login']))
{

$user_name=$_POST['user_name'];
$password=$_POST['password'];


try
{	

$stmt = $db->prepare("SELECT * FROM `login-dwp` WHERE User=:user_name");
$stmt->execute(array(":user_name"=>$user_name));
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$count = $stmt->rowCount();

if($row['Pass']==$password){

echo "ok"; // log in


}
else{

echo "Username or password does not exist."; // wrong details 
}

}
catch(PDOException $e){
echo $e->getMessage();
}
}

?>