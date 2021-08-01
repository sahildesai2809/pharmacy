<?php

$con =mysqli_connect('localhost','root');
mysqli_select_db($con,'ajax');

$q = 'select * from details';

$query = mysqli_query($con,$q);

$result = mysqli_fetch_array($query);

 echo $result['information']; 


?>