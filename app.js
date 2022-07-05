                                                                                           // ALERT task 1


// 1. Write a script to greet your website visitor using JS alert box.

alert("  Hello there, Alishba here! ");


// 2 Write a script to display following message on your web page:

alert(" JavaScript Alert! \n Please enter a valid password ");

// 3 Write a script to display following message on your web page: (Hint : Use line break)
alert(" Welcome JavaScript land! \n Happy coding");

// 4. Write a script to display following messages in sequence:

alert(" Welcome JavaScript land... ");

alert(" Happy coding \n  Prevent the land from creating additional dialogs");


// 5. Generate the following message through browser’s developer console

alert(" Hello... I can run JS through my web browser,s console");

console.log(" Hello... I can run JS through my web browser,s console   ");





                                                        //  VARIABLES FOR STRINGS   task 2    
                                                        
                                                        

// 1. Declare a variable called username.

var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name. 


var myName = "Syeda Alishba Nadeem";

// 3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. 


var message ;
 message = "Hello World... ";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

alert(" Jhone Doe  ");
alert(" 15 years old");
alert(" certified mobile application developer");

// 5. Write a script to display the following alert using one JS variable:


var x = `${"PIZZA"}
 ${"PIZZ"}
 ${"PIZ"}
 ${"PI"}
 ${"P"};`
 alert(x);

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P ");

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email;
var message = "My email address is";
email = 's.alishba.nadeem@example.com';
alert(message + " " + email);



// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book;
book = "A smarter way to learn JavaScript";
var my = " I am trying to learn from the Book"
alert(my + " " + book);


// 8. Write a script to display this in browser through JS




document.write( "my assignment is based on tasks ");




// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 

var design;
design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”" ;
alert(design);


                                                                          // VARIABLES FOR NUMBERS task 3




 
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box


var age;
age = 15;
mess1 = " I am ";
mess2 = " years old ";

var ages = ( mess1 + age + mess2 );
alert(ages);


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.


var N = prompt("how many times you have visited this website?");
alert("you have visited this site " + N + " " + "times");



// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 


var birthYear;
birthYear = 13;
document.getElementById("myP").innerHTML = "my birth day is " + birthYear + " " + "January";




// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 


var a = "John Doe";
var b = "T-shirts";
var c = 5;
var d = "xyz clothing store";

var userName = prompt("Whats your name?", a);
console.log(userName);
var userResponse = prompt("how many shirts you want", c);
console.log(userResponse);


document.getElementById("shop").innerHTML = userName + " " + "ordered" + " " +  userResponse +  " " + b +" from " + d ;


                                                      // VARIABLE NAMES: LEGAL & ILLEGAL task 4


 
// 1. Declare 3 variables in one statement.

 var username = "alishba", age = "25", birthday = "13 january";               

//  2. Declare 5 legal & 5 illegal variable names

// legal 

var  _9w;;
var  $_;
var myvar$ ;
var abc123;
var user_256$;


// illega\

// var P2_a%88$;
// var 234;
// var   user value;
// var @## ;
// var !^&'';


// 3 task

// 1. Declare 3 variables in one statement. 2. Declare 5 legal & 5 illegal variable names. 3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ 

var rules = ("Rules for naming JS variables");
var only = (" variable names can only contain letters, numbers, underscores, dollar signs");
var musts = ("Variables must begin with a abc123 , $user , _uservalue23");
var cases = (" Variable names are case sensitive");
var not = (" Variable names should not be js keyword");


document.getElementById("rule").innerHTML = rules ;
document.getElementById("only").innerHTML = only ;
document.getElementById("must").innerHTML = musts ;
document.getElementById("sensitive").innerHTML = cases;
document.getElementById("should not").innerHTML = not;




                                                                              // MATH EXPRESSIONS task 5



//    1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 
var num1 = 3;
var num2 = 5;
var numMsg = ("Sum of 3 and 5 is");
var newNum = (num1 + num2);
document.getElementById("num").innerHTML = numMsg + " " + newNum;



