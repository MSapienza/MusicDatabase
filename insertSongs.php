<?php
$conn = mysqli_connect("127.0.0.1", "jsuser", "jsuser", "sys");
if($mysqli->connect_error) 
{
  exit('Could not connect');
}

$q = strval($_GET['q']);
$splitPosition = strpos($q, ",");
$username = "";
$password = "";
$trueFalse;

for ($i = 0; $i < $splitPosition; $i++)
{
     $username[$i] = $q[$i];
}

for ($i = $splitPosition+1, $j = 0; $i < strlen($q); $i++, $j++)
{
     $password[$j] = $q[$i];
}

$sql = "SELECT * FROM MUSIC_T WHERE USERNAME = '".$username."' AND PASSWORD = '".$password."'";
$result = mysqli_query($conn, $sql);

if ($result->num_rows > 0)
{
     echo "Login successful";
     $trueFalse = true;
} 
else
{
     echo "Either incorrect username or password entered. Please try again.";
     $trueFalse = false;
}

mysqli_close($conn);
?>