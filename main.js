const form = document.getElementById("interactiveForm");

const formScoreOne = document.getElementById("One");
const formScoreTwo = document.getElementById("Two");
const formScoreThree = document.getElementById("Three");
const formScoreFour = document.getElementById("Four");
const formScoreFive = document.getElementById("Five");

const submitButton = document.getElementById("score-submit");


//Identify Score event listener
form.addEventListener("input", function(){
  let score = 0;
  if (formScoreOne.checked == true) {
    score = formScoreOne.value;
  }
  else if (formScoreTwo.checked == true) {
    score = formScoreTwo.value;
  }
  else if (formScoreThree.checked == true) {
    score = formScoreThree.value;
  }
  else if (formScoreFour.checked == true) {
    score = formScoreFour.value;
  }
  else if (formScoreFive.checked == true) {
    score = formScoreFive.value;
  }
  console.log(score);
  document.getElementById("rating-score").textContent=`${score}`;
  submitButton.setAttribute("value", `${score}`);
  console.log(typeof submitButton.value);
})


//Submit button to modify CSS

submitButton.addEventListener("click", function(){
  let numValue = Number(submitButton.value);
  if (numValue >= 1) {
    document.getElementById("Rating-state").setAttribute("class", "tab");
    document.getElementById("Thankyou-state").classList.remove("tab");
  }
})


