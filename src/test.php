<?php
        $recipient1 = "hefelmann@gmx.de";
        $subject = "Kontaktformular: Neue Nachricht von Henrik";
        $headers = "From:  hefelmann@gmx.de\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=utf-8";

        mb_send_mail($recipient1, $subject, "Hallo wie gehts", $headers);
?>