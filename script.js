// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

let upperCase;
let lowerCase;
let numbers;
let specialChars;
let tooLong;
let tooShort;
let length;
let password;
let i;
let randomIndex;
let randomCharacter;

// Function to prompt user for password options
function getPasswordOptions() {
   length = prompt("Please select the lenght of your password, between 8 and 128 characters.");
    
};


function getRandom(arr) {
    password = '';
    for (i = 0; i < length; i++);
    randomIndex = Math.floor(Math.random() * arr.length);
    randomCharacter = arr[randomIndex];
    password += randomCharacter;
    return password;

};


function generatePassword() {
    let password = '';
    const selectedSets = [];

    if (upperCase) selectedSets.push(upperCasedCharacters);
    if (lowerCase) selectedSets.push(lowerCasedCharacters);
    if (numbers) selectedSets.push(numericCharacters);
    if (specialChars) selectedSets.push(specialCharacters);

    for (let i = 0; i < length; i++) {
        const selectedSet = selectedSets[Math.floor(Math.random() * selectedSets.length)];
        const randomChar = selectedSet[Math.floor(Math.random() * selectedSet.length)];
        password += randomChar;
    }

    return password;
};


const generateBtn = document.querySelector('#generate');


function writePassword() {
    length = prompt("Please select the lenght of your password, between 8 and 128 characters.");
    if (length !== null) {
        if (length > 128) {
            tooLong = alert("Character choice is too long, please choose between 8 and 128");
            writePassword();
        };
        if (length < 8) {
            tooShort = alert("Character choice is too short, please choose between 8 and 128");
            writePassword();
        }
        upperCase = confirm("Would you like uppercase characters in your password?");
        lowerCase = confirm("Would you like lowercase characters in your password?");
        numbers = confirm("Would you like numbers characters in your password?");
        specialChars = confirm("Would you like special characters in your password?");
    };

    const password = generatePassword();
    const passwordText = document.querySelector('#password');
    console.log(length);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(numbers);
    console.log(specialChars);

    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

















