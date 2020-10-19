// Declare input var
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Declare password var
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Letters (Lowercase and Uppercase)
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Convert lowercare letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

// Uppercase conversion
space = [];

// Uppercase conversion variables
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Declare choices
var choices;

// Function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password to be? Choose a number between 8 and 128."));
    //If user does not enter number value, alerts user to input number value
    if (!enter) {
        alert("This needs a value");
    //If user enters number value less than 8 or greater than 128, alerts user to input number between 8 and 128    
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose a number between 8 and 128"));

    } else {
        // Asks criteria to create password
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