// method 2 

var userNew1 = prompt("Enter your number ?" , 5)
userNew1 = +userNew1
var userNew2 = prompt("Enter your number ?",3 )
userNew2 = +userNew2

var total = userNew1 + userNew2;
console.log(total);

// method 3 
var userNew1 = parseInt(prompt("Enter your number ?", 5))
var userNew2 = parseInt(prompt("Enter your number ?",  3))
var total = userNew1 + userNew2;
console.log(total);


// 2. Repeat task1 for subtraction, multiplication, division & modulus. 



var num1 = 3;
var num2 = 5;
var numMsg = ("Subtractio of 3 and 5 is");
var newNum = (num1 - num2);
document.getElementById("que1").innerHTML = numMsg + " " + newNum;

var num1 = 3;
var num2 = 5;
var numMsg = ("Multiplication of 3 and 5 is");
var newNum = (num1 * num2);
document.getElementById("que2").innerHTML = numMsg + " " + newNum;

var num1 = 3;
var num2 = 5;
var numMsg = ("Division of 3 and 5 is");
var newNum = (num1 /  num2);
document.getElementById("que3").innerHTML = numMsg + " " + newNum;

var num1 = 3;
var num2 = 5;
var numMsg = ("Modulus of 3 and 5 is");
var newNum = (num1 % num2);
document.getElementById("que4").innerHTML = numMsg + " " + newNum;



// 3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
// MATH EXPRESSIONS | JAVASCRIPT 
 
// after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 




// que a
var a = 5;


// que b


var after = ("Value after variable declaration is");
document.getElementById("after").innerHTML = after + " " + a;


// que c

var initialValue = 5;


// que d 


var initialValue = 5;
var initial = ("Initial value is : ");
document.getElementById("initial").innerHTML = initial  + " " + initialValue;

// que e 

var num = 5;
var b =  ++num;
console.log(b);

// que f 

var increment = ("Value after increment is");
document.getElementById("inc").innerHTML = increment + " " + b;


// ques g 


var num = 5;
var b =  ++num + 7;
console.log(b);

//  que h 

var add7 = ("Value after addition is:");
document.getElementById("add7").innerHTML = add7  + " " + b;

//   que i   


var num = 13;
var b =  --num;
console.log(b);

// que j 

var dec = ("Value after decrement is");
document.getElementById("dec").innerHTML = dec + " " + b;


// que k 

var num = 12;
var num2 = 3;
var newModulus = num % num2;
console.log( newModulus);

var dec = ("The remainder is :");
document.getElementById("dec").innerHTML = dec + " " + newModulus;

 
//  4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
 
 


var costOfOneMovie = 600;
var costOf5Tickets = 5 * costOfOneMovie;
var totalCost = costOf5Tickets
console.log(totalCost);

document.getElementById("totalcost").innerHTML = "Total cost to buy 5 tickets to a movie is " + totalCost + "PKR";




// 5. Write a script to display multiplication table of any number in your browser. E.g 
 
 
// method 1 

// var table = prompt(" write your num ?");
// for (var i = 1; i <= 10; i++) {
// result = i * table;
// console.log( `${table}  * ${i}  =  ${result}` );
// }

// method 2 

// var userName = prompt("write table of 2", 2 );
// userName = parseInt( userName);

// for ( i = 1; i < 11 ; i++){
//     result = i * userName;
//     console.log( userName, "*" , i, "= ", result)
// }



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = (cTemp * 9 / 5 ) + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}




function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(25);
fToC(45);



// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
// Comp

var shopping = "Shopping Cart";
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var item1 =  (  priceItem1 * quantityItem1);
var item2 = ( priceItem2 * quantityItem2);

var total =  item1 + item2  + shippingCharges;
console.log(total);


document.getElementById("shop1").innerHTML = "Price of item 1 is" + " " + priceItem1;

document.getElementById("shop2").innerHTML = "Quantity of item 1 is" + " " +quantityItem1;

document.getElementById("shop3").innerHTML = "Price of item 2 is" + " " + priceItem2;

