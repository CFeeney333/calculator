const body = document.querySelector("body");

const expression = [];

const operators = ["+", "-", "*", "/", "="];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let i of digits) {
  const element = document.createElement("button");
  element.textContent = i;
  element.id = i;
  element.addEventListener("click", onKeyPress);
  body.appendChild(element);
}

for (let op of operators) {
  const element = document.createElement("button");
  element.textContent = op;
  element.id = op;
  element.addEventListener("click", onKeyPress);
  body.appendChild(element);
}

function onKeyPress(e) {
  if (e.target.id === "=") {
    evaluate();
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function evaluate() {}
