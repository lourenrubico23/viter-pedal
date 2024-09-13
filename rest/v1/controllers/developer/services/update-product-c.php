<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/services/Services.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes 
$services = new Services($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();

  if (array_key_exists("servicesid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $services->services_aid = $_GET['servicesid'];
    $services->services_img_c = $data["services_img_c"];
    $services->services_product_c = $data["services_product_c"];
    $services->services_description_c = $data["services_description_c"];
    $services->services_button_text_c = $data["services_button_text_c"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);


    //checks current data to avoid same entries from being updated
    // $services_mother_fname_old = checkIndex($data, 'services_mother_fname');
    // compareName($services, $services_mother_fname_old, $services->services_mother_fname);

    // update
    $query = checkUpdateProductC($services);
    returnSuccess($services, "services", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
