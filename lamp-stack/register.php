<?php
include 'db.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newName = mysqli_real_escape_string($conn, $_POST['new_name']);

    // Insert new name into the existing table
    $insertQuery = "INSERT INTO sample_table (name) VALUES ('$newName')";

    if (mysqli_query($conn, $insertQuery)) {
        header("Location: index.php"); // Redirect to index.php after successful addition
        exit();
    } else {
        echo "Error: " . $insertQuery . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Name</title>
</head>
<body>
    <!-- No need for additional content here, as it redirects to index.php -->
</body>
</html>
