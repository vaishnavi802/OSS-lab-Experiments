<?php
include 'db.php';
$result = mysqli_query($conn, 'SELECT * FROM sample_table');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAMP Stack Example</title>
</head>
<body>
    <h1>LAMP Stack Example</h1>

    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['name']; ?></td>
            </tr>
        <?php endwhile; ?>
    </table>

    <br>

    <h2>Add Name</h2>
    <form method="POST" action="register.php">
        <label for="new_name">New Name:</label>
        <input type="text" id="new_name" name="new_name" required>
        <input type="submit" value="Add Name">
    </form>
</body>
</html>
