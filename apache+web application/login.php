
    <?php
    // Check if form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Validate username and password (replace with your own validation logic)
        $validUsername = "vvk";
        $validPassword = "1234";

        if ($username === $validUsername && $password === $validPassword) {
            echo "<h2>Login successful!</h2>";
        } else {
            echo "<h2>Login failed. Please try again.</h2>";
        }
    }
    ?>
