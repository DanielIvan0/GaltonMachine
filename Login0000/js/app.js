if(document.getElementById('submit')!=null){
  document.getElementById('submit').onclick = function(){
    var name0 = document.getElementById('name'),
    mail0 = document.getElementById('mail'),
    pass0 = document.getElementById('pass'),
    ajax = XMLHttpRequest();
    obj_son = {
      submit:true,
      name:name0.value,
      mail:mail0.value,
      pass:pass0.value
    };
    var p = JSON.stringify(obj_son);
    ajax.onreadystatechange = function(){
      if(document.getElementById('name').value!=""&&document.getElementById('mail').value!=""&&document.getElementById('pass').value!=""){
        document.getElementById('mensaje').innerHTML = ajax.responseText;
      }
      ajax.open("POST","registro.php",true);
      ajax.setRequestHeader("Content-type","application/json");
      ajax.send(p)
    };
  }
}
