<?php
function encryptString($plaintext, $secretkey) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $secretkey, true); 
    $iv = openssl_random_pseudo_bytes(16);  
    $encrypted = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
    return base64_encode($iv . $encrypted); 
}

function decryptString($ciphertext, $secretkey) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $secretkey, true);
    $data = base64_decode($ciphertext);
    $iv = substr($data, 0, 16);
    $encryptedtext = substr($data, 16);
    return openssl_decrypt($encryptedtext, $method, $key, OPENSSL_RAW_DATA, $iv);
}


    $secretkey = "meet81104";
?>