document.getElementById("shop4").innerHTML = "Quantity of item 2 is" + " " + quantityItem2;

document.getElementById("shop5").innerHTML = "Shipping charges are " + " " + shippingCharges;

document.getElementById("shop6").innerHTML = "Total cost of your order is" + " " + total;


// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

var markSheet = "Marksheet";
var totalnumber = 980;
var marksObtained = 804;
var percent = (marksObtained / totalnumber) * 100;
console.log(percent);


document.getElementById("mark").innerHTML = "MARK SHEET";

document.getElementById("mark1").innerHTML = "Total marks:" + " " + totalnumber ;
document.getElementById("mark2").innerHTML = "Marks obtained:" + " " + marksObtained ;
document.getElementById("mark3").innerHTML = "Percentage:" + " " + percent + "%" ;


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)




var us1Dollar = 104.80;
var saudi1Riyal = 28;

var pakistaniCurrencyTotal = (us1Dollar * 10)+ (saudi1Riyal * 25);

console.log(pakistaniCurrencyTotal);

document.getElementById("currency").innerHTML = " Currency in PKR";

document.getElementById("pkr").innerHTML = "Total currency in PKR:" + " " + pakistaniCurrencyTotal ;


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

var arithmetic = 5;
var totalArithmetic = (arithmetic + 5) * 10  / 2 ;
console.log(totalArithmetic);



// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values
// Output them to the screen like so: “They are either NN or NN years old”.

// method 1

var currentYear = 2016;
var birthYear = 1992;

var age = currentYear - birthYear;
console.log(age);

document.getElementById("age").innerHTML = "AGE CALCULATOR";

document.getElementById("age1").innerHTML = " Current year :" + " " + currentYear ;


document.getElementById("age2").innerHTML = "Birth year:" + " " + birthYear ;
document.getElementById("age3").innerHTML = "Your age is :" + " " + age ;


// method 2

 
var a = new Date("1-13-1997");
var b = new Date("7-2-2022");
c = b - a
console.log(Math.round (c / (1000 * 60 * 60 * 24 * 365) ));


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

var favSnack = ("Chocolate chips") ;
var currentAge = 15; 
var maxAge = 65;
var amountOfSnackperdays = 3;

var totalsnack = (maxAge - currentAge ) * amountOfSnackperdays;
console.log(totalsnack);

document.getElementById("choco").innerHTML = " THE LIFETIME SUPPLY CALCULATOR";

document.getElementById("choco1").innerHTML = "Favourite snack :" + " " + favSnack ;

document.getElementById("choco2").innerHTML = "Current age:" + " " + currentAge ;

document.getElementById("choco3").innerHTML = "Estimated maximum age :" + " " + maxAge ;

document.getElementById("choco4").innerHTML = "Amount of snacks per day :" + " " + amountOfSnackperdays ;

document.getElementById("choco5").innerHTML = "You will need"+ " " + totalsnack + " " + "chocolate chips to last you untill the ripe old age of " + maxAge ;


    
                                                                                         // chap 6 to 9 



// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser



var a = 10;
var b =  ++a;

console.log(b)

document.getElementById("val").innerHTML = "Results of chap 6 questio 1";

document.getElementById("val1").innerHTML = "The value of ++a is :" + b ;
document.getElementById("val1a").innerHTML = "Now   the value of a is :" + b ;


var a = 11;
var b =  a++;

console.log(b)
console.log(a)

document.getElementById("val2").innerHTML = "The value of ++a is :" + b ;
document.getElementById("val2a").innerHTML = "Now   the value of a is :" + a ;




var a = 12;
var b =  --a;

console.log(a)
console.log(b)

document.getElementById("val3").innerHTML = "The value of ++a is :" + a ;
document.getElementById("val3a").innerHTML = "Now   the value of a is :" + b ;


var a = 11;
var b =  a--;
console.log(b)
console.log(a)


document.getElementById("val4").innerHTML = "The value of ++a is :" + b;
document.getElementById("val4a").innerHTML = "Now   the value of a is :" + a ;




 
// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--



