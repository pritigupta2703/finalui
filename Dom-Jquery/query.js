$('document').ready(function() {


	//function Validate_name(){

	$("#namefirst").change(function() {
		if ($(this).val().match('^[a-zA-Z]+$')) {
			return true;
		} else {
			alert("That's not a name");
		}

	});

	//}
	$(':checkbox').click(function() {

		$('#adc').val($('#adp').val());


	});

	$('#emailid').change(function() {

		var email = $('#emailid').val();
		if (!(/^([\w+_.?-])+@([\w+_.-])+\.([a-zA-Z])+([a-zA-Z])+/).test(email)) {
			alert("Enter a Valid Email !!!");
			return false;
		}
	});

	$('#phoneno').change(function() {

		var a = $('#phoneno').val();
		if (a == "") {
			alert("please Enter the Contact Number");
			//document.registerForm.phoneno.focus();
			return false;
		} else if (isNaN(a)) {
			alert("Enter the valid Mobile Number(Like : 9566137117)");
			//document.registerForm.phoneno.focus();
			return false;
		} else if ((a.length < 9) || (a.length > 10)) {
			alert(" Your Phone Number must be 10 digit");
			//document.registerForm.phoneno.select();
			return false;
		} else {
			return true;
		}
	});



	$('#txtPassword').change(function() {


		var password = $('#txtPassword').val();
		var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
		if (!reg.test(password)) {
			alert("passwords dont have all esssiantials");
			//password.focus();
			return false;
		}



		return true;


	});

	$('#txtConfirmPassword').change(function() {
		var password = $('#txtPassword').val();

		var confirmPassword = $('#txtConfirmPassword').val();

		if (password !== confirmPassword) {
			alert("passwordords do not match.");
			return false;
		}
		return true;

	});

	$('#button2').click(function() {
		$('#dashboard').append('<span class="list" title="' + $('#emailid').val() + '"> ' + $('#namefirst').val() + ' ' +
			$('#namelast').val() + '</span>')
	});

});