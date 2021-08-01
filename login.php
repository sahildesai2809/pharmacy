<?php
require_once('config.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>User Registration | PHP</title>
	<link rel="stylesheet" href="style1.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>

<div>
	<?php
	if(isset($_POST['create'])){
		$username= $_POST['username'];
		$email= $_POST['email'];
		$password= $_POST['password'];

		$sql= "INSERT INTO users (username,email,password) VALUES(?,?,?)";
		$stmtinsert = $db->prepare($sql);
		$result = $stmtinsert->execute([$username, $email, $password]);
		if($result){
			echo 'successfully saved.';
		}else{
			echo 'there were errors while saving data';
		}
	}
	?>	
</div>

<<form action="registration.php" method="post">
		<div class="form-container">
			<div class="row">
				<div class="col-2">
					<h1>Login</h1>
					<p>Fill up the form with correct values.</p>
					<hr class="mb-3">
					<div class="regform">
					<label for="firstname"><b>User Name</b></label>
					<input class="form-control" id="username" type="text" name="usernamename" required>

					<label for="email"><b>Email Address</b></label>
					<input class="form-control" id="email"  type="email" name="email" required>


					<label for="password"><b>Password</b></label>
					<input class="form-control" id="password"  type="password" name="password" required>
					<hr class="mb-3">
					<div class="form-btn">
					<input class="btn" type="submit" id="register" name="create" value="Sign Up">
					</div>
					<p>Don't have an account?<a href="registration.php">Register</a></p>
					</div>
				</div>
			</div>
		</div>
	</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script type="text/javascript">
	$(function(){
		$('#register').click(function(e){

			var valid = this.form.checkValidity();

			if(valid){


			var username 	= $('#username').val();
			var email 		= $('#email').val();
			var password 	= $('#password').val();
			

				e.preventDefault();	

				$.ajax({
					type: 'POST',
					url: 'process.php',
					data: {username: username,email: email,password: password},
					success: function(data){
					Swal.fire({
								'title': 'Successful',
								'text': data,
								'type': 'success'
								})
							
					},
					error: function(data){
						Swal.fire({
								'title': 'Errors',
								'text': 'There were errors while saving the data.',
								'type': 'error'
								})
					}
				});

				
			}else{
				
			}

			



		});		

		
	});
	
</script>
</body>
</html>
