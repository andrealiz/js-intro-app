function changeColor(box) {
  var boxColor = document.getElementById("daylight-game");
  if (box === 1) {
    boxColor.style["background-color"] = "yellow";
  } else if (box === 2) {
    boxColor.style["background-color"] = "orange";
  } else if (box === 3) {
    boxColor.style["background-color"] = "black";
  }
}