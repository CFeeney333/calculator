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
    } else {
      // the last element is an operator and it must be removed
      expression.pop();
    }

    console.log(evaluate());

    // after evaluation empty the expression array
    while (expression.length > 0) {
      expression.pop();
    }
    return;
  }

  // push the compound to expression if the next input is an operator and
  // set it to empty string
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

function operate(a, operator, b) {
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
  // expression always in the form [number, operator, number, operator, number]
  while (expression.length !== 1) {
    const operation = expression.splice(0, 3);
    expression.unshift(
      operate(Number(operation[0]), operation[1], Number(operation[2]))
    );
  }
  return expression[0];
}
