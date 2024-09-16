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

  $isUpdateServices = $data['isUpdateServices'];
  if ($isUpdateServices == "titleUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_title = $data["services_title"];
    $services->services_subtitle = $data["services_subtitle"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdate($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "productAUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_img_a = $data["services_img_a"];
    $services->services_product_a = $data["services_product_a"];
    $services->services_description_a = $data["services_description_a"];
    $services->services_button_text_a = $data["services_button_text_a"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateProductA($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "productBUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_img_b = $data["services_img_b"];
    $services->services_product_b = $data["services_product_b"];
    $services->services_description_b = $data["services_description_b"];
    $services->services_button_text_b = $data["services_button_text_b"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateProductB($services);
    returnSuccess($services, "services", $query);
  }
  if ($isUpdateServices == "productCUpdate") {
    $services->services_aid = $_GET['servicesid'];
    $services->services_img_c = $data["services_img_c"];
    $services->services_product_c = $data["services_product_c"];
    $services->services_description_c = $data["services_description_c"];
    $services->services_button_text_c = $data["services_button_text_c"];

    $services->services_datetime = date("Y-m-d H:i:s");
    checkId($services->services_aid);
    // update
    $query = checkUpdateProductC($services);
    returnSuccess($services, "services", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
