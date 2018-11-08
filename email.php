<?php
$name = isset($_POST['name']) ? $_POST['name'] : null;
$mailFrom = isset($_POST['mail']) ? $_POST['mail'] : null;
$message = isset($_POST['howicanhelp']) ? $_POST['howicanhelp'] : null;

  $message = $_POST['howicanhelp'];

  $subject = "You have received a new email.";
  $mailTo = "info@joelangley.co.uk";
  $headers = "From: ".$mailFrom;

  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
?>
