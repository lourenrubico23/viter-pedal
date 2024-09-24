<?php

// Update Image b
function checkUpdateImageB($object)
{
    $query = $object->updateImageB();
    checkQuery($query, "There's a problem processing your request. (update image b)");
    return $query;
}

// Update Title and Description A
function checkUpdateTitleAndDescriptionA($object)
{
    $query = $object->updateTitleAndDescriptionA();
    checkQuery($query, "There's a problem processing your request. (update title and description a)");
    return $query;
}

// Update Title and Description B
function checkUpdateTitleAndDescriptionB($object)
{
    $query = $object->updateTitleAndDescriptionB();
    checkQuery($query, "There's a problem processing your request. (update title and description b)");
    return $query;
}

// Update Contents
function checkUpdateContents($object)
{
    $query = $object->updateContents();
    checkQuery($query, "There's a problem processing your request. (update contents)");
    return $query;
}