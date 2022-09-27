// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//when I click the button to generate a password
//Then I am presented with a series of prompts for password criteria
// get the number of characters 8-128
let passwordLength;

if (passwordLength < 8 || passwordLength > 128) {
alert("Please enter a password length between 8 and 128 characters.");
}

//when I am prompted for password criteria
//then I select which criteria to include in the password
// lower case 97-122
// upper case 65-90
// numbers 48-57
// special characters 33-47
let text = String.fromCharCode();

//when I answer each prompt 
//then my input should be validated and at least one character type should be selected.