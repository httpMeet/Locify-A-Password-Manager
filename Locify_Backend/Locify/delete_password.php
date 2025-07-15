<?php
header("Content-Type: application/json");
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$web_id = $data['web_id'];
$reg_id = $data['reg_id'];

if (!$web_id || !$reg_id) {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$query = $obj->prepare("DELETE FROM website WHERE web_id = ? AND reg_id = ?");
$query->bind_param("ii", $web_id, $reg_id);

if ($query->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Delete failed"]);
}
?>
