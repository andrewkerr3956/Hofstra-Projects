<?php
	$conn = new mysqli("localhost","root","password","website");
	if($conn->connect_errno > 0) {
		die(); 
	}
	
	$username="ashley";
	$password="shed";
	
	$statement = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
	
	if($statement) {
		$statement->bind_param("ss", $username, $password);
		$statement->execute();
		
		echo "Record inserted!";
	}

	/*
	$limit = (isset($_GET["limit"])) ? (int)$_GET["limit"]: 10;
	$username = $conn=>real_escape_string($_GET['username']);
	$password = $conn=>real_escape_string($_GET['password']);
	
	$sql = "SELECT id, title, summary, created FROM articles 
			ORDER BY created DESC";
	echo $sql, "<br /><br />";

	// $result = array();
	
	if(!$result = $conn->query($sql)) {
		die($conn->error);
	}
	while($row = $result->fetch_object()){
		$results[] = $row;
	}
	
	 // View/output
	if(count($results)) {
		foreach($results as $result) {
			echo  $result->title, "<br />", $result->summary, "<br />", $result->created, "<br /><br />";
		}
	} else {
		echo "No results";
	}
	
	
	
	/*
	if($num_rows = $result->num_rows) {
		echo "There are results! (". $num_rows. ")";
	} else {
		echo "There are no results.";
	}
	*/
	
	// $result = $result->fetch_object();
	/*
	echo "<pre>", print_r($result), "</pre>";
	echo $result->title; // (object)
	// echo  $result["title"]; (ASSOC array)
	*/
?>