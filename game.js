// weird how I do this first, but switch clicker type.
const clickerOne = document.getElementById("img");
const clickerTwo = document.getElementById("upgrade1-secret");
const amountOfParts = document.getElementById("aop");
const switchClicker = document.getElementById("switch-clicker");
switchClicker.addEventListener("click", () => {
  const clickerOne = document.getElementById("img");
  const clickerTwo = document.getElementById("upgrade1-secret");
  if (confirm("Are you sure?")) {
    if (clickerOne.style.display == "none") {
      clickerOne.style.display = "block";
      clickerTwo.style.display = "none";
    } else {
      clickerOne.style.display = "none";
      clickerTwo.style.display = "block";
    }
  }
});
// make parts go up!
clickerOne.addEventListener("click", () => {
  const totalAmountOfParts = 0;
  amountOfParts.textContent++;
  totalAmountOfParts++;
  console.log(totalAmountOfParts);
});
