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
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactBanner = $data['isUpdateContactBanner'];
  if ($isUpdateContactBanner == "contactBannerUpdate") {
    $contactBanner->contact_banner_aid = $_GET['contactBannerid'];
    $contactBanner->contact_banner_img = $data["contact_banner_img"];
    $contactBanner->contact_banner_title = $data["contact_banner_title"];
    $contactBanner->contact_banner_button_text = $data["contact_banner_button_text"];

    $contactBanner->contact_banner_datetime = date("Y-m-d H:i:s");
    checkId($contactBanner->contact_banner_aid);
    // update
    $query = checkUpdate($contactBanner);
    returnSuccess($contactBanner, "contactBanner", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
