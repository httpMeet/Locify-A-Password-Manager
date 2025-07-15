<?php

include 'connection.php';
include 'enc.php';

$data = json_decode(file_get_contents("php://input"), true);

$reg_id = $data["reg_id"];
$wid = $data["wid"];

$result = $obj->query("SELECT * FROM website WHERE reg_id='$reg_id' AND web_id='$wid'");

if ($row = $result->fetch_object()) {
    $row->password = decryptString($row->password, $secretkey);
    $response = [
        "message" => "Website Details Fetched Successfully",
        "website" => $row
    ];
} else {
    $response = [
        "message" => "No website found",
        "website" => null
    ];
}

echo json_encode($response);
?>
