<?php
/*if(isset($_POST['login'])){
  echo("usuario registrado");
}

else{
echo("Error... Acceso no autorizado");

}
*/

$id_conexion=mysqli_connect('localhost','root','','base_usuarios');
if ($id_conexion==false) {
echo "Error,no se puede conectar al servidor..." .mysqli_connect_errno();
}
else {
  $consulta="SELECT Contrasena FROM `usuarios` WHERE Nombre=\"".$_POST['usu']."\"";
  $result=mysqli_query($id_conexion,$consulta);
  if ($result->num_rows>0) {
    $arrayResult=mysqli_fetch_array($result);
echo $arrayResult['Contrasena'];
    }
    else {
      echo "Usuario no encontrado";
    }
}



 ?>
