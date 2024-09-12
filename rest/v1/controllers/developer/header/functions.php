<?php

// Update Logo image
function checkUpdateLogoImg($object)
{
    $query = $object->updateLogoImg();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

// Update Banner
function checkUpdateBanner($object)
{
    $query = $object->updateBanner();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}