<?php
include_once "../../config/config.conf.php";
define('SYSDIR_TEMPLATE_LEARN', SYSDIR_TEMPLATE."learn/");
define('SYSDIR_COMPILE_LEARN', SYSDIR_COMPILE."learn/");
define('SYSDIR_CACHE_LEARN', SYSDIR_CACHE."learn/");

$smarty->setTemplateDir(SYSDIR_TEMPLATE_LEARN); //设置所有模板文件存放位置
$smarty->setCompileDir(SYSDIR_COMPILE_LEARN); //设置编译过的模板存放的目录
$smarty->setCacheDir(SYSDIR_CACHE_LEARN); //设置缓存文件存放目录

