<?php

$items = array(
    0 => array(
        'name' => "学习",
        'url'  => "http://www.baidu.com",
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

$items_second = array(
    0 => array(
        'name' => "学习",
        'url'  => "http://www.baidu.com",
    ),
    1 => array(
        'name' => "学习",
        'url'  => "http://www.hao123.com",
    ),
    2 => array(
        'name' => "学习",
        'url'  => "http://www.sina.com",
    ),
    3 => array(
        'name' => "学习",
        'url'  => "http://www.sina.com",
    ),
);

$firstSrc = "home/learn/index.php";
$smarty->assign('items', $items);
$smarty->assign("items_second", $items_second);
$smarty->assign('firstSrc', $firstSrc);
$smarty->display('index.html');
die;