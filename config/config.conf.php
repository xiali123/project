<?php
date_default_timezone_set("Asia/Shanghai");

define('SYSDIR_ROOT', realpath(dirname(__FILE__)."/../") . DIRECTORY_SEPARATOR);
define('SYSDIR_LIBRARY', SYSDIR_ROOT."library/");
define('SYSDIR_CONFIG',  SYSDIR_ROOT.'config/');
define('SYSDIR_CACHE', 	SYSDIR_ROOT."cache/");
define('SYSDIR_TEMPLATE',SYSDIR_ROOT."template/");
define('SYSDIR_COMPILE',SYSDIR_ROOT."templates_c/");

include_once "../library/Smarty/Smarty.class.php";


$smarty = new Smarty();
$smarty->setTemplateDir(SYSDIR_ROOT.'template/'); //设置所有模板文件存放位置
$smarty->setCompileDir(SYSDIR_ROOT.'templates_c/'); //设置编译过的模板存放的目录
$smarty->setCacheDir(SYSDIR_ROOT.'cache/'); //设置缓存文件存放目录
//$smarty->setConfigDir(SYSDIR_ROOT.'configs/'); //设置模板配置文件存放目录
$smarty->caching = false; //设置Smarty缓存开关功能
$smarty->cache_lifetime = 60*60*24; //设置缓存模板有效时间一天
$smarty->left_delimiter = '<{'; //设置模板语言中的左结束符
$smarty->right_delimiter = '}>'; //设置模板语言中的右结束符