                                                    // CHANGING CASE 

// 1. Write a program that takes user input. Convert and show the input 
// in capital letters.

var userInput = prompt("Enter Character alphabetic? ");
userInput = userInput.toUpperCase();
document.write(userInput)




var userInput = prompt("Enter Character alphabetic? ");
userInput = userInput.toLowerCase();
document.write(userInput)




// 2. Write a program that takes user input. Convert and show the input in title case.

var userInp = prompt("Enter a string to convert it into the Title Case: ");

function titlecase(string) {
    var sentence = string.toLowerCase().split(" ");
    
for (var i = 0; i < sentence.length; i++) {
sentence[i] = sentence[i][0].toUpperCase()+ sentence[i].slice(1);
}
return sentence.join(" ");
}
var titlecased = titlecase(userInp);
document.write(titlecased);


                             // Strings: measuring length and extracting parts

// 1. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

var favMob = prompt('Please enter your favourite mobile model ?')

document.write(favMob + '\n')
document.write(favMob.length)



// 2. Write a program to display the last character of a user input.

var character = prompt('Please enter your word to find the last character ?')
var lastCharacter =  character.charAt(character.length - 1)
document.write(lastCharacter);



                                  // Strings: finding segments



// 1. Write a program to find the index of letter “n” in the word “Pakistani” 
// and display the result in your browser.

var a = "Pakistan";
var b = a.indexOf("n");
document.write(b);



// 2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . ,  !), prompt the user to enter a valid username.


var userInput = prompt("enter your username?");

var specialsymbol1 = userInput.indexOf("!")
var specialsymbol2 = userInput.indexOf("@")
var specialsymbol3 = userInput.indexOf(".")

if ( specialsymbol1 !== -1 ||
     specialsymbol2 !== -1 ||
      specialsymbol3 !== -1) {
    alert("Please enter a valid username") ; 
} else{
    alert(" its valid");
}


// 3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the”  in given string.

var jumps = "The quick brown fox jumps over the lazy dog ";
var occur = 0;
for (var i = 0; i < jumps.length; i++) {
 var check = jumps.slice(i, i+3).toLowerCase();
    
 if (check === "the" ){
   occur = occur + 1
 }
}
document.write(occur)



                     // Strings: finding a character at a location

// 1. Write a program to find the character at 
// 3rd index in the word “Pakistani” and display the result in your browser.
// 

var a = "Pakistan";
var b =  a.charAt(3);
document.write(b)



var a = "Pakistan";
var b =  a.indexOf("i");
document.write(b)


                         // Strings: replacing characters

// 1. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
 var text = city.replace("Hyderabad","Islamabad");
 document.write(text);



// 2. Write a program to replace all occurrences of “and” in the string 
// with “&” and display the result in your browser.

// it select only one 
var a = "i am cool and so busy and professional";
var text = a.replace("and", "&");
document.write(text , '<br/>');
 


// // it select global ones means all those elements 
 var message = 'Ali and Sami are best friends. They play cricket and football together.';
var text = message.replace(/and/g, "&");
document.write(text);


// 1. Write a program that takes a positive integer from user & display 
// the following in your browser.
// a. number (example number: 3.45214)

var positiveNumber = parseInt(prompt("Enter number? ", 3.45214 ));

// b. round off value of the number
var positiveNumber = parseInt(prompt("Enter number? ", 3.45214 ));
var a = Math.round(positiveNumber);
document.write(a)


// c. floor value of the number
var positiveNumber = parseInt(prompt("Enter number? ", 3.45214 ));
var a = Math.floor(positiveNumber);
document.write(a)


// d. ceil value of the number
var positiveNumber = parseInt(prompt("Enter number? ", 3.45214));
var a = Math.ceil(positiveNumber);
document.write(a)


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.


// a. Number (example number: -2.678 )
var negNumber = parseInt(prompt("Enter number? ", -2.678));



// b. round off value of the number
var negNumber = parseInt(prompt("Enter number? ", -2.678));
var a = Math.round(negNumber);
document.write(a)



// c. floor value of the number
var negNumber = parseInt(prompt("Enter number? ", -2.678));
var a = Math.floor(negNumber);
document.write(a)



 // d. ceil value of the number
var negNumber = parseInt(prompt("Enter number? ", -2.678));
var a = Math.ceil(negNumber);
document.write(a)



                           // Generating random numbers


// 1. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var a = Math.random();
document.write(a);

var dice = parseFloat(Math.ceil(Math.random()*6));
document.write(dice);




// 2. Write a program that simulates a coin toss using random() method  of JS Math class. Display the value of coin in your browser.

// 2 = Heads and 1 = Tails
var toss = Math.round(Math.random() * 2);
if (toss === 2) {
    document.write('its Heads') 
} else if (toss === 1) {
    document.write('its Tails')
} else {
    document.write('Try again')
}




// 3. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input 
// equals the secret number, congratulate the user.

var SecretNumber = Math.ceil(Math.random()*10);

var userInput = parseInt(prompt("Enter a number to guess the secret number between 1 to 10: "));
if(userInput === SecretNumber){
    alert("Congratulations! You guessed the correct secret number!");
} else{
    alert("Better luck next time")
}


// Converting strings to integers and decimals


// 1. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userWeight = parseFloat(prompt("Enter the weight: "));
document.write(userWeight);




// Converting strings to numbers, numbers to strings


// 1. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser.
// Hint: (use typeof())

var userGiven = prompt( "enter a number?", "472");
var convertNum = parseInt(userGiven);
document.write(typeof(convertNum))


// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var userGiven = parseInt( prompt( "enter a number?", 35.36));
userGiven = userGiven.toString();
document.write(typeof(userGiven))



// Controlling the length of decimals

// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666

var percentage = (30 / 45) * 100;
var Decimals = percentage.toFixed(2);
document.write(Decimals);


























