<?php
Hello world
$msg = "Foo\Bar";

$msg = wordwrap($msg, 70);

mail("JLangley753@gmail.com", "Hello world", $msg);
?>
