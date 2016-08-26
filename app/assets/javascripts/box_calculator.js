var sum = 0;
function changeBoxes(number) {
  // console.log(number);
  var box = document.getElementById("numbers-sum");
  sum = sum + number;
  console.log(sum);
  box.innerHTML = sum;
}