var a = 2;
var b = 1;
var result1 = --a  -  --b  +  +  +b  +b  --;
console.log(a);
console.log(b);

var a = 2;
var b = 1;
var result2 = --a;
console.log(a);
console.log(b);

var result3 = --a - --b;

console.log(a);
console.log(b);

var result3 = --a  -  --b  +  +b;

console.log(a);
console.log(b);

var result4 = --a  -  --b  +  +b  +  b--;
console.log(a);
console.log(b);


// 3 Write a program that takes input a name from user & greet the user.


var userNew = prompt("Enter your name ?", "Alishba")
alert ("welcome" + userNew);


// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 


// var userName = prompt("write table of multiplication ? ", 5 );


// for ( i = 1; i < 11 ; i++){
//     result = i * userName;
//     console.log( userName, "*" , i, "= ", result)
// }




var table = prompt(" write your num ?", 5);
for (var i = 1; i <= 10; i++) {
result = i * table;
console.log( `${table}  * ${i}  =  ${result}` );
}


// 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
// ALERTS | JAVASCRIPT 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 


var subject1 = prompt("enter subject name 1?" , "ENGLISH");
var subject2 = prompt("enter subject name 1?", "MATH");
var subject3 = prompt("enter subject name 1?", "URDU");

console.log(subject1);
console.log(subject2);
console.log(subject3);

totalSubjectMarks = 100;


var engmarks = parseInt(prompt("Enter your english marks ?", 54));
var mathmarks = parseInt(prompt("Enter your urdu marks ?" , 54 ));
var urdumarks = parseInt(prompt("Enter your maths marks ?" , 48 ));

console.log(engmarks);
console.log(mathmarks);
console.log(urdumarks);

var totalmarks = engmarks + mathmarks + urdumarks;
console.log(totalmarks);

var engsum = engmarks / totalSubjectMarks * 100;
console.log(engsum);

var mathsum = mathmarks / totalSubjectMarks * 100;
console.log(mathsum);

var urdusum = urdumarks / totalSubjectMarks * 100;
console.log(urdusum);

var sumofpercentage = engsum + mathsum + urdusum;
console.log(sumofpercentage);


document.getElementById("line1").innerHTML = "SUBJECT" + " " + "TOTAL MARKS" + " "  + "OBTAINED MARKS" + " "    +  "PERCENTAGE";

document.getElementById("line2").innerHTML = subject1 + " "  + " " +  totalSubjectMarks + " "  + " "  + engmarks  + " " + engsum
" " +  "%";

document.getElementById("line3").innerHTML = subject2 + " "  + " " +  totalSubjectMarks + " "  + " "  + mathmarks  + " " + mathsum
" " +  "%";

document.getElementById("line4").innerHTML = subject3 + " "  + " " +  totalSubjectMarks + " "  + " "  + urdumarks  + " " + urdusum
" " +  "%";

document.getElementById("line5").innerHTML = "Total Result "+ (totalSubjectMarks + totalSubjectMarks + totalSubjectMarks ) + " " + totalmarks + " "  + " "  + sumofpercentage  + " " + 
" " +  "%";



                                          // chapter 9 to 11 


 
  // 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

  var cities = ["karachi"];
  var userAns = prompt("tell me your city name ?", "karachi");
   if ( userAns === cities);
  alert("welcome to Karachi");
  

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 


var x = prompt("whats your gender?");
if ( x == "male" ){
    alert("Good morning! Sir.");
}
else if ( x == "female" ){
    alert("Good morning, Ma,am");
}
else{
    alert("you should enter your gender before moving forward.")
}


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 
// Signal color  Message Red Must Stop Yellow Ready to move Green Move now 

var signal = prompt("whats the colour of the road traffic signal ?");

