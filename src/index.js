import React from "react";
import ReactDOM from "react-dom";
import * as func from "./calculator.js";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{func.add(1, 2)}</li>
    <li>{func.multiply(2, 3)}</li>
    <li>{func.subtract(7, 2)}</li>
    <li>{func.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
