var nextNumber = 1;
var lastNumber = 10;

function clickBoxes(number) {
  if (number === nextNumber) {
    checkIfWinner(number);
    nextNumber++;
  } else {
    nextNumber = 1;
  }
}

function checkIfWinner(number) {
  if (number === lastNumber) {
    alert("You cliked every box in order!");
  }
}