// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#modal");
var capitalLettersEl = document.querySelector("#capitalsId");
var numbersEl = document.querySelector("#numbersId");
var specialCharactersEl = document.querySelector("#speccharsId");
var lengthEl = document.getElementById("lengthId");
var passwordDiv = document.querySelector("#password");
// arrays that will be used to create new items in final generated password
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var capitalLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharactersArray = ["!", "%", "&"]
// arrays that will be populated with random characters
var lclarray = []
var clarray = []
var narray = []
var scarray = []
// array that will be populated with letters that will become the new password
var randomCharArray = []
// array that will be populated with new password
var createdPassword = ["test"]

function getRandom(Array, num) {
    const shuffled = [...Array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

//populate arrays with random characters
lclarray = getRandom(lowercaseLettersArray, 5);
clarray = getRandom(capitalLettersArray, 2);
narray = getRandom(numbersArray, 2);
scarray = getRandom(specialCharactersArray, 1);

//combine arrays into randomCharArray
randomCharArray = lclarray.concat(clarray, narray, scarray);

// combine array indexes into one index in createdPassword
const additionSpread = (...Array) => {
    return Array.reduce((a, b) => a + b, 0);
};

//put combined password into array
createdPassword = additionSpread(...randomCharArray);

// get password length from user input
var inputLengthValue = document.getElementById("lengthId").value;
function saveBtnFunct() {
    console.log(inputLengthValue);
}
//use password length to change length of array created

// find a way to only make modal appear when button is pressed

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function that is run when event listener is triggered
function writePassword() {
    passwordDiv.replaceWith(createdPassword);
    // write conditional statements to propogate new password array
    // based on which boxes are selected
}
