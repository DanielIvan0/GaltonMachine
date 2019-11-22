document.getElementById("login").onclick=function(){

var ajax=new XMLHttpRequest();
ajax.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    //se ejecuta esta accion solo cuando la pagina ha sido cargada completamente
    document.getElementById("mensaje").innerHTML=ajax.responseText;
  }
};
var params=document.getElementById("login").name+"="+document.getElementById("login").value+"&"+document.getElementById("usu").name+"="+document.getElementById("usu").value+"&"+document.getElementById("contra").name+"="+document.getElementById("contra").value;
console.log(params);
ajax.open("POST","api/logincheck.php",true);
ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
ajax.send(params);
};
