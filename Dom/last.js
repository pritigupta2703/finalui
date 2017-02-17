function dropFunction() {
	document.getElementById("myDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}


function addresscheck(c) {

	if (c.checkAddress.checked == true) {
		c.addresscur.value = c.addressper.value;

	}
}


function validateForm() {
	if (main()) {
		return addToList();
	}



}

function main() {

	if (validateName() && validateEmail() && validatePhone() && validatePassword()) {
		return true;

	}
	return false;

}


function validateEmail() {

	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.registerForm.emailid.value)) {
		alert("You have entered an invalid email address!")
		return false;
	}
	return true;

}

function validatePhone() {
	var a = document.registerForm.phoneno.value;
	if (a == "") {
		alert("please Enter the Contact Number");
		document.registerForm.phoneno.focus();
		return false;
	}

	if (isNaN(a)) {
		alert("Enter the valid Mobile Number(Like : 9566137117)");
		document.registerForm.phoneno.focus();
		return false;
	}
	if ((a.length < 9) || (a.length > 10)) {
		alert(" Your Phone Number must be 10 digit");
		document.registerForm.phoneno.select();
		return false;
	}
	return true;
}

function validatePassword() {
	var password = document.getElementById("txtPassword").value;
	var confirmPassword = document.getElementById("txtConfirmPassword").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		password.focus();
		return false;
	}



	var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	if (!reg.test(password)) {
		alert("passwords dont have all esssiantials");
		password.focus();
		return false;
	}
	return true;

}

function validateName() {
	var name = document.forms["registerForm"]["namefirst"].value;
	if (name == "") {
		alert("Please fill the First name");
		document.registerForm.namefirst.focus();
		return false;

	}
	regex = /^[a-zA-Z]+$/;
	if (!regex.test(document.registerForm.namefirst.value)) {
		alert("only contain  alphabets");
		document.registerForm.namefirst.focus();
		return false;
	}
	return true;
}


function addToList() {
	alert("Added to Dashboard");
	var node = document.createElement("li");
	var text = document.getElementById("namefirst").value;
	node.innerHTML = text;
	node.setAttribute('title', document.getElementById("emailid").value);
	document.getElementById("list").appendChild(node);
}