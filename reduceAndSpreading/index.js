// console.log("hey");

// const printer = (value) => {
//   console.log(value);
// };

// arr.map(printer);

// const sum = (givenArr) => {
//   let result = 0;

//   for (let i = 0; i < givenArr.length; i++) {
//     result = result + givenArr[i];
//   }

//   return result;
// };

// console.log(sum(arr));

// const result = arr.reduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// }, 0);

// console.log(result, "result");
// let arr = [1, 2, 3, 4, 2, 5, 6, 5, 7, 7, 8, 9, 7];

// const output = arr.reduce((acc, curr) => {
//   //   console.log(curr, acc);
//   if (curr % 2 === 0) {
//     return acc + curr;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(output);

// {1: 1, 2: 2}

// const output = arr.reduce((acc, curr) => {
//   if (acc[curr]) {
//     acc[curr] = acc[curr] + 1;
//   } else {
//     acc[curr] = 1;
//   }

//   return acc;
// }, {});

// console.log(output, "outpu");

function total(arr) {
  const reusult = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return reusult;
}
// const total = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(total([1, 2, 3])); // 6
