<?php
$conn = mysqli_connect("127.0.0.1", "jsuser", "jsuser", "sys");
if($mysqli->connect_error) 
{
  exit('Could not connect');
}

$q = strval($_GET['q']);

$splitPosition = strpos($q, ",");
$username;
$password;

for ($i = 0; $i < $splitPosition; $i++)
{
     $username[$i] = $q[$i];
}

for ($i = $splitPosition, $j = 0; $i < strlen($q); $i++, $j++)
{
     $password[$j] = $q[$i];
}

echo $username;
echo $password;

$sql = "SELECT FIRST_NAME, LAST_NAME, SONG_NAME, SONG_ARTIST FROM MUSIC_T";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_array($result))
{
     echo "logic successful";
} 

mysqli_close($conn);
 ?>