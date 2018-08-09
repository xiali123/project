<?php

//自动加载函数
function autoload($className) {
    //file_exists("../library/".$className.".class.php");
    $root_dir = realpath(dirname(__FILE__)."/../") . DIRECTORY_SEPARATOR;
    $fileName = $root_dir."library/".$className.".class.php";
    if(file_exists($fileName)) {
        include_once "../library/".$className.".class.php";
    }
}