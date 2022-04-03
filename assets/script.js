// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var body = document.bod

var checkboxDiv = document.createElement("div")
var criteriaMessage = document.createElement("h3")
var checkboxListEl = document.createElement("ul")
var criteria1 = document.createElement("li")
var criteria2  = document.createElement("li")
var criteria3  = document.createElement("li")

criteriaMessage = "Select your criteria"
criteria1.textContent = "Capital Letter"
criteria2.textContent = "Number"
criteria3.textContent = "Special Character"

var textArea = document.getElementById(cardBody)

document.body.insertBefore(checkboxDiv, textArea)

// append added HTML elements so that they appear on the page
checkboxDiv.append(criteriaMessage)
checkboxDiv.append(checkboxListEl)
checkboxDiv.append(criteria1)
checkboxDiv.append(criteria2)
checkboxDiv.append(criteria3)

// find a way to only make 

// find a way to turn unordered list items into checkboxes that are stored
// in variables that can be used in conditional statements

// find a way to only make list items appear when button is pressed

// add a second button that appears after the criteria are pressed in order
// to then generate the final password

// add styling to added elements

// temporary array used to set up password generation function
arrayOfPasswords = ["password1", "password2", "password3", "password4","password5", "password6"]

// arrays that will be used to create new items in final generated password
var capitalLettersArray = ["A", "B", "C", "D", "E"]
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharactersArray = ["!", "%", "&"]
// array that will be populated with new password
var createdPassword = []

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function that is run when event listener is triggered
function writePassword() {
    // temporary password generator from temporary password array
    var passwordSelected = arrayOfPasswords[Math.floor(Math.random()*arrayOfPasswords.length)];
    document.write(passwordSelected);

    // write conditional statements to propogate new password array
    // based on which boxes are selected

    // if all criteria are positive
        // add items from all criteria arrays to new array index
    // if criteria 1 and criteria 2 are positive
        // add items from those criteria arrays to new array index
    // if criteria 1 and criteria 3 are positive
        // add items from those criteria arrays to new array index
    // if criteria 2 and criteria 3 are positive
        // add items from those criteria arrays to new array index
    // if only criteria 1 is positive
        // make password with only that criteria
    // if only criteria 2 is positive
        // make password with only that criteria
    // if only criteria 3 is positive
        // make password with only that criteria

}
