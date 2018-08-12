<?php
function define_fuc($arr = array()) {
    foreach($arr as $key => $value) {
        define($key, $value);
    }
}

function include_fuc($arr = array(), $dir = "") {
    switch($dir) {
        case "./config":
            $ext = "conf";
            break;

        case "./authenticate":
            $ext = "auth";
            break;
    }
    foreach($arr as $key => $value) {
        include_once $dir."/".$key.".".$ext.".php";
    }
}