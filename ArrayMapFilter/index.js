// const myarr = [
//   "abc",
//   544,
//   "def",
//   {
//     name: "raju",
//     age: 18,
//     languagesKnown: [
//       "Hindi",
//       "English",
//       { Gujrati: ["palanpuri", "surti", "katiyawadi"] },
//     ],
//   },
// ];

// console.log(myarr.length);
// console.log(myarr[3].languagesKnown[2].Gujrati);

// for (let i = 0; i < myarr[3].languagesKnown[2].Gujrati.length; i++) {
//   console.log(myarr[3].languagesKnown[2].Gujrati[i]);
// }

// console.log(myarr[3].languagesKnown[2].Gujrati[0])
// console.log(myarr[3].languagesKnown[2].Gujrati[1])
// console.log(myarr[3].languagesKnown[2].Gujrati[2])

// const concatanateValueWithIndex = (value, index) => {
//   return `${value} ${index}`;
// };

// myarr[3].languagesKnown[2].Gujrati.map((a, b, c) => {
//   // console.warn(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(myarr[3].languagesKnown[2].Gujrati[1]);

//   // if (a === "surti") {
//   //   console.log(a);
//   // }
//   // if (b === 2) {
//   //   console.log(b);
//   // }
//   console.log(concatanateValueWithIndex(a, b));
// });

// input
// [1, "r", {}]
// output
// {value: 1, index: 0, array: [[1, "r", {}]] }

// const mapcopy = (givenArr) => {
//   for (let i = 0; i < givenArr.length; i++) {
//     console.log({ value: givenArr[i], index: i, arr: givenArr });
//   }
// };
// mapcopy([1, 2, 3, 4, 5, 6, 7]);
// mapcopy(myarr);
