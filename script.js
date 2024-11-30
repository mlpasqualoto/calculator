function getNumber(n) {
  document.getElementById("result").textContent += n;
}

let numbers = [];
function pushNumber() {
  let n = Number(document.getElementById("result").textContent);
  numbers.push(n);
}

let operator = "";
function getOperator(op) {
  operator = op;
  pushNumber();
  clean();
}

let result = 0;
function getResult(num = numbers, op = operator) {
  pushNumber();
  clean();
  if (op === "+") {
    result = num[0] + num[1];
  } else if (op === "-") {
    result = num[0] - num[1];
  } else if (op === "/") {
    result = num[0] / num[1];
  } else {
    result = num[0] * num[1];
  }

  if (Number.isInteger(result)) {
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = result.toFixed(8);  
  }
}

function reset() {
  numbers = [];
  document.getElementById("result").textContent = "";
  operator = "";
  result = 0;
}

function clean() {
  document.getElementById("result").textContent = "";
}
