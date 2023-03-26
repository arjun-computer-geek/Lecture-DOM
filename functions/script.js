// declear
var a;
// assignment
a = 5;

// dcelaration + assignment
var b = 8;

//Fuction > bunch of resuable code

// defintaion of function

// 1>  function which not giving output and not taking input
function printName() {
  console.log("hey Jugnu sir.");
}

// calling of a function
printName();

// 2.> function which takes input but not giving output

function printSum(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}
// calling function
printSum(2, 3);

// 3.> function which not taking input but giving output
function printNum() {
  return 93;
}

//calling function
var data = printNum();

console.log(data);

// 4.> function which takes input and give output

function increaseByOne(num) {
  const result = num + 1;
  return "num + 2";
}

var value = increaseByOne(9);

console.log(value);
