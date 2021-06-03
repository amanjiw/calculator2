"use strict";
const main = document.getElementById("main");
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const clear = document.querySelector("#clear"); 
const root = document.querySelector("#root"); 
const square = document.querySelector("#square");
const backspace = document.querySelector("#backspace");
const equal = document.querySelector("#equal");
let memory,lastOperation = "",eql=false;

buttons.addEventListener("click", function (event) {
  if (display.textContent.length > 15) return;
  const clicked = event.target.dataset.input;
  if (clicked) {
    if (clicked === ".") {
      if (!display.textContent.includes(".")) display.textContent += clicked;
    } else {
      display.textContent += clicked;
      if (!display.textContent.includes("."))
        display.textContent = Number(display.textContent);
    }
  }
});

const operation = function (inputOperation) {
  if (lastOperation === "") {
    memory = Number(display.textContent);
    lastOperation = inputOperation;
    display.textContent = 0;
    eql=false; 
  } else if (eql)  {
    memory = (display.textContent);
    lastOperation = inputOperation;
    display.textContent = 0;
  } else{
    lastOperation = inputOperation;
    display = 0;
    eql=false;
  }
};

minus.addEventListener("click", operation.bind(this, "minus"));
plus.addEventListener("click", operation.bind(this, "plus"));
multiply.addEventListener("click", operation.bind(this, "multiply"));
divide.addEventListener("click", operation.bind(this, "divide"));
clear.addEventListener("click", function () {
  memory = 0;
  lastOperation = "";
  display.textContent = 0;
});

backspace.addEventListener("click", function (event) {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  } else {
    display.textContent = 0;
  }
});

root.addEventListener("click", function (event) {
  display.textContent = Math.sqrt(display.textContent);
  lastOperation = "";
});

square.addEventListener("click", function (event) {
  display.textContent **= 2;
  lastOperation = "";
});

equal.addEventListener("click", function (event) {
  if (lastOperation === "plus")
    display.textContent = memory + Number(display.textContent);
  if (lastOperation === "minus")
    display.textContent = memory - Number(display.textContent);
  if (lastOperation === "divide")
    display.textContent = memory / Number(display.textContent);
  if (lastOperation === "multiply")
    display.textContent = memory * Number(display.textContent);

    eql=true;
});



