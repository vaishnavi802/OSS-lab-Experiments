<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve username and password from the POST request
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Replace the following condition with your actual verification logic
    if ($username === "example" && $password === "password") {
        echo "User verified!";
    } else {
        echo "Invalid credentials. Please try again.";
    }
} else {
    // Handle non-POST requests if needed
    echo "Invalid request method.";
}
?>
