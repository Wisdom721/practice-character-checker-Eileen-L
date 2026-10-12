
const input = require("readline-sync");

let phrase = input.question("Enter a word or phrase: ");

let index = input.questionInt("Enter the index number of the character you want: ");

let character = phrase[index];

console.log("The character at index " + index + " is: " + character);
