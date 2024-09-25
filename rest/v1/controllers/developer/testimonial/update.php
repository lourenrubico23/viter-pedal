<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$testimonial = new Testimonial($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("testimonialid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateTestimonial = $data['isUpdateTestimonial'];
  if ($isUpdateTestimonial == "titleUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_title = $data["testimonial_title"];
    $testimonial->testimonial_subtitle = $data["testimonial_subtitle"];

    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);
    // update
    $query = checkUpdate($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialAUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_img_a = $data["testimonial_img_a"];
    $testimonial->testimonial_name_a = $data["testimonial_name_a"];
    $testimonial->testimonial_description_a = $data["testimonial_description_a"];

    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);
    // update
    $query = checkUpdateTestimonialA($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialBUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_img_b = $data["testimonial_img_b"];
    $testimonial->testimonial_name_b = $data["testimonial_name_b"];
    $testimonial->testimonial_description_b = $data["testimonial_description_b"];

    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);
    // update
    $query = checkUpdateTestimonialB($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
  if ($isUpdateTestimonial == "testimonialCUpdate") {
    $testimonial->testimonial_aid = $_GET['testimonialid'];
    $testimonial->testimonial_img_c = $data["testimonial_img_c"];
    $testimonial->testimonial_name_c = $data["testimonial_name_c"];
    $testimonial->testimonial_description_c = $data["testimonial_description_c"];

    $testimonial->testimonial_datetime = date("Y-m-d H:i:s");
    checkId($testimonial->testimonial_aid);
    // update
    $query = checkUpdateTestimonialC($testimonial);
    returnSuccess($testimonial, "testimonial", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
