// マウスが乗った時
document.getElementById("box").onmouseover = function() {
  // thisはイベント発生元の要素（<div id="box">）を表す
  this.innerHTML = "mouse over";
};

// マウスが離れた時
document.getElementById("box").onmouseout = function() {
  this.innerHTML = "mouse out";
};