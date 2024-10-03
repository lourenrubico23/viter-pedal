<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$footer = new Footer($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("footerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdatefooter = $data['isUpdatefooter'];
  if ($isUpdatefooter == "footerUpdate") {
    $footer->footer_aid = $_GET['footerid'];
    $footer->footer_copyright = $data["footer_copyright"];

    $footer->footer_datetime = date("Y-m-d H:i:s");
    checkId($footer->footer_aid);
    // update
    $query = checkUpdate($footer);
    returnSuccess($footer, "footer", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
