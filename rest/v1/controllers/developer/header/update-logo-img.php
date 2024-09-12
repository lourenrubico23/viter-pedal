<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/header/Header.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes 
$header = new Header($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();

  if (array_key_exists("headerid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $header->header_aid = $_GET['headerid'];
    $header->header_logo_img = $data["header_logo_img"];

    $header->header_datetime = date("Y-m-d H:i:s");
    checkId($header->header_aid);


    //checks current data to avoid same entries from being updated
    // $header_mother_fname_old = checkIndex($data, 'header_mother_fname');
    // compareName($header, $header_mother_fname_old, $header->header_mother_fname);

    // update
    $query = checkUpdateLogoImg($header);
    returnSuccess($header, "header", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
