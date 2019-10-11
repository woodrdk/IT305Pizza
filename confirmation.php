<?php
    $first = $_POST['firstName'];
    $last = $_POST['lastName'];
    $method = $_POST['method'];
    $toppings = $_POST['toppings'];
    $size = $_POST['size'];
    $address = $_POST['address'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rob's Pizza Confirmation</title>
</head>
<body>
    <h1>Thank you for your order.</h1>
    <h2>Order Summary:</h2>

    <p>First Name; <?php echo $first.' '.$last; ?></p>
    <p>Method of delivery: <?php echo $method?></p>
    <p>Address: <?php echo $address?></p>
    <p>Size: <?php echo $size?></p>
    <p>Toppings:<br/>

        <?php
        foreach($toppings as $x => $x_value) {
            echo  $x_value;
            echo "<br>";
        } ?> </p>


    <pre>
        <?php
          //  var_dump($_POST);
       // "hello world";
        ?>
    </pre>
</body>
</html>