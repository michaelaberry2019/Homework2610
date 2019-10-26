
var passwordLength = prompt("can only be between 8 - 128 charachters");
var lowercase = confirm("do you want lowercase charachters");
var uppercase = confirm("do you want upercase charachters");
var specChar = confirm("do you want special charachters");
var pwContainsNumeric = confirm("do you want numbers")
okay /cancel buttons
array/split for all a-z0-9speccharchters
displayMessage
copy into Clipboard

inputbutton.addEventListener("click", function(event) {
    event.preventDefault();
    // preventing the refresh function that (event) causes//
    var pwlengthinput = document.querySelector("#html").value;


      if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      renderLastRegistered();
    }
  });


