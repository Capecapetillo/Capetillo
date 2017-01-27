//Using a For loop, print out numbers from 0 to 100 with a increase of 5 each.
for (var i = 0; i <= 100; i+=5) {
    console.log([i]);
}
//Using a For loop, print all the values of an array by separate.
//Tip: You will need to use .length ;-)
var names = ["Javier","Eduardo","Romero","Capetillo"];
for(var i = 0; i<names.length; i++){
console.log(names[i]);
}
//Using a For loop, print out numbers from 24 to 2 with a decrease of 2 each.
for (var i = 24 ; i >= 0; i-=2) {
    console.log([i]);
}
//Using an If statement, generate a condition that includes a .length comparation,
// and print numbers from 10 to 50 using for.
//Include an else that prints the same values but decreasing.
var nombres = ["romero", "capetillo", "javier", "eduardo"];

if(nombres.length>=2){
  for(var i=10; i<=50; i++){
    console.log(i);
  }
}
  else{
    for(var a=50; a>=10; a--){
      console.log(a);
    }
  }

//Using an If statement, generate a similar condition as in excercise 2,
//and print numbers from 9 to 0 using for.
//Include an else that prints the same values but increasing.
var names = ["Javier","Eduardo","Romero","Capetillo"];
if (names.length>=9){
  for (var i=9; i>=0; i--){
    console.log(i);
  }
}
else{
  for(var a=0; a<=9; a++){
    console.log(a);
  }
}
