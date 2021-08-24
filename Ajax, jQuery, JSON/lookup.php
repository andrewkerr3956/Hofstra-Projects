<?php
header("Content-type: application/json");

$people = array(
    "Alex" => array(
        "age" => 24,
        "location" => "Greenwich",
        "job" => "Web developer",
    ),
    "Joshua" => array(
        "age" => 21,
        "location" => "Chorley",
        "job" => "Teacher"
    )
);

$return = array("exists" => false);

if(isset($_GET["name"]) {
    $name = trim($_GET["name"]);
    if(isset($people[$name])) {
        $return["exists"] = true;
        $return["information"] = $people[$name];
    }
}
]))

echo json_encode($return);

?>

{
"success": true,
"information": {
"age": 21,
"location": "Greenwich",
"job": "Teacher"
}
}