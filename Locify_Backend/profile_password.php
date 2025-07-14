<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data["id"];
$profile_password = $data["profilePassword"];

$result = $obj->query("SELECT * FROM register WHERE profile_password='$profile_password' AND user_id='$id'");

$rowcount = $result->num_rows;

if ($rowcount == 1) {
    $row = $result->fetch_object();
    $response = ["message" => "Profile Password Matched Successfully", "user" => $row];
    echo json_encode($response);
} else {
    $response = ["message" => "Invalid Profile Password"];
    echo json_encode($response);
}
?>
