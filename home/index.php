<?php

$sql = "select * from system_model";
$result = $pdo->select($sql);

$items = array();
$items_second = array();
$d = 0;
$c = 0;
foreach($result as $key => $value) {
    if($value['parent_id'] == 0) {
        $items[$d]['name'] = $value['name'];
        $items[$d]['url'] = $value['url'];
        $d++;
    }

    if($value['parent_id'] == 4) {
        $items_second[$c]['name'] = $value['name'];
        $items_second[$c]['url'] = $value['url'];
        $c++;
    }
}

$firstSrc = "home/learn/index.php";
$smarty->assign('items', $items);
$smarty->assign("items_second", $items_second);
$smarty->assign('firstSrc', $firstSrc);
$smarty->display('index.html');
die;