if ( signal == "red" ){
    alert("you must stop");
}
if ( signal == "yellow" ){
    alert("ready to move");
}
if ( signal == "green" ){
    alert("move");
}


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = prompt("whats your fuel")
parseFloat = (0.25, "litres");
if(fuel <= 0.25){
    alert("Please refill the fuel in your car");
}
else {
    alert("good to go");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs



var a = 4; 
if (++a === 5){
    alert("given condition for variable a is true"); } 

var b = 82; 
if (b++ === 83)
{ alert("given condition for variable b is true");
}
if (b++ !== b){
   alert("given condition for variable is right")
}

 var b = 82;
  if (b++ === 85){ 
   alert("given condition for variable b is true"); } 
else {
   (alert("given condition for variable is false"))
}


var c = 12;
 if (c++ === 13){
    alert("condition 1 is true"); 
   } if (c === 13){ 
       alert("condition 2 is true"); } 
       if (++c < 14){
            alert("condition 3 is true"); } 
            if(c === 14){
                alert("condition 4 is true"); } 


var materialCost = 20000;
 var laborCost = 2000;
  var totalCost = materialCost + laborCost;
   if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
    if (true){ 
       alert("True"); }
        if (false){ 
           alert("False"); } 


           
if("car" < "cat"){
alert("car is smaller than cat"); } 


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:



var a = 80;
var b = 70;
var c = 60;
var d = 40;


var remarks1 = "Excellent"
var remarks2 = "Good"
var remarks3 = "you need to improve"
var remarks4 = "sorry"


var subject1 = prompt("enter subject name 1?" , "ENGLISH");
var subject2 = prompt("enter subject name 1?", "MATH");
var subject3 = prompt("enter subject name 1?", "URDU");

console.log(subject1);
console.log(subject2);
console.log(subject3);

totalSubjectMarks = 300;


var engmarks = parseInt(prompt("Enter your english marks ?", 89));
var mathmarks = parseInt(prompt("Enter your urdu marks ?" , 60 ));
var urdumarks = parseInt(prompt("Enter your maths marks ?" , 40 ));

console.log(engmarks);
console.log(mathmarks);
console.log(urdumarks);

var totalmarks = engmarks + mathmarks + urdumarks;
console.log(totalmarks);

var engsum = engmarks / totalSubjectMarks * 100;
console.log(engsum);

var mathsum = mathmarks / totalSubjectMarks * 100;
console.log(mathsum);

var urdusum = urdumarks / totalSubjectMarks * 100;
console.log(urdusum);

var sumofpercentage = engsum + mathsum + urdusum;
console.log(sumofpercentage);




if ( sumofpercentage >= a ){
    alert( remarks1);
}

if ( sumofpercentage >= b ){
    alert(remarks2);
}

if ( sumofpercentage >= c ){
    alert(remarks3);
}

else{
    alert( remarks4);
}



document.getElementById("lineff").innerHTML = "Marks Sheet";

document.getElementById("line1ff").innerHTML = "Total marks:"  + totalSubjectMarks ;

document.getElementById("line2ff").innerHTML =  "Marks Obtained:" + totalmarks;

document.getElementById("line3ff").innerHTML =   "Percentage: "  + sumofpercentage;

document.getElementById("line4ff").innerHTML = "Grade" + " " + "C ";

document.getElementById("line5ff").innerHTML = remarks3;





// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”




var myNumber = 3;
var userGameAnswer = prompt ("guess my secret number? " );
 userGameAnswer = +userGameAnswer

 if (userGameAnswer == myNumber){
    alert ( "Bingo !!");
 }


 if (userGameAnswer < myNumber){
    alert ( "close enough !");
 } 
 if (userGameAnswer > myNumber){
    alert ( "Try again !");
 } 




//  8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3



var userMath =  prompt("tell me a number which is divisible by 3 ?", 6);
userMath = +userMath;

if( userMath % 3 == 0) {
alert("its divisible");
}
else{
   alert("its not divisible");
}


// 9. Write a program that checks whether the given input is an even number or an odd number.


var number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}6



// 10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”


var temp1 = 41;
var temp2 = 30;
var temp3 = 20;
var temp4 = 10;

