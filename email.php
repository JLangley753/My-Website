<?php
$nameErr = $mailFromErr = "";
$name = $mailFrom = "";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  $message = $_POST['howicanhelp'];

  $subject = "You have received a new email.";
  $mailTo = "info@joelangley.co.uk";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header('Location: thank-you.html');
  echo "<script>
    window.onload(function() {
      var modal = document.getElementById('myModal');
      modal.classList.add('showmodal');
      setTimeout(function closemodal() {
        modal.classList.remove('showmodal');
      }, 5000)
    })
  </script>";
?>
