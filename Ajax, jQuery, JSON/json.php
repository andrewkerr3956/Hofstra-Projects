<?php
header("Content-type: application/json");

$results = array(
    "count" => 10,
    "results" => array("Result one", "Result two", "Result three")
);

echo json_encode($results);

{
    "count": 10,
    "results": ["Result one", "Result two", "Result three"]
}

?>