var userTemp = prompt ("tell us the temperature in your area ?");
userTemp = +userTemp;

if (userTemp < temp1){
    alert("It is too hot outside");
}
if (userTemp < temp2){
    alert("The Weather today is Normal");
}
if (userTemp < temp3){
    alert("Todays Weather is cool");
}
if (userTemp < temp4){
    alert("OMG! Todays weather is so Cool");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 



// program for a simple calculator



// var operator = prompt("Enter operator ( either +, -, * or / ): ");
// var number1 = parseFloat (prompt("Enter first number:"));
// const number2 = parseFloat (prompt("Enter second number:"));

// var result;
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);






                                                                                     // chapter 12 - 13 




                                                      
//   1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


var userInput = prompt("Enter Character");
var converted = parseInt(userInput);
var numbers = /^[0-9]+$/;
if(userInput.match(numbers)){
    alert("your value is number")
} else if(userInput==userInput.toLowerCase()){
    alert("Your Value is String!!")
   alert("Your Value is Lower Case");
} else {
    alert("Your Value is Upper Case");
}



//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal


var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1) > parseInt(num2)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2) > parseInt(num1)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }



//   another thing

// var a =  prompt ("please enter your character");
// a = Number(a);
// console.log (typeof(a));


// var a =  prompt ("please enter your character");
// a = a.toString();
// console.log(typeof (a));

// var a =  prompt ("please enter your character");
// a = a.toUpperCase();
// console.log(a);

// var a =  prompt ("please enter your character");
// a = a.toLowerCase();
// console.log(a);



// 3  Write a program that takes input a number from user & state whether the number is positive, negative or zero.


const numberab = parseInt(prompt("Enter a number: "));

if (numberab > 0) {
    console.log("The number is positive");
}

else if (numberab == 0) {
  console.log("The number is zero");
}

else {
     console.log("The number is negative");
}


// 4 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwis

var vowels = prompt ("enter your letter?");
vowels = vowels.toLowerCase();
if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
  alert("the word is vowels", true);
}
else {
  alert("the word is not vowel", false);
}


// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var password = "alishba1234";
var passwordFromUser = prompt ("enter your password");

if (passwordFromUser == "") {
  alert("Please enter your password")
}
else if (password ==  passwordFromUser) {
  alert("you have entered the correct password")
}
else  {
  alert("your password is incorrect");
}



// 6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } 

var greeting;
var hour = 23;
// var hour = new Date().getHours();
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write(greeting);


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 


var time = prompt("Enter your time  ");

if (time => 0000 && time < 1200 ) {
    alert("Good morning");
}
else if (time => 1200 && time < 1700 ){
alert("Good evening");
}
else if (time => 1800 && time< 2359){
    alert("Good night");
}


                                                                                   // chapter 14 to 16  





// 1. Declare an empty array using JS literal notation to store student names in future.

var array = [];

// 2. Declare an empty array using JS object notation to store student names in future.

var array = {};
// 3. Declare and initialize a strings array.

var stringArray;
stringArray = ["A", "B", "C", "D", "E"]; 

// 4. Declare and initialize a numbers array.

var numberArray;
numberArray = [1,2,3,4,5,6,7,8,9,10,11,12];


// 5. Declare and initialize a boolean array.

// method 1

var booleanArray;
var booleanArray = [true,false];

// method 2 
var arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = false;
}
console.log(arr2);

// 6. Declare and initialize a mixed array.

var mixedArray = [1, "Bob", "Now is", true];


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:


var eduArrays = ["BS", "BCOM", "MS", "M.PHILL","PHD"]; 
  document.write(" <h3>Qualifications </h3> \n");

for (let i = 1; i < eduArrays.length; i++) {
   console.log (i , eduArrays[i]);
    document.write( i," . ", eduArrays[i] + "<br/>" );
}


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:


var students = ["Micheal", "john", "Tony"];
var studentsScore = [320, 230, 480];
var studentPercentages = ["64%", "46%", "96%"];

document.write("<h3>Scores and Percentages</h3>")

