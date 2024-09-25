<?php

// Update testimonial A
function checkUpdateTestimonialA($object)
{
    $query = $object->updateTestimonialA();
    checkQuery($query, "There's a problem processing your request. (update testimonial a)");
    return $query;
}

// Update testimonial B
function checkUpdateTestimonialB($object)
{
    $query = $object->updateTestimonialB();
    checkQuery($query, "There's a problem processing your request. (update testimonial b)");
    return $query;
}

// Update testimonial c
function checkUpdateTestimonialC($object)
{
    $query = $object->updateTestimonialC();
    checkQuery($query, "There's a problem processing your request. (update testimonial c)");
    return $query;
}
