<?php

$act = $_GET['act'];
if($act == "install") {
    $dbname = $_POST['dbname'];
    $sqlname = $_POST['sqlname'];
    $sqlpwd = $_POST['sqlpwd'];
    $name = $_POST['name'];
    $pwd = $_POST['pwd'];


} else {
    $smarty->display("mysql.html");
}
die();