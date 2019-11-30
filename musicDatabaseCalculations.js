
function collectInput()
{
     var first, last, song, artist, instrument;

     first = document.getElementById("firstName").value;
     last = document.getElementById("lastName").value;
     song = document.getElementById("song").value;
     artist = document.getElementById("artist").value;
     instrument = document.getElementById("instrument").value;

     if (first == "" || last == "" || song == "" || artist == "" || instrument == "")
     {
          document.getElementById("txtHint").innerHTML = "One or more blank fields detected. Please fill in all options.";
     }
     else
     {
          window.location.href = '/insertRequestedSongs.html';
     }
}

function viewAllSongs(instrument)
{
     if (instrument == "")
     {
          document.getElementById("txtHintLeft").innerHTML = "No selection detected. Please make a choice.";
     }
     else
     {
          window.location.href = '/viewAllSongs.html';
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