<?php
stripslashes(
htmlspecialchars(
$email = $_POST['user_email']
)
);
stripslashes(
    htmlspecialchars(
$name = $_POST['user_name']
)
);
stripslashes(
    htmlspecialchars(
$surname = $_POST['user_surname']
)
);
stripslashes(
    htmlspecialchars(
$phone = $_POST['user_phone']
)
);
stripslashes(
    htmlspecialchars(
$tema = $_POST['user_tema1']
)
);
stripslashes(
    htmlspecialchars(
$soobshenie = $_POST['soobshenie']
)
);


$body = '' .$name .' image.png'.$surname . ' оставил заявку, его телефон ' .$phone. 'Почта этого пользователя: ' .$email .' ' .$soobshenie;

$url = "https://api.telegram.org/bot5822089364:AAF4OXB8jNwUeO9s0nLYuVjebO3_LjG0T5g/sendMessage?";
$to = "1013957562";
$text = $url."chat_id=".$to."&text=".urlencode($body);

file_get_contents($text);   
 