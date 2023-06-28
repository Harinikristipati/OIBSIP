var result = document.getElementById("result");
var userInput = ""; 

function appendCharacter(character) {
  result.value += character;
  userInput += character;
}

function clearScreen() {
  result.value = "";
  userInput = "";
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
  userInput = userInput.slice(0, -1); 

function calculateResult() {
  try {
    var expression = userInput;
    var answer = new Function('return ' + expression)();
    result.value = answer;


    userInput = userInput.replace(/[*]/g, '×').replace(/[/]/g, '÷'); 
    userInput = ""; 
  } catch (error) {
    result.value = "Error";
    userInput = "";
  }
}

function toggleSign() {
  var expression = result.value;

  
  if (expression.charAt(0) === "-") {
    result.value = expression.slice(1);
    userInput = userInput.slice(1); 
  } else {
    result.value = "-" + expression; 
    userInput = "-" + userInput; 
  }
}

function calculatePercentage() {
  var expression = result.value;


  if (expression.charAt(expression.length - 1) === "%") {
    var percentage = parseFloat(expression) / 100; 
    result.value = percentage;
    userInput += "%";
  } else {
    result.value += "%";
    userInput += "%";
  }
}

function calculateSquareRoot() {
  var expression = result.value;
  var sqrt = Math.sqrt(parseFloat(expression));
  result.value = sqrt;
  userInput = "√(" + userInput + ")";
}

function calculateModulo() {
  var expression = result.value;
  var parts = expression.split("%");
  var modulo = parseFloat(parts[0]) % parseFloat(parts[1]);
  result.value = modulo;
  userInput += "%";
}

function appendBraces(openingBracket) {
  result.value += openingBracket;
  userInput += openingBracket;
}

function closeBraces() {
  result.value += ")";
  userInput += ")";
}
