<?php
$nameErr = $mailFromErr = "";
$name = $mailFrom = "";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if (isset($_POST['submit'])) {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["mail"])) {
    $mailFromErr = "Email is required";
  } else {
    $mailFrom = test_input($_POST["mail"]);
    if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
      $mailFromErr = "Invalid email format";
    }
  }

  $message = $_POST['howicanhelp'];

  $subject = "You have received a new email.";
  $mailTo = "panono@zippiex.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
  };
?>
