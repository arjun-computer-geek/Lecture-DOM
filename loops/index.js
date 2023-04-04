// while
/*
while(condition){
    //body of exectution
}
*/
// for

// do while

// let a = 5;
// while (a <= 10) {
//   console.log("a");
//   a = a + 1;
// }

//print even number to the given number

// function printEven(number) {
//   let a = 1;
//   while (a <= number) {
//     const b = 6;
//     if (a % 2 == 0) console.log(a);
//     a = a + 1;
//   }
// }

// printEven(20);

// const arr = [1, 2, 3, 4, "d", 6, 7, 8, 9, 10];

// const printNumber = () => {
//   let a = 9;
//   while (a >= 0) {
//     console.log(arr[a]);
//     a = a - 1;
//   }
// };

// printNumber();
// var x = 2;
// do {
//   console.log(x);
//   x = x + 1;
// } while (x < 5);

// for (let a = 0; a < 10; a++) {
//   console.log(a);
// }

// write a function that return sliced array
// customSlice([], 0, 5)

function customSlice(arr, start, end) {
  const newArr = [];
  if (end <= arr.length)
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }

  return newArr;
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnedArr = customSlice(arr2, 5, 11);
console.log(returnedArr);
