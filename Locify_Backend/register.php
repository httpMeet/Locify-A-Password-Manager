<?php
    include 'connection.php';

    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['Name'];
    $email = $data['Email'];
    $contact = $data['Contact'];
    $password = $data['Password'];
    $profile_password = $data['ProfilePassword'];

    $exe = $obj->query("INSERT INTO register(name, email, contact, password, profile_password) VALUES('$name', '$email', '$contact', '$password', '$profile_password')");

    if ($exe) {
        $id = $obj->insert_id;
        $res = $obj->query("SELECT * FROM register WHERE user_id='$id'");
        $row = $res->fetch_assoc();

        $response = [
            "message" => "Registered Successfully",
            "user" => $row,
            "status" => true
        ];
    } else {
        $response = [
            "message" => "Please Try Again",
            "status" => false
        ];
    }

    echo json_encode($response);
?>
