<?php
header("Content-Type: application/json");
include 'connection.php';
include 'enc.php';

$data = json_decode(file_get_contents("php://input"), true);

$web_id = $data['web_id'];
$reg_id = $data['reg_id'];
$new_password = $data['new_password'];

if (!$web_id || !$reg_id || !$new_password) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

$encrypted_password = encryptString($new_password, $secretkey);


$query = $obj->prepare("UPDATE website SET password = ? WHERE web_id = ? AND reg_id = ?");
$query->bind_param("sii", $encrypted_password, $web_id, $reg_id);

if ($query->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Update failed"]);
}
?>
