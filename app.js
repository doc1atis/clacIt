console.log("connected");
let locationOneIsZero = false;

let arrayOfInputs = [];
let operation = null;
const operations = {};
let calculatorDisplayText = "";
let opString = "";

const digitElementsList = document.getElementsByClassName("digit");
const operatorsElementList = document.getElementsByClassName("keyOperator");
const equalButton = document.getElementById("equalbutton");
const aCButton = document.getElementById("clearit");
const calcdisplay = document.getElementById("calcdisplay");

//console.log(operatorsList[2].innerText === "\u00D7");
for (let digit of digitElementsList) {
  digit.onclick = e => {
    opString = "";
    const buttonText = e.target.innerText;
    if (arrayOfInputs[1] === undefined) {
      calculatorDisplayText = "";
      arrayOfInputs[0] = "";
    }

    calculatorDisplayText += buttonText;

    calcdisplay.innerText = calculatorDisplayText;

    arrayOfInputs.push(buttonText);
    console.log(arrayOfInputs[1], arrayOfInputs[2]);
    if (arrayOfInputs[1] === "0" && arrayOfInputs[2] !== ".") {
      console.log("it suppose to be a dot");
      calcdisplay.innerText = "0";
      arrayOfInputs = [];
    }
    console.log(arrayOfInputs);
  };
}

for (let operator of operatorsElementList) {
  operator.onclick = e => {
    if (opString === "" || opString === 1) {
      calculatorDisplayText += e.target.innerText;
    }
    calcdisplay.innerText = calculatorDisplayText;
    operation = e.target.attributes[1].value;

    switch (operation) {
      case "multiply":
        operation = "*";
        break;
      case "divide":
        operation = "/";
        break;
      case "add":
        operation = "+";
        break;
      case "subtract":
        operation = "-";
        break;

      default:
        break;
    }

    opString += operation;
    console.log(opString.length);
    if (opString.length === 1) {
      arrayOfInputs.push(operation);
    }

    console.log(arrayOfInputs);
    arrayOfDigits = [];
  };
}

equalButton.onclick = e => {
  let result = arrayOfInputs.join``;
  console.log(result);
  try {
    console.log(eval(result));
    calcdisplay.innerText = eval(result);
    calculatorDisplayText = eval(result).toString();
    arrayOfInputs = [eval(result)];
    console.log(arrayOfInputs);
  } catch (error) {
    console.log(error.message);
    calcdisplay.innerText = "NaN";
    calculatorDisplayText = "";
    arrayOfInputs = [];
  }
};

aCButton.onclick = e => {
  arrayOfInputs = [];
  calcdisplay.innerText = "0";
  calculatorDisplayText = "";
};
