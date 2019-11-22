<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signin";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST['login'])){
  $sql = "SELECT * from `users` WHERE `nick` ='".$_POST['var0']."'";
  $result = mysqli_query($conn, $sql);
  $rows = mysqli_fetch_row($result);
  if($rows > 0){
    $key = keys();
    if(strcmp($_POST['var1'], $rows[4])==0){
      $rows = json_encode($rows);
      echo $rows;
    }else{
        echo "User or password are incorrect";
    }
  }else{
    echo "User or password are incorrect";
  }
}else if(isset($_POST['register'])){
  $sql = "INSERT INTO `users`(`name`, `paternSurname`, `maternSurname`, `nick`, `password`, `mail`)
          VALUES('".$_POST['var0']."', '".$_POST['var1']."', '".$_POST['var2']."', '".$_POST['var3']."', '".$_POST['var4']."', '".$_POST['var5']."')";

  if($conn->query($sql) === TRUE){
     echo "New record created successfully";
  }else{
     echo "Error creating the new record";
  }
}else{
  echo "Error";
}
$conn->close();
?>
