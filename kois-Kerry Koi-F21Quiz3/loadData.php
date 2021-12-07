<?php
    //connect to mysql db
    $con = mysqli_connect("localhost","root","Kerry0930#","iitquiz3") or die("Error " . mysqli_error($con));

    $jsondata = file_get_contents('club.json');
    
    $data = json_decode($jsondata, true);
    
    $abbr = $data['abbr'];
    $name = $data['name'];
    $web = $data['web']
    $desc = $data['desc'];
    $time = $data['time'];
    $loc = $data['loc'];
    $cat = $data['cat'];
    $image = $data['image'];

    
    //insert into mysql table
    $sql = "INSERT INTO tbl_emp(abbr,name,web,desc,time,loc,cat,image)
    VALUES('$abbr', '$name', '$web', '$desc', '$time', '$loc', '$cat', '$image')";
    if(!mysql_query($sql,$con))
    {
        die('Error : ' . mysql_error());
    }
?>