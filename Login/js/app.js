function signIn(){
  var ajax = new XMLHttpRequest(), parameters = "login=" + document.getElementById('login') +
  "&var0=" + document.getElementById('user').value +
  "&var1=" + document.getElementById('password').value;
  ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var obj = this.responseText.substring(1,this.responseText.length-1).split(",");
      document.getElementById('responseData').innerHTML =
      "<p>Name: " + obj[0].substring(1, obj[0].length-1) + "</p>" +
      "<p>Surname: "+ obj[1].substring(1, obj[1].length-1) + " " + obj[2].substring(1, obj[2].length-1) + "</p>"+
      "<p>User: "+ obj[3].substring(1, obj[3].length-1) + "</p>"+
      "<p>Mail: "+ obj[5].substring(1, obj[5].length-1) + "</p>";
    }
  }
  ajax.open("POST", "findUsers.php", true);
  ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  ajax.send(parameters);
}
function register(){
  var ajax = new XMLHttpRequest(), parameters ="register=" + document.getElementById('register')
  + "&var0=" + document.getElementById('name').value
  + "&var1=" + document.getElementById('patern').value
  + "&var2=" + document.getElementById('matern').value
  + "&var3=" + document.getElementById('nick').value
  + "&var4=" + document.getElementById('password').value
  + "&var5=" + document.getElementById('mail').value;
  ajax.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      alert(this.responseText);
      if(this.responseText.localeCompare("New record created successfully") == 0){
        window.location.href = "http://localhost/Login/index.html";
      }
    }
  }
  ajax.open("POST", "findUsers.php", true);
  ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  ajax.send(parameters);
}
