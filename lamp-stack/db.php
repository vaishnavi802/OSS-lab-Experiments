<?php
$conn = mysqli_connect('mysql', 'sample_user', 'sample_password', 'sample_db');

if (!$conn) {
    die('Could not connect: ' . mysqli_connect_error());
}
