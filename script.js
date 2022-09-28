// Assignment Code
let passwordLength;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumber = false;
let hasSpecialChar = false;

let generateBtn = document.querySelector('#generate');

function generatePassword() {
	let generatedPassword;
	// prompt for password validation :  number of characters 8-128
	passwordLength = prompt(
		'Please the number of characters in your password',
		'8-128'
	);

	// password validation :  number of characters 8-128
	while (passwordLength < 8 || passwordLength > 128) {
		passwordLength = prompt(
			'Password length must be between 8 and 128 characters'
		);
	}

	// prompt for lowercase characters
	hasLowerCase = confirm(
		'Would you like lowercase characters in your password? OK for yes, CANCEL for no'
	);

	// prompt for uppercase characters
	hasUpperCase = confirm(
		'Would you like uppercase characters in your password? OK for yes, CANCEL for no'
	);

	// prompt for numbers
	hasNumber = confirm(
		'Would you like numbers in your password? OK for yes, CANCEL for no'
	);

	// prompt for special characters
	hasSpecialChar = confirm(
		'Would you like special characters in your password? OK for yes, CANCEL for no'
	);

	// validation that one or more criteria was selected
	if (hasLowerCase || hasNumber || hasSpecialChar || hasUpperCase) {
		
    if (hasLowerCase && hasNumber && hasSpecialChar && hasUpperCase) {
			// TODO: generate the random number generator to select which category will be used for each character
      // TODO: use a for loop to generate the number of characters for the password length
      // TODO: add each character to the createdPassword
		} else if (hasLowerCase && hasNumber && hasSpecialChar) {
			// TODO:
		} else if (hasUpperCase && hasNumber && hasSpecialChar) {
			// TODO:
		} else if (hasLowerCase && hasNumber && hasUpperCase) {
			// TODO:
		} else if (hasLowerCase && hasUpperCase && hasSpecialChar) {
			// TODO:
		} else if (hasLowerCase && hasUpperCase) {
			// TODO:
		} else if (hasLowerCase && hasNumber) {
			// TODO:
		} else if (hasLowerCase && hasSpecialChar) {
			// TODO:
		} else if (hasUpperCase && hasNumber) {
			// TODO:
		} else if (hasUpperCase && hasSpecialChar) {
			// TODO:
		} else if (hasLowerCase) {
			// TODO:
		} else if (hasUpperCase) {
			// TODO:
		} else if (hasSpecialChar) {
			// TODO:
		} else {
			// TODO:
		}
  
  // callback function when no criteria have been selected
  } else {
		alert('you must select one of the password criteria');
		generatePassword();
	}

	// return the finished password
	return generatedPassword;
}

// generate a random number generator for each of the criteria
// 97-122
function randomForLowerCase() {
	return Math.random() * (97 - 122) + 97;
}
// 65-90
function randomForUpperCase() {
	return Math.random() * (65 - 90) + 65;
}
// 48-57
function randomForNumbers() {
	return Math.random() * (48 - 57) + 48;
}
// 34-47
function randomForSpecialChar() {
	return Math.random() * (34 - 47) + 34;
}

// this generates the different characters from the html unicode value
// https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/
// https://www.w3schools.com/jsref/jsref_fromcharcode.asp
function generateCharacter(characterNum) {
	return String.fromCharCode(characterNum);
}

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
