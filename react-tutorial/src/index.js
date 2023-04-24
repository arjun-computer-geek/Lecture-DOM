import React from "react";
import ReactDom from "react-dom";
import AppCmponentt from "./App";

const element = document.querySelector("#app");

// let headings = <></>;

// // for (let i = 0; i <= 100; i++) {
// //   headings += <h1>Hi, This is React tutorial {i} </h1>;
// // }
// let time = 8;
// if (time > 7) {
//   headings = <h1>Hi, Time is {time} </h1>;
// } else {
//   headings = <h1>Hi, Time is {time} </h1>;
// }

ReactDom.render(<AppCmponentt />, element);
