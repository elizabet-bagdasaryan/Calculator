// Defining variables
let plusS = document.getElementById("plus"),
  minusS = document.getElementById("minus"),
  multiplyS = document.getElementById("multiply"),
  divideS = document.getElementById("divide"),
  square = document.getElementById("square"),
  cube = document.getElementById("cube"),
  squareRoot = document.getElementById("squareRoot"),
  cubeRoot = document.getElementById("cubeRoot"),
  one = document.getElementById("1"),
  two = document.getElementById("2"),
  three = document.getElementById("3"),
  four = document.getElementById("4"),
  five = document.getElementById("5"),
  six = document.getElementById("6"),
  seven = document.getElementById("7"),
  eight = document.getElementById("8"),
  nine = document.getElementById("9"),
  zero = document.getElementById("0"),
  dot = document.getElementById("dot"),
  clearB = document.getElementById("clear"),
  clearAll = document.getElementById("clearAll"),
  equal = document.getElementById("equal"),
  input = document.getElementById("input"),
  inputValue = "";

//One
one.addEventListener("click", function () {
  inputValue += "1";
  input.value = inputValue;
});
//Two
two.addEventListener("click", () => {
  inputValue += "2";
  input.value = inputValue;
});
//Three
three.addEventListener("click", () => {
  inputValue += "3";
  input.value = inputValue;
});
//Four
four.addEventListener("click", () => {
  inputValue += "4";
  input.value = inputValue;
});
//Five
five.addEventListener("click", () => {
  inputValue += "5";
  input.value = inputValue;
});
//Six
six.addEventListener("click", () => {
  inputValue += "6";
  input.value = inputValue;
});
//Seven
seven.addEventListener("click", () => {
  inputValue += "7";
  input.value = inputValue;
});
//Eight
eight.addEventListener("click", () => {
  inputValue += "8";
  input.value = inputValue;
});
//Nine
nine.addEventListener("click", () => {
  inputValue += "9";
  input.value = inputValue;
});
//Zero
zero.addEventListener("click", () => {
  inputValue += "0";
  input.value = inputValue;
});
//Clear
clearB.addEventListener("click", () => {
  inputValue = inputValue.substring(0, inputValue.length - 1);
  input.value = inputValue;
});
//ClearAll
clearAll.addEventListener("click", () => {
  inputValue = "";
  input.value = inputValue;
});
//Plus
plusS.addEventListener("click", () => {
  inputValue += "+";
  input.value = inputValue;
});
//Minus
minusS.addEventListener("click", () => {
  inputValue += "-";
  input.value = inputValue;
});
//Multiply
multiplyS.addEventListener("click", () => {
  inputValue += "*";
  input.value = inputValue;
});
//Divide
divideS.addEventListener("click", () => {
  inputValue += "/";
  input.value = inputValue;
});
//Dot
dot.addEventListener("click", () => {
  inputValue += ".";
  input.value = inputValue;
});
//Square
square.addEventListener("click", () => {
  inputValue = Math.pow(Number(inputValue), 2) + "";
  !eval(inputValue) ? (inputValue = "") : (inputValue = inputValue);
  input.value = inputValue;
});
//Cube
cube.addEventListener("click", () => {
  inputValue = Math.pow(Number(inputValue), 3) + "";
  !eval(inputValue) ? (inputValue = "") : (inputValue = inputValue);
  input.value = inputValue;
});
//Square Root
squareRoot.addEventListener("click", () => {
  inputValue = Math.sqrt(Number(inputValue), 2) + "";
  !eval(inputValue) ? (inputValue = "") : (inputValue = inputValue);
  input.value = inputValue;
});
//Cube Root
cubeRoot.addEventListener("click", () => {
  inputValue = Math.cbrt(Number(inputValue), 2) + "";
  !eval(inputValue) ? (inputValue = "") : (inputValue = inputValue);
  input.value = inputValue;
});

//Main function
equal.addEventListener("click", () => {
  //	If the code throws ERROR clear input value
  try {
    inputValue = eval(inputValue).toString();
    if (!inputValue || inputValue === Infinity) {
      inputValue = "";
      input.value = inputValue + "";
    } else {
      input.value = inputValue + "";
    }
  } catch (e) {
    inputValue = "";
    input.value = inputValue;
  }
});
