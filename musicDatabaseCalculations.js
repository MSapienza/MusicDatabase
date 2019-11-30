
function addNewRow()
{    //dynamically adds a row with correct properties for additional user input
     var table = document.getElementById("myTable");
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);

     row.setAttribute("height", "30px");

     cell1.innerHTML = cell1.innerHTML + '<input type = "text" placeholder = "Your First Name" name = "firstName[]">';
     cell2.innerHTML = cell2.innerHTML + '<input type = "text" placeholder = "Your Last Name" name = "lastName[]">';
     cell3.innerHTML = cell3.innerHTML + '<input type = "text" placeholder = "Song Name" name = "song[]">';
     cell4.innerHTML = cell4.innerHTML + '<input type = "text" placeholder = "Song Artist" name = "artist[]">';
     cell5.innerHTML = cell5.innerHTML + '<select id = "instrument"> <option value = "">Select From this Dropdown</option>' +
     '<option value = "Piano">Piano</option> <option value = "ElectricGuitar">Electric Guitar</option>' +
     '<option value = "AcousticGuitar">Acoustic Guitar</option> <option value = "Ukulele">Ukulele</option>' +
     '<option value = "Vocals">Vocals</option> </select>';
}

function removeBottomRow()
{
     //removes the bottom row of a table if the user has no further input
     var table = document.getElementById("myTable");
     table.deleteRow(-1);
}

function collectInput()
{
     var first = document.getElementById("firstName").value;
     var last = document.getElementById("lastName").value;
     var song = document.getElementById("song").value;
     var artist = document.getElementById("artist").value;
     var instrument = document.getElementById("instrument").value;

     if (first == "" || last == "" || song == "" || artist == "" || instrument == "")
     {
          document.getElementById("txtHint").innerHTML = "One or more blank fields detected. Please fill in all options.";
     }
     else
     {
          // window.location.href = '/insertRequestedSongs.html';
     }
}

function viewAllSongs(instrument)
{
     var xhttp = new XMLHttpRequest();
     
     if (instrument == "")
     {
          document.getElementById("txtHintLeft").innerHTML = "No selection detected. Please make a choice.";
     }
     else
     {
          window.location.href = '/viewAllSongs.html';

          xhttp.onreadystatechange = function() 
          {
               if (this.readyState == 4 && this.status == 200)
               {
                    document.getElementById("txtHint").innerHTML = this.responseText;
               }
          };
     
          xhttp.open("GET", "viewSongs.php?q="+instrument, true);
          xhttp.send();
     }
}

function viewTopSongs(instrument)
{
     if (instrument == "")
     {
          document.getElementById("txtHintRight").innerHTML = "No selection detected. Please make a choice.";
     }
     else
     {
          window.location.href ='viewTopSongs.html';
     }
}

//if PHP server doesn't work, close and reopen VS Code
//current PHP root: /Users/matthewsapienza/Desktop/Coding/Github Pulls/MusicDatabase