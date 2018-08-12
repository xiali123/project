<?php
date_default_timeZone_set("Asia/Shanghai");

//常量定义
define("ROOT", "./");
define("CONFIG", "./config");
define("LIBRARY", "./library");
define("HOME", "./home");
define("PUBLIC", "./Public");
define("COMMENT", "./comment");
define("AUTHENTICATE", "./authenticate");

include_once "library/Smarty/Smarty.class.php";
include_once COMMENT."/config.function.php";
include_once CONFIG."/include.conf.php";

$smarty = new Smarty();
$smarty ->caching = false;

$smarty->template_dir = './template';
$smarty->compile_dir = './tpl_c';
$smarty->config_dir = './config/smarty';
$smarty->cache_dir = './cache/';
$smarty->left_delimiter = "<{";
$smarty->right_delimiter = "}>";