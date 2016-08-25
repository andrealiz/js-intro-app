var clickedBox = [];

function clickGame(integer) {
  clickedBox.push(integer);
  if (clickedBox.length === 3) {
    alert("You won");  
  } else {
    console.log("Stop clicking!");
  }
}