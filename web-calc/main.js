/*global $*/
function getNum1() {
  return document.getElementById("num1").value;
}

function getNum2() {
  return document.getElementById("num2").value;
}

function showResult(num) {
  document.getElementById("box").innerHTML = num;
}

document.getElementById("add-button").onclick = function() {
  var result = Number(getNum1()) + Number(getNum2());
  showResult(result);
};

document.getElementById("sub-button").onclick = function() {
  var result = Number(getNum1()) - Number(getNum2());
  showResult(result);
};

document.getElementById("mul-button").onclick = function() {
  var result = Number(getNum1()) * Number(getNum2());
  showResult(result);
};

document.getElementById("div-button").onclick = function() {
  var result = Number(getNum1()) / Number(getNum2());
  showResult(result);
};