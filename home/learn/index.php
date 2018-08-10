<?php
include_once "./config.conf.php";

$smarty->setTemplateDir(SYSDIR_ROOT.'template/learn/');

$smarty->display("index.html");