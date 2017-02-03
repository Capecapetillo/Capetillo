//comparison true
var x = 5; if (x < 8);
var y = 11; if (y = 11);
var a = 6; if (a > 4);
//comparisons false
var b = 9; if (b > 12);
var c = 5; if (c < 4);
var d = 3; if (d > 20);
//substring
var cadena = "Estamos",
start = 0,
end =  2,
subcadena = cadena.substring(start, end);
console.log(subcadena);

var string = "estudiando",
start = 2,
end = 3,
subcadena = string.substring(start, end);
console.log(string);

var cadena = "algo de javascript",
start = 0,
end = 5,
subcadena = cadena.substring(start, end);
console.log(cadena);

console.log("Metallica".substring(0,2));


var cadena = "para nuestro projecto",
start = 1,
end = 3,
subcadena = cadena.substring(start, end);
console.log(cadena);

var cadena = "para automatizar",
start = 5,
end = 7,
subcadena = cadena.substring(start, end);
console.log(cadena);

//Declare 5 Arrays and print only one of the values inside, it can be any of them.
var fruits = ["banana","lettuce","apple","orange"];
var name = fruits [1];
console.log(name);
var vegetables = ["carrot","potatos","tomatoes","cucumber"];
Var name = vegetables [2];
console.log(name);
var cars = ["vmw","ford","chevrolet","nissan"];
var name = cars [3]
console.log(name);
var futball teams = ["leon","chivas","morelia","irapuato"];
var name = futball teams [2];
console.log(name);
var brand shoes = ["capa de ozono","cklass","dukeda milano","calzado chabelo"];
var name = brand shoes [2];
console.log(name);



//Write 6 simple if's, where if the condition is true, prints this: "I'm doing it in the right way"
if (9 < 10) {
  console.log("i am doing it in the right way");
}

if (4 > 3) {
  console.log("i am doing it in the right way");
}

if (2 < 11) {
  console.log ("i am doing it in the right way");
}

if (5 == 5) {
  console.log ("i am doing it in the right way");
}

if (7 < 9) {
  console.log ("i am doing it in the right way");
}

if (20 > 10) {
  console.log ("i am doing it in the right way");
}

//Based on Modulo operations, write 6 sentences where 3 of them returns 0 as
// result and 3 others with 1 as the output. Try to use big numbers

//erturns 1
console.log (100/99);
console.log (99/99);
console.log (5/4);
//returns 0
console.log (3/4);
console.log (24/34);
console.log (100/999900);
