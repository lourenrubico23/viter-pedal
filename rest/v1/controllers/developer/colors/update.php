<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$colors = new Colors($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("colorsid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateColors = $data['isUpdateColors'];
  if ($isUpdateColors == "colorsUpdate") {
    $colors->colors_aid = $_GET['colorsid'];
    $colors->colors_primary = $data["colors_primary"];
    $colors->colors_secondary = $data["colors_secondary"];
    $colors->colors_accent = $data["colors_accent"];
    $colors->colors_text = $data["colors_text"];
    $colors->colors_hover = $data["colors_hover"];

    $colors->colors_datetime = date("Y-m-d H:i:s");
    checkId($colors->colors_aid);
    // update
    $query = checkUpdate($colors);
    returnSuccess($colors, "colors", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
