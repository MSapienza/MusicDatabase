
function validateLogin(username, password)
{
     var user = username + "," + password;
     //TODO redirect to index

     var xhttp;
     
     if (user == "") 
     {
          document.getElementById("txtHint").innerHTML = "";
          return;
     }
     xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function() 
     {
          if (this.readyState == 4 && this.status == 200)
          {
               document.getElementById("txtHint").innerHTML = this.responseText;
          }
     };

     xhttp.open("GET", "userValidation.php?q="+user, true);
     xhttp.send();
}