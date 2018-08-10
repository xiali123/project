<?php
include_once "../../config/config.conf.php";
define('SYSDIR_TEMPLATE_LEARN', SYSDIR_TEMPLATE."admin/");
define('SYSDIR_COMPILE_LEARN', SYSDIR_COMPILE."admin/");
define('SYSDIR_CACHE_LEARN', SYSDIR_CACHE."admin/");

$smarty->setTemplateDir(SYSDIR_TEMPLATE_LEARN); //设置所有模板文件存放位置
$smarty->setCompileDir(SYSDIR_COMPILE_LEARN); //设置编译过的模板存放的目录
$smarty->setCacheDir(SYSDIR_CACHE_LEARN); //设置缓存文件存放目录
