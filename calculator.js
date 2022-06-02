const body = document.querySelector("body");

const expression = [];
let compound = "";

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
  const id = e.target.id;
  // the first element may not be
  if (id === "=") {
    // maybe compound contains a number
    if (compound !== "") {
      expression.push(compound);
      compound = "";
    }
    evaluate();
    // after evaluation empty the expression array
    while (expression.length > 0) {
      expression.pop();
    }
    return;
  }

  // push the compound to expression if the next input is an operator and set it to empty string
  // otherwise concatenate the digit to the compound
  // if it is an operator then push the operator
  if (digits.includes(id)) {
    compound = compound + id;
  } else if (operators.includes(id)) {
    expression.push(compound);
    expression.push(id);
    compound = "";
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

function evaluate() {
  console.log(expression);
}
