<?php
include_once "./config/config.php";

$smarty->assign("left", "./home/left.php");
$smarty->assign("right", "./home/right.php");
$smarty->display("index.html");