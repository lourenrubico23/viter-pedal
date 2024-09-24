<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$about = new About($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("aboutid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateAbout = $data['isUpdateAbout'];
  if ($isUpdateAbout == "imageAUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_img_a = $data["about_img_a"];

    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);
    // update
    $query = checkUpdate($about);
    returnSuccess($about, "about", $query);
  }
  if ($isUpdateAbout == "imageBUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_img_b = $data["about_img_b"];

    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);
    // update
    $query = checkUpdateImageB($about);
    returnSuccess($about, "about", $query);
  }
  if ($isUpdateAbout == "titleAndDescriptionAUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_title_a = $data["about_title_a"];
    $about->about_description_a = $data["about_description_a"];
   
    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);
    // update
    $query = checkUpdateTitleAndDescriptionA($about);
    returnSuccess($about, "about", $query);
  }
  if ($isUpdateAbout == "titleAndDescriptionBUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_title_b = $data["about_title_b"];
    $about->about_description_b = $data["about_description_b"];
    $about->about_contact_text = $data["about_contact_text"];
    $about->about_contact_number = $data["about_contact_number"];

    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);
    // update
    $query = checkUpdateTitleAndDescriptionB($about);
    returnSuccess($about, "about", $query);
  }
  if ($isUpdateAbout == "contentsUpdate") {
    $about->about_aid = $_GET['aboutid'];
    $about->about_content_title_a = $data["about_content_title_a"];
    $about->about_content_title_b = $data["about_content_title_b"];
    $about->about_content_title_c = $data["about_content_title_c"];
    $about->about_content_description_a = $data["about_content_description_a"];
    $about->about_content_description_b = $data["about_content_description_b"];
    $about->about_content_description_c = $data["about_content_description_c"];

    $about->about_datetime = date("Y-m-d H:i:s");
    checkId($about->about_aid);
    // update
    $query = checkUpdateContents($about);
    returnSuccess($about, "about", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
