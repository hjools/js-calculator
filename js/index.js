$(document).ready(function() {
  var screen = document.getElementById("number-input");
  var operands = [];
  var operators = [];
  var operator = "";
  var curNum = "";
  var screenVal = "";
  $(".num-row button").not("#button-clear").click(function() {
    curNum += $(this).text();
    screenVal += $(this).text();
    // console.log(curNum);
    screen.value = screenVal;
  });
  $(".num-ops button").not("#button-submit").click(function() {
    // console.log("operator clicked");
    operator = $(this).text();
    if (operator.valueOf() === "÷") {
      operator = "/";
    } else if (operator.valueOf() === "×") {
      operator = "x";
    } 
    operators.push(operator);
    operands.push(parseFloat(curNum));
    curNum = "";
    screenVal += operator;
    screen.value = screenVal;
    // console.log(operands);
    // console.log(operators);
  });
  $("#button-clear").click(function() {
    operands = [];
    operators = [];
    curNum = "";
    screenVal = "";
    screen.value = screenVal;
  });
  $("#button-submit").click(function() {
    operands.push(parseFloat(curNum));
    var ret = operands[0];
    var numOperands = operands.length;
    var numOperators = operators.length;
    for (var i = 0; i < numOperators; i++) {
      var a = operands[i + 1];
      var op = operators[i];
      if (op == "/") {
        ret = ret / a;
      } else if (op == "x") {
        ret = ret * a;
      } else if (op == "-") {
        ret = ret - a;
      } else {
        ret = ret + a;
      }
      console.log(ret);
    }
    operands.splice(0); // operands = []
    operators.splice(0); // operators = []
    curNum = ret.toString();
    screenVal = curNum;
    screen.value = screenVal;
  });
  document.getElementById("number-input").addEventListener("keyup", function(event) {
    // event.preventDefault();
    console.log(event.which);
    switch (event.which) {
      case 13:
        document.getElementById("button-submit").click();
        break;
      case 191:
        document.getElementById("button-divide").click();
        break;
      case 56:
        document.getElementById("button-multiply").click();
        break;
      case 187:
        document.getElementById("button-add").click();
        break;
      case 189:
        document.getElementById("button-subtract").click();
        break;
      default:
        return;
    }
  });
});