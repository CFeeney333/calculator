const body = document.querySelector("body");

const expression = [];

for (let i = 0; i < 10; i++) {
  const element = document.createElement("div");
  element.textContent = i;
  element.id = i;
  element.addEventListener("click", onKeyPress);
  body.appendChild(element);
}

for (let op of ["+", "-", "*", "/", "="]) {
  const element = document.createElement("div");
  element.textContent = op;
  element.id = op;
  element.addEventListener("click", onKeyPress);
  body.appendChild(element);
}

function onKeyPress(e) {
  expression.push(e.target.id);
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
