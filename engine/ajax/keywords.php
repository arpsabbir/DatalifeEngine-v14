<?php
/*
=====================================================
 DataLife Engine v14.0
-----------------------------------------------------
 Persian support site: http://datalifeengine.ir
-----------------------------------------------------
 Contact us with: info@datalifeengine.ir
=====================================================
 Copyright (c) 2006-2020, All rights reserved.
=====================================================
 File: keywords.php
-----------------------------------------------------
 Use: Generation of keywords
=====================================================
*/

if(!defined('DATALIFEENGINE')) {
	header( "HTTP/1.1 403 Forbidden" );
	header ( 'Location: ../../' );
	die( "Hacking attempt!" );
}

require_once (DLEPlugins::Check(ENGINE_DIR.'/classes/parse.class.php'));

if( !$is_logged OR !$user_group[$member_id['user_group']]['allow_admin'] ) { die ("error"); }

if( $_REQUEST['user_hash'] == "" OR $_REQUEST['user_hash'] != $dle_login_hash ) {
		
	die ("error");
	
}

$parse = new ParseFilter();
$short_story = $parse->BB_Parse($parse->process($_REQUEST['short_txt']), false);
$full_story = $parse->BB_Parse($parse->process($_REQUEST['full_txt']), false);

$metatags = create_metatags ($short_story." ".$full_story, true);

$metatags['description'] = trim($metatags['description']);
$metatags['keywords'] = trim($metatags['keywords']);

if ($_REQUEST['key'] == 1) echo stripslashes($metatags['description']);
else echo stripslashes($metatags['keywords']);

?>