<?php
include_once "./config.conf.php";

$smarty->setTemplateDir(SYSDIR_ROOT.'template/game/');

$smarty->display("index.html");