<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contactBanner = new ContactBanner($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("contactBannerid", $_GET)) {
  $contactBanner->contact_banner_aid = $_GET['contactBannerid'];
  checkId($contactBanner->contact_banner_aid);
  $query = checkReadById($contactBanner);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($contactBanner);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
