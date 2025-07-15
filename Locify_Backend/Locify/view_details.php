<?php

    include 'connection.php';

    $data = json_decode(file_get_contents("php://input"), true);

    $reg_id = $data["reg_id"];
    $wid = $data["wid"];

    $result = $obj->query("select * from website where reg_id='$reg_id' and web_id='$wid'");

    $row = $result->fetch_object();
    $response = ["message"=>"website Details Fetched Successfully","website"=>$row];
    echo json_encode($response);
?>