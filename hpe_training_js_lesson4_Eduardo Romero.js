/*1. Create a simple function that prints out this line: "My name is: <yourName> and guess what?
I'm indeed learning js" and call it sending your name as a parameter.*/
var yourname = "Javier Eduardo Romero Capetillo";
function myfunction(yourname){
}
console.log("My name is " + yourname + " and guess what?, I am indeed learning js");
/*2. Create a simple While loop that prints true until the condition becomes false.*/
var i = 0;
while (i<10) {
console.log("true");
    i++;
}
console.log("false");

/*3.Create a While loop that prints all the statements inside an array of at least 10 words/sentences.*/
var soccer = ["leon", "manchester", "germany", "alabama", "paris", "atlas", "jaguares", "veracruz", "portugal",
"holanda"];
var i=0;
while (soccer[i]){
  console.log(soccer [i]);
  i++;
}

/*4. Combine a While and For, the For loop is gonna be isnide the While loop. Tip: take care of the infinite loops ;)*/
var condition = true;
console.log(condition);
while (condition){
  var numbers = [1, 2, 3, 4, 5];
  for(var i=0; i<5;i++){
    console.log(numbers[i]);
    }
   condition = false;
  console.log(condition);
}

/*5. Ask a user for a number between 1-100 and create an If, elsif, else statement where you can print something
different depending on his/her choico make sure you are making all this inside a function and the parameter
that is gonna be sent, is the user's answer. Tip: prompt is gonna help you out with this.
*/

function myfunction(){
var number = prompt("Please, enter a number from 1 to 100");
  if(number<20){
    console.log("your number is too low");
  }else if(number<60){
    console.log("your number is appropiate");
  }else {
    console.log("your number is too high, congratulations");
  }
}
