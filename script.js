// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let passLength = prompt("Choose a password length between 8-64:");
  let passUppercase = confirm("Do you want to use Uppercase letters?");
  let passNumbers = confirm("Do you want to use numerical characters?");
  let passSpecialCharacters = confirm("Do you want to use Special Characters?");

  return { passLength, passUppercase, passNumbers, passSpecialCharacters };
}

let options = getPasswordOptions();
console.log(options.passLength, options.passUppercase, options.passNumbers, options.passSpecialCharacters);


// Initialize Array that contains all available characters to be picked randomly, as chosen by the user
let availableCharacters = lowerCasedCharacters;

function mergeArraysOptions() {
  availableCharacters = availableCharacters.concat(upperCasedCharacters)
}

mergeArraysOptions()
console.log(availableCharacters)


// Function for getting a random element from an array
function getRandom(arr) {
  let randomElement = Math.floor(Math.random() * arr.length);
  
  return arr[randomElement];
}

let somethingFromArray = getRandom(upperCasedCharacters);
console.log(somethingFromArray);



let passwordLength = 10;

// Function to generate password with user input
// function generatePassword() {
  
//   let password = "";
  
//   for (let i = 0; i < passwordLength; i++) {
//     // let randomCharacter() = function {
//     //   for () {
        
//       }

//       getRandom(arrayAllOptions)
//     }
//     password += randomCharacter
//     ;
  
//   return password;


  // return password;



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

