// const mathScores = [39, 50, 45, 41, 50];
// // console.log(mathScores[2]);
// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// // const newScore = mathScores.map((ele, i, arr) => {
// //   console.log(ele);
// // });
// // console.log(newScore);
// // // output [44, 55, 50, 46, 55]
// // console.log(console);

// const matrix = [
//   [1, 2, 3, 4, 5, 6, 7],
//   [4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17],
//   [18, 19, 20, 21, 22, 23, 24],
//   [1, 2, 3, 4, 5, 6, 7],
// ];

// console.log(matrix[0][1]);

// // output
// /*
// [
//   [1a, 2a, 3a, 4a, 5a, 6a, 7a],
//   [4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17],
//   [18, 19, 20, 21, 22, 23, 24],
//   [1, 2, 3, 4, 5, 6, 7],
// ];

// */

// // matrix.map((item) => {
// //   console.log(item);
// // });
// // const newArr = [11, 12, 13, 14, 15, 16, 17];

// // const output = newArr.map((item) => `${item}a`);

// // console.log(output);

// // const output = [];

// // for (let i = 0; i < matrix.length; i++) {
// //   const newArr = [];
// //   for (let j = 0; j < matrix[i].length; j++) {
// //     newArr.push(`${matrix[i][j]}a`);
// //   }
// //   output.push(newArr);
// // }

// // console.log(output);

// function stringConcat(arr) {
//   // const strArr = arr.reduce((acc, curr) => {
//   //   return acc + curr;
//   // }, "");

//   // return strArr;
//   let output = "";

//   arr.map((item) => {
//     output = `${output}${item}`;
//   });

//   return output;
// }

// console.log(stringConcat([1, 2, 3])); // "123"

// let obj = { name: "arjun", age: 25, birthDate: "13-10-2000", abc: "jugnu" };
// obj = { skill: "JavaScript", ...obj };

// console.log(obj);
// const obj1 = { name: "kumar" };
// // const name = obj.name;
// // const age = obj.age;

// const { name, birthDate, ...baki } = obj;
// const { name: obj1Name, def: demo = 50 } = obj1;
// // console.log(abc);
// console.log(birthDate);
// console.log(demo);
// console.log(baki);

// const arr = [1, 2, 3, 5, 6, 7, 8, 9];

// const [abc, , , def, ...rest] = arr;
// console.log(abc, def);
// console.log(rest);

// const [a = 30] = [];
// console.log(a);

// const newArr = [...arr, "arjun", "krishn"];
// console.log(newArr, "new");

// const myFunc = (a, b = 10, c, ...rest) => {
//   console.log(a, b, c);
//   console.log(rest);
// };

// myFunc(1);
let obj = { name: "arjun", age: 25, birthDate: "13-10-2000", abc: "jugnu" };
const myFunc1 = ({ name, age, ...rest }, ...bakiKaArgument) => {
  console.log(name);
  console.log(age);
  console.log(rest);
  console.log(bakiKaArgument);
};

myFunc1(obj, 5, 6, "BlahBlah");
