<?php
session_start();
include_once "config/config.conf.php";

/**************************mysql数据库创建(验证)***********************************/
$str = file_get_contents('./config/install.txt');
if($str == 1) {
    include_once "home/mysql.php";
}
/**************************mysql数据库创建(验证)***********************************/

/**************************authenticate(验证)***********************************/

/**************************authenticate(验证)***********************************/

//文件入口
$is_login = $_SESSION['is_login'];

if(!$is_login) {
    include_once "home/login.php";
} else {
    include_once "home/index.php";
}



