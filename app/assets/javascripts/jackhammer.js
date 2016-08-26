var clicks = 0;
var box = document.getElementById("box-game");

function jackhammer(box) {
  clicks++;
    console.log(clicks);
  if (clicks === 1) {
    box.style["background-color"] = "green";
  } else if (clicks === 2) {
    box.style["background-color"] = "yellow";
  } else if (clicks === 3) {
    box.style["background-color"] = "orange";
  } else if (clicks === 4) {
    box.style["background-color"] = "red";
  } else if (clicks === 5) {
    box.style["background-color"] = "purple";
  } else {
    console.log("Stop clicking");
  }
}