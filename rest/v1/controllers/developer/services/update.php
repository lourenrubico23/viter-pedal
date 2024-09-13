<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$services = new Services($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("servicesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $services->services_aid = $_GET['servicesid'];
  $services->services_title = $data["services_title"];
  $services->services_subtitle = $data["services_subtitle"];

  $services->services_datetime = date("Y-m-d H:i:s");
  checkId($services->services_aid);


  // //checks current data to avoid same entries from being updated
  // $employees_fname_old = checkIndex($data, 'employees_fname_old');
  // compareName($services, $employees_fname_old, $services->employees_fname);

  // update
  $query = checkUpdate($services);
  returnSuccess($services, "services", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
