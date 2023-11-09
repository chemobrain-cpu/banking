<?php
require_once "vendor/autoload.php";
use Twilio\Rest\Client;

class twilioController
{

    public  static function sendSmsCode($number,$message_code){

        $sid    = "ACf90c9948940e53ad17d05c7ba5365e5a";
        $token  = "9c95d559db81f87028b6b58037341015";
        $twilio = new Client($sid, $token);

       $message = $twilio->messages->create(
               $number, // to
                array(
                    "messagingServiceSid" => "MG6d1c9e0d3c93f2cf4910eb8c786da88c",
                    "body" => $message_code
                )
            );

        // if($message->status === "accepted"){
        //     echo "Yes";
        // }
}

}

// return twilioController::sendSmsCode('+2348114313795','Helll Ofofo  kaywhytee APi');