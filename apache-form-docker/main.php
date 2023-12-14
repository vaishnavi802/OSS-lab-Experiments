<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the submitted username and password
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate the username and password (replace this with your authentication logic)
    if ($username === "Ritesh Ram Wanave" && $password === "root") {
        echo "Login successful!";
    } else {
        echo "Login failed. Please check your username and password.";
    }
}
?>
