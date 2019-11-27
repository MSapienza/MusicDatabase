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

$sql = "SELECT * FROM MUSIC_USERS_T WHERE USERNAME = '".$username."' AND PASSWORD = ''".$password."'";
$result = mysqli_query($conn, $sql);

if ($result)
{
     echo "logic successful";
} 
else
{
     echo "Either incorrect username or password entered. Please try again.";
}

mysqli_close($conn);
 ?>