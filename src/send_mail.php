<?php

########### CONFIG ###############

$recipient1 = 'henrik.hefelmann@gmail.com';
$redirect = 'https://www.hefelmann.com/message-sent';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: content-type");

$data = json_decode(file_get_contents('php://input'), true);
$subject = "Kontaktformular: Neue Nachricht von " . $data["name"];
$headers = "From:  ".$data["email"]."\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=utf-8";

if (strpos($data['email'], "@") > 0) {
mb_send_mail($recipient1, $subject, $data["name"]." (". $data["email"].") schreibt: \r\n\r\n<br><br>". $data["message"], $headers);
# echo json_encode($data);
# header("Location: " . $redirect); 
}



?>
