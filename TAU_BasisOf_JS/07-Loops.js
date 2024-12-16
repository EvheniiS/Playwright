/*const names = [ "Mark", "Lisa","Thony "];
for (let i = 0; i < names.length; i++) { 
    console.log(names[i]); //0, 1, 2

}

const numbers = [1, 2, 3, 4,];

for (let j = 0; j < numbers.length; j++) { 
    console.log(numbers[j]* 2);
}
*/

let password = "tomorrow";
let userGuess = "";

// while (userGuess !== password) {
//     userGuess = prompt("Please enter your password");
// }

// alert("Login Succesful ")

//5* 4 * 3 * 3 * 2 * 1
let factorial = 1; 
let number = 5; 
let oroginal = number;

do {
    factorial = factorial * number; 
    number--
} while (number > 0); 

console.log(oroginal + " factorial is " + factorial);