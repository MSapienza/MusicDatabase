
function validateLogin()
{
     var user = document.getElementById("username").value;
     var pass = document.getElementById("password").value;

     var userDetails = username + "," + password;
     document.getElementById("txtHint").innerHTML = userDetails;
     //TODO redirect to index

     var xhttp;
     
     if (userDetails == "") 
     {
          document.getElementById("txtHint").innerHTML = "";
          return;
     }
     xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function() 
     {
          if (this.readyState == 4 && this.status == 200)
          {
               // document.getElementById("txtHint").innerHTML = this.responseText;
          }
     };

     xhttp.open("GET", "userValidation.php?q="+userDetails, true);
     xhttp.send();
}

function createNewUser(usernameNew, passwordNew)
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

     xhttp.open("GET", "userCreation.php?q="+user, true);
     xhttp.send();

}

//if PHP server doesn't work, close and reopen VS Code
//current PHP root: /Users/matthewsapienza/Desktop/Coding/Github Pulls/MusicDatabase