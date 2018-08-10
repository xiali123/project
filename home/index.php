<?php

$items = array(
    0 => array(
        'name' => "学习",
    ),
    1 => array(
        'name' => "学习",
    ),
    2 => array(
        'name' => "学习",
    ),
    3 => array(
        'name' => "学习",
    ),
);

$firstSrc = "home/learn/index.php";
$smarty->assign('items', $items);
$smarty->assign('firstSrc', $firstSrc);
$smarty->display('index.html');
die();