
<?php
session_start();
require_once 'dbconfig.php';
if(isset($_POST['btn-vote']))
{

	$User=$_SESSION['User'];    
	$Vote=$_POST['Vote'];



    try
{	

$stmt = $db->prepare("SELECT * FROM `votes-dwp` WHERE User=:user_name");
$stmt->execute(array(":user_name"=>$User));
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$count = $stmt->rowCount();

if($count ==0){
    $stmt2 = $db->prepare("UPDATE votes SET Votes=Votes+1 WHERE Names=:Vote");
    $stmt2->execute(array(":Vote"=>$Vote));
    $stmt3 = $db->prepare("INSERT INTO `votes`(`ID`, `Names`, `User`, `Votes`) VALUES (?,?,?,?)");
    $stmt3->execute(array(["", $Vote,$User,""]));
    


echo "ok"; // log in



}
else{

echo "err";

}

}
catch(PDOException $e){
echo $e->getMessage();
}
}

?>

