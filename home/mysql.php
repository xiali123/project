<?php

$act = $_GET['act'];
if($act == "install") {
    $dbname = $_POST['dbname'];
    $sqlname = $_POST['sqlname'];
    $sqlpwd = $_POST['sqlpwd'];
    $name = $_POST['name'];
    $pwd = $_POST['pwd'];

    $shell_mysql_create_db = " ";

} else {
    $smarty->display("mysql.html");
}
die();