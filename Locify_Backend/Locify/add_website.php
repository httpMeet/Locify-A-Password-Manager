<?php


include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$web_name = $data['webSiteName'];
$username = $data['username'];
$password = $data['password'];
$reg_id = $data['id'];

$exe = $obj->query("INSERT INTO website(web_name, username, password, reg_id) VALUES('$web_name', '$username', '$password', '$reg_id')");

if ($exe) {
    $inserted_id = $obj->insert_id;
    $res = $obj->query("SELECT * FROM website WHERE web_id = '$inserted_id'");
    $row = $res->fetch_object();

    $response = [
        "message" => "Website Details Added Successfully",
        "website" => $row,
        "status" => true
    ];
    echo json_encode($response);
} else {
    $response = [
        "message" => "Error Try Again",
        "status" => false
    ];
    echo json_encode($response);
}
?>
