<?php

// Update Product A
function checkUpdateProductA($object)
{
    $query = $object->updateProductA();
    checkQuery($query, "There's a problem processing your request. (update product a)");
    return $query;
}

// Update Product B
function checkUpdateProductB($object)
{
    $query = $object->updateProductB();
    checkQuery($query, "There's a problem processing your request. (update product b)");
    return $query;
}

// Update Product B
function checkUpdateProductC($object)
{
    $query = $object->updateProductC();
    checkQuery($query, "There's a problem processing your request. (update product c)");
    return $query;
}