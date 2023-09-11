<?php

$tover_name = $_POST['tovar_item_txt'];
$tovar_price = $_POST['tovar_item_price'];
$fullprice = $_POST['full_price'];
$colvo = $_POST['tovar_item_colvo'];
$size = $_POST['tovar_item_size'];



$body = '' .$tover_name .' размер '.$size .' стоит '.$tovar_price .' заказали в размере '.$colvo .' все вышло на: ' .$fullprice;
$url = "https://api.telegram.org/bot5822089364:AAF4OXB8jNwUeO9s0nLYuVjebO3_LjG0T5g/sendMessage?";
$to = "1013957562";
$text = $url."chat_id=".$to."&text=".urlencode($body);

file_get_contents($text);  