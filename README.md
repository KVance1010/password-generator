# Password Generator

## Overview 

This is a password generator that generates a password between 8 and 128 characters. The password generator allows the user to specify if they want the password to have uppercase, lowercase, numbers, and special characters included. The user will not be allowed to create a password if no criteria are selected, the password is more than 128 characters, or the password is less than 8 characters.

### learning points
- JavaScript fundamentals
- Flow control
- Input validation
- Prompts, alerts, and confirm functions
- Event listeners

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```


## Acceptance Criteria

- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
  THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page


## Technologies
 
- **JavaScript**

## CodeSnippets 
### Converts unicode to a string
``` javascript
function generateCharacter(characterNum) {
	return String.fromCharCode(characterNum);
}
```
### Generates a random number between 97 and 122
``` javascript
function randomForLowerCase() {
	return Math.floor(Math.random() * (122 - 97 + 1)) + 97;
}
```

## License

Please refer to the LICENSE in the repo. 

## Links

### live Link
[Live website] https://kvance1010.github.io/password-generator/

### LinkedIn
[LinkedIn] https://www.linkedin.com/in/kyle-s-vance
