<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$header = new Header($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $header->header_aid = $_GET['headerid'];
  $header->header_nav_a = checkIndex($data, "header_nav_a");
  $header->header_nav_b = checkIndex($data, "header_nav_b");
  $header->header_nav_c = checkIndex($data, "header_nav_c");
  $header->header_nav_d = checkIndex($data, "header_nav_d");;

  $header->header_datetime = date("Y-m-d H:i:s");
  checkId($header->header_aid);


  // //checks current data to avoid same entries from being updated
  // $employees_fname_old = checkIndex($data, 'employees_fname_old');
  // compareName($header, $employees_fname_old, $header->employees_fname);

  // update
  $query = checkUpdate($header);
  returnSuccess($header, "header", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
