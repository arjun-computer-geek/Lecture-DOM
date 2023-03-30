//difference between let, const, var

//scope
// {}

// if (2 === 3) {
//   console.log("hey");
//   console.log("yes");
// } else {
//   console.log("else");
// }

// // hoisting
// console.log(a);
// // tempral dead zone
// console.log(b);
// console.log(c);

// var a = 8;
// const b = 20;
// let c = 50;
// const b = 10;
// let c;
// c = 10;

// how var let and const behave in scope

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// a();
// // b();

// function a() {
//   console.log("hello");
// }

// const b = () => {
//   console.log("hello b");
// };

// const c = function () {
//   console.log("c");
// };

// c();

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

const add1 = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

const add2 = (num1, num2) => num1 + num2;

console.log(add(5, 6));
console.log(add1(5, 5));
console.log(add2(5, 3));

// [1, 2, 3, 4, 5].map((item) => {
// return <>
// <h1>fhsfj</h1>
// {item}
// </>
// }
// )
