<?php

    include 'connection.php';

    $reg_id = $_POST["reg_id"];
    $wid = $_POST["wid"];

    $result = $obj->query("select * from website where reg_id='$reg_id' and web_id='$wid'");

    $row = $result->fetch_object();
    $response = ["message"=>"website Details Fetched Successfully","website"=>$row];
    echo json_encode($response);
?>