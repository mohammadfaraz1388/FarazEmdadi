<?php 
$conn = mysqli_connect('localhost', 'Faraz', '1388faraz1388', 'faraz');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");

$username = $_POST['usernanme'];
$useremai = $_POST['useremail'];

$sql = "INSERT INTO `form1`(`name`, `text`) VALUES('$username' , '$useremai')" ;
if ($conn->query($sql) === TRUE) {
   echo "اطلاعات دریافتی شما با موفقیت ثبت شد ! <br></br> ممنون از نظر شما";
} else { 
    echo "خطا - مشکلی پیش آمده است !";
}
$conn->close();



?>