document.write("Score of " + students[0] + " is " + studentsScore[0]+ " . " +  "Percentage is : " + studentPercentages[0]  + "<br>");

document.write("Score of " + students[1] + " is " + studentsScore[1]+ " . " +  "Percentage is : " + studentPercentages[1]  + "<br>");

document.write("Score of " + students[2] + " is " + studentsScore[2]+ " . " +  "Percentage is : " + studentPercentages[2]  + "<br>");



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// // browser.



// // 9. Initialize an array with color names. Display the array
// // elements in your browser.


var colors = ["Blue", "Green", "Yellow", "Orange"];


// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.// Display the updated array in your browser.


var colors = ["Blue", "Green", "Yellow", "Orange"];
var askUserColor1 = prompt ("what colour you want to add in the start ?", "Purple");
colors.unshift(askUserColor1);
console.log(colors);
document.write(colors, "<br/>");

// // b. Ask the user what color he/she wants to add to the end // & add that color to the end of the array. Display the updated array in your browser.

var colors = ["Blue", "Green", "Yellow", "Orange"];
var askUserColor2 = prompt ("what colour you want to add in the end ?", "Tea pink")
colors.push(askUserColor2);
console.log(colors);
document.write(colors , "<br/>");

// // c. Add two more color to the beginning of the array. 
// // Display the updated array in your browser.

var colors = ["Blue", "Green", "Yellow", "Orange"];
var askUserColor3 = prompt ("what colour you want to add in the start?", "Mergenda")
var askUserColor4 = prompt ("what 2nd colour you want to add in the start ?", "teal blue")
colors.unshift(askUserColor3, askUserColor4);
console.log(colors);
document.write(colors , "<br/>");

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

var colors = ["Blue", "Green", "Yellow", "Orange"];
colors.shift();
console.log(colors);
document.write(colors , "<br/>");


// e. Delete the last color in the array. Display the updated
// array in your browser.

