var userName = window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("headsup");
greetingParagraph.innerHTML += " " + userName;

var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"));

var operand1 = document.getElementById("op1");
var operand2 = document.getElementById("op2");
operand1.innerHTML += num1;
operand2.innerHTML += num2;


var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;


document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + addition;
document.getElementById("subtraction").innerHTML = "The subtraction of " + num1 + " and " + num2 + " is " + subtraction;
document.getElementById("multiplication").innerHTML = "The multiplication of " + num1 + " and " + num2 + " is " + multiplication;
document.getElementById("division").innerHTML = "The division of " + num1 + " and " + num2 + " is " + division;
document.getElementById("modulus").innerHTML = "The modulus of " + num1 + " and " + num2 + " is " + modulus;
