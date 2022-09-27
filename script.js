// Assignment Code
let passwordLength;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumber = false;
let hasSymbol = false;
let createdPassword;

let generateBtn = document.querySelector('#generate');

// prompt for password length

// prompt for password validation :  number of characters 8-128
if (passwordLength < 8 || passwordLength > 128) {
	alert('Please enter a password length between 8 and 128 characters.');
}

// prompt for lower case characters

// prompt for upper case characters

// prompt for numbers 

// prompt for special characters

// validation that one or more criteria was selected

//generate the random number generator to select which category will be used for each character

// generate a random number generator for each of the criteria

// add each character to the createdPassword

// return the finished password


// this generates the different characters from the html unicode value
// https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/
// https://www.w3schools.com/jsref/jsref_fromcharcode.asp
function generateCharacter(charNum) {
	return String.fromCharCode(charNum);
}

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
