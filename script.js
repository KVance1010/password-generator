// Assignment Code
let passwordLength;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumber = false;
let hasSpecialChar = false;

let generateBtn = document.querySelector('#generate');

function generatePassword() {
	let generatedPassword = '1';
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
		//
		if (hasLowerCase && hasNumber && hasSpecialChar && hasUpperCase) {
			for (let i = 0; i < passwordLength; i++) {
				let temp = generateOneToFour();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForLowerCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForUpperCase();
						console.log(characterNum);
						console.log('case 2');
						break;
					case 3:
						characterNum = randomForNumbers();
						console.log(characterNum);
						console.log('case 3');
						break;
					case 4:
						characterNum = randomForSpecialChar();
						console.log(characterNum);
						console.log('case 4');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasLowerCase && hasNumber && hasSpecialChar) {
			for (let i = 0; i < passwordLength; i++) {
				let temp = generateOneToThree();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForLowerCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForNumbers();
						console.log(characterNum);
						console.log('case 2');
						break;
					case 3:
						characterNum = randomForSpecialChar();
						console.log(characterNum);
						console.log('case 3');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasUpperCase && hasNumber && hasSpecialChar) {
      for (let i = 0; i < passwordLength; i++) {
				let temp = generateOneToThree();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForUpperCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForNumbers();
						console.log(characterNum);
						console.log('case 2');
						break;
					case 3:
						characterNum = randomForSpecialChar();
						console.log(characterNum);
						console.log('case 3');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasLowerCase && hasNumber && hasUpperCase) {
      for (let i = 0; i < passwordLength; i++) {
				let temp = generateOneToThree();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForLowerCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForNumbers();
						console.log(characterNum);
						console.log('case 2');
						break;
					case 3:
						characterNum = randomForUpperCase();
						console.log(characterNum);
						console.log('case 3');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasLowerCase && hasUpperCase && hasSpecialChar) {
      for (let i = 0; i < passwordLength; i++) {
				let temp = generateOneToThree();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForLowerCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForUpperCase();
						console.log(characterNum);
						console.log('case 2');
						break;
					case 3:
						characterNum = randomForSpecialChar();
						console.log(characterNum);
						console.log('case 3');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasLowerCase && hasUpperCase) {
      for (let i = 0; i < passwordLength; i++) {
        let temp = generateOneToTwo();
				let characterNum;
				switch (temp) {
					case 1:
						characterNum = randomForLowerCase();
						console.log(characterNum);
						console.log('case 1');
						break;
					case 2:
						characterNum = randomForNumbers();
						console.log(characterNum);
						console.log('case 2');
						break;
					default:
						console.log('default');
						break;
				}
				generatedPassword += generateCharacter(characterNum);
			}
		} else if (hasLowerCase && hasNumber) {
			let temp = generateOneToTwo();
		} else if (hasLowerCase && hasSpecialChar) {
			let temp = generateOneToTwo();
		} else if (hasUpperCase && hasNumber) {
			let temp = generateOneToTwo();
		} else if (hasUpperCase && hasSpecialChar) {
			let temp = generateOneToTwo();
		} else if (hasLowerCase) {
		} else if (hasUpperCase) {
		} else if (hasSpecialChar) {
		} else {
		}

		// callback function when no criteria have been selected
	} else {
		alert('you must select one of the password criteria');
		generatePassword();
	}

	// return the finished password
  // TODO: delete the first number before returning the value
	return generatedPassword;
}

// functions to generate switch numbers
function generateOneToFour() {
	return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

function generateOneToThree() {
	return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function generateOneToTwo() {
	return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}

// generate a random number generator for each of the criteria
// 97-122
function randomForLowerCase() {
	return Math.floor(Math.random() * (122 - 97 + 1)) + 97;
}
// 65-90
function randomForUpperCase() {
	return Math.floor(Math.random() * (90 - 65 + 1)) + 65;
}
// 48-57
function randomForNumbers() {
	return Math.floor(Math.random() * (57 - 48 + 1)) + 48;
}
// 34-47
function randomForSpecialChar() {
	return Math.floor(Math.random() * (47 - 34 + 1)) + 34;
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
