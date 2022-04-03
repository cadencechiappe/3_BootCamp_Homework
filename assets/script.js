// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var body = document.body

var checkboxDiv = document.createElement("div")
var criteriaMessage = document.createElement("h3")
var checkboxListEl = document.createElement("ul")
var criteria1 = document.createElement("li")
var criteria2  = document.createElement("li")
var criteria3  = document.createElement("li")

criteriaMessage = "Select your criteria"
criteria1.textContent = "criteria1"
criteria2.textContent = "criteria2"
criteria3.textContent = "criteria3"

var textArea = document.getElementById(cardBody)

document.body.insertBefore(checkboxDiv, textArea)

// body.appendChild(checkboxDiv)
// checkboxDiv.appendChild(criteriaMessage)
// checkboxDiv.appendChild(checkboxListEl)
// checkboxDiv.appendChild(criteria1)
// checkboxDiv.appendChild(criteria2)
// checkboxDiv.appendChild(criteria3)

arrayOfPasswords = ["password1", "password2"]

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function writePassword() {
    var passwordSelected = arrayOfPasswords[Math.floor(Math.random()*arrayOfPasswords.length)];
    document.write(passwordSelected)
}
