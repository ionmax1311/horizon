
<?php 
$phone = $_POST['field0'];
$res = $_POST['field1'];

$ctx = stream_context_create(array( 
    'http' => array( 
        'timeout' => 1 
        ) 
    ) 
); 
file_get_contents('https://smsc.ru/sys/send.php?login=gwu&psw=*******R&phones=' .$phone.'&mes='.$res.'-ваш код подтверждения на ************'.'&charset=utf-8', 0, $ctx); 
?>
