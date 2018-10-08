<?php
/* Smarty version 3.1.32, created on 2018-08-04 11:26:29
  from '/home/project/template/index.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5b651ce51a7d84_68978843',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '566d272cb1e6270298a5d4f6c46a530acc991293' => 
    array (
      0 => '/home/project/template/index.html',
      1 => 1533353186,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b651ce51a7d84_68978843 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>
        夏立的个人系统
    </title>

</head>
<body>
<div id="loading">
    <div class="loading-indicator">
        <img src="static/images/loadinga.gif"   style="margin-right:8px;" align="absmiddle"/>
        页面加载中....
        <span id="loading-msg">
                </span>
    </div>
</div>

<div><iframe src="<?php echo $_smarty_tpl->tpl_vars['left']->value;?>
" seamless></iframe></div>
<div><iframe src="<?php echo $_smarty_tpl->tpl_vars['right']->value;?>
"  seamless></iframe></div>
</body>
</html>
<?php }
}
