var clickedBox = [];

function clickGame(integer) {
  if (clickedBox.indexOf(integer) === -1) {
    clickedBox.push(integer); 
  }
  if (clickedBox.length === 3) {
    alert("You won");  
  } else {
    console.log("Stop clicking the wrong box!");
  }
}