var colors = ["Blue", "Green", "Yellow", "Orange"];
colors.pop();
console.log(colors);
document.write(colors , "<br/>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.


var colors = ["Blue", "Green", "Yellow", "Orange"];
var userWishA = prompt ("At which index  you wants the to add?");
var userWishB = prompt ("what colour you wants to add ?");
colors [userWishA] = userWishB;
console.log(colors);
document.write(colors , "<br/>");



// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


var colors = ["Blue", "Green", "Yellow", "Orange"];
var userWishA = prompt ("which index colour you wants to delete?");
var userWishB = prompt ("how many colour you wants to delete ?");
colors.splice(userWishA, userWishB);
console.log(colors);
document.write(colors , "<br/>");




// 10. Write a program to store student scores in an array &  sort the array in ascending order using Array’s sort method.

var studentScore = [320, 230, 480,120];
studentScore.sort();
console.log(studentScore);

// 11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities array.


var cityNames = ["Karachi","Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cityNames.slice(0,3);
console.log(cityNames);
console.log(selectedCities);
document.write(cityNames, "<br/>");
document.write(selectedCities, "<br/>");




// 12. Write a program to create a single string from the 
// below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)

var cat = ["This", "is", "my", "cat"];
var line = cat.join(" ");
console.log(cat);
document.write(line);




// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)



var fifoDevices = ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("DEVICES", "<br/>");
document.write (fifoDevices , "<br/>" );


var fifoDevices = ["Keyboard", "Mouse", "Printer", "Monitor"]; 

for (let i = 0; i < fifoDevices.length; i++) {
    document.write (" <br/> "," out: ")
    document.write (fifoDevices[i])
    console.log(fifoDevices[i]);

} 

// method 2 


var fifoDevices = ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("DEVICES", "<br/>");
document.write (fifoDevices , "<br/>" );


var b = fifoDevices.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.shift();
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.shift();
document.write( "out : <br/>",b , "<br/>");

// refrence method 

// var fifoDevices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices: <br>" + fifoDevices + "<br><br>")
// var fifoRemove = fifoDevices.shift()
// document.write("Out: " + fifoRemove + "<br><br>");
// fifoRemove = fifoDevices.shift()
// document.write("Out: " + fifoRemove + "<br><br>");
// fifoRemove = fifoDevices.shift()
// document.write("Out: " + fifoRemove + "<br><br>");
// fifoRemove = fifoDevices.shift()
// document.write("Out: " + fifoRemove + "<br><br>");


// 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In - First Out)



var fifoDevices = ["Keyboard", "Mouse", "Printer", "Monitor"]; 

document.write ("DEVICES", "<br/>");
document.write (fifoDevices , "<br/>" );


var b = fifoDevices.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.pop()
document.write( "out : <br/>",b , "<br/>");

var b = fifoDevices.pop()
document.write( "out : <br/>",b , "<br/>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     // browser using document.write() method



document.write("<h3>Phones Dropdown</h3>")
var cellPhones = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
document.write("<select>");
document.write("<option>" + cellPhones[0] + "</option>");
document.write("<option>" + cellPhones[1] + "</option>");
document.write("<option>" + cellPhones[2] + "</option>");
document.write("<option>" + cellPhones[3] + "</option>");
document.write("<option>" + cellPhones[4] + "</option>");
document.write("</secellPhones>");


   
                                                                 // chap 17 to 20 





// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var array = [ ];

var array = [
    [1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]
 ];
 console.log(array);

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

var array = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
 ];

console.log(array);

// 3. Write a program to print numeric counting from 1 to 10.


document.write("<h2>Counting</h2><br>");
for(var i=1; i<11; i++){
    document.write(i + "<br>");
    console.log(i);
}



// / 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


document.write("Userdefined Multiplication Table <br>");
var userNumber = parseInt(prompt("please enter your number to show its multiplication table:"));
var userRange = parseInt(prompt("Enter length multiplication table:"));

for(var i = 1; i <= userRange; i++) {
    var result = i * userNumber;
    document.write(`${userNumber} * ${i} = ${result}` + "<br>");
   console.log(`${userNumber} * ${i} = ${result}`);
}





// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]



var fruits = [" Apple ", " Banana ", " Mango ", " Orange ", " Strawberry "];

document.write(fruits , "<br/>")
document.write( "<br> <br/>")

document.write( "WITH LOOP : " , "<br/>")
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br/>");
}

document.write("<br>")
for(i=0; i < fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("Counting: <br>");

for(var i=0; i<11; i++){
    document.write(i + "<br>");
    console.log(i);
}


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


document.write(" Reverse counting: <br>");
for(var i=10; i>0; i--){
    document.write(i + "<br>"); 
     console.log(i);
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write(" Even counting: <br>");

 for(var i=0; i<21; i+=2){
    document.write(i + "<br>");
    console.log(i);
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


document.write(" Odd counting: <br>");

 for(var i=1; i<20; i+=2){
    document.write(i + "<br>");
    console.log(i);
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(" Series counting: <br>");
for(var i=2; i<21; i+=2){
    document.write(i + "k<br>");
    console.log(i)
}


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var Bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var matchFound = true;

var searchFood = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am? ");

for (let i = 0; i < Bakery.length; i++) {
console.log(Bakery[i]);    

if (searchFood == Bakery[i]) {
 matchFound = true;
    document.write(searchFood + " is available at index " + i + " in our bakery");
    break;
}
}
if( searchFood !== Bakery.length) {
matchFound == false;
document.write(searchFood + " is not available at our Bakery") ;   
}



// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var largestNumber = [24, 53, 78, 91, 12];
console.log(Math.max(...largestNumber));
document.write(Math.max(...largestNumber))
document.write("<br/>")


// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


var smallestNumber = [24, 53, 78, 91, 12];
console.log(Math.min(...largestNumber));
document.write(Math.min(...smallestNumber))
document.write("<br/>")


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100


document.write("Multiples of 5 till 100  <br>");
for(var i = 5; i<101; i+=5){
    console.log(i + ",");
    document.write(i + ", ");
}















