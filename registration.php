<html>
<head>
	<link rel="stylesheet" href="style2.css">
</head>
<?php
session_start();
$sessData = !empty($_SESSION['sessData'])?$_SESSION['sessData']:'';
if(!empty($sessData['status']['msg'])){
    $statusMsg = $sessData['status']['msg'];
    $statusMsgType = $sessData['status']['type'];
    unset($_SESSION['sessData']['status']);
}
?>
<div class="navbar">
            <div>
                <a href="index.html"><img src="images/logo.jpg" alt="logo" width="125px"></a>
            </div>
            <nav>
                <ul id="menuitems">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="product.html">Products</a></li>
                    <!-- <li><a href="">Cart</a></li> -->
                    <!-- <li><a href="">Address</a></li> -->
                    <li><a href="http://localhost/user/registration.php">Account</a></li>
                </ul>
            </nav>
            <a href="cart.html"><img src="images/cart.png" alt="cart" width="30px" height="30px"></a><span class="cartnum">0</span>
            <img src="images/menu.png" alt="cart" class="menu-icon" onclick="menutoggle()" >
</div>
<div class="container1">
    <h2>Create a New Account</h2>
    <?php echo !empty($statusMsg)?'<p class="'.$statusMsgType.'">'.$statusMsg.'</p>':''; ?>
    <div class="regisFrm">
        <form action="userAccount.php" method="post">
            <input type="text" name="first_name" placeholder="FIRST NAME" required="">
            <input type="text" name="last_name" placeholder="LAST NAME" required="">
            <input type="email" name="email" placeholder="EMAIL" required="">
            <input type="text" name="phone" placeholder="PHONE NUMBER" required="">
            <input type="password" name="password" placeholder="PASSWORD" required="">
            <input type="password" name="confirm_password" placeholder="CONFIRM PASSWORD" required="">
            <div class="send-button">
                <input type="submit" name="signupSubmit" value="CREATE ACCOUNT">
            </div>
        </form>
		<p>Already have an account? <a href="index.php">Log in</a></p>
    </div>
</div>
<!-- footer -->
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <h3>Download our App</h3>
                <p>Download  App for android and ios mobile phone</p>
                <div class="app-logo">
                    <img src="images/play-store.png" alt="">
                    <img src="images/app-store.png" alt="">
                </div>

            </div>
            <div class="footer-col-2">

                <h3>Creators</h3>
                <img src="images/sheldon.png" >
                <img src="images/sahil.jpeg" >
                <img src="images/jagtap.png" >
            
            </div>

            <div class="footer-col-3">
                <h3>Usefull links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog post</li>
                        <li>Return policy</li>
                        <li>Join affiliate</li>
                    </ul>
                
            
            </div>

            <div class="footer-col-4">
                <h3>For regular updates ,<br> subscribe to our newsletter
                </h3>
                <input type="email" placeholder="Enter your email...">
                <button type="submit" class="btn" >Submit</button>
            
            </div>
        </div>
        <hr>
        <p class="copyright">Copyright 2020 - Group 9</p>
    </div>
</div>


<!-- js for toggle menu  -->

<script>

    var menuitems = document.getElementById("menuitems");
    menuitems.style.maxHeight = "0px";

    function menutoggle(){
        if(menuitems.style.maxHeight == "0px"){
            menuitems.style.maxHeight = "200px";
        }
        else{
            menuitems.style.maxHeight = "0px";
        }
    }

</script>
</html>