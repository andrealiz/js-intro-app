var clicks = 0;

function jackhammer() {
  clicks++;
    console.log(clicks);
  if (clicks === 5) {
    alert("you win!");
  } else {
    console.log("you're not clicking enough");
  }
}