let rateItem = document.querySelectorAll(".rating-list__item");
let inputItem = document.getElementById("rate");
let form = document.getElementById("rate-form");
let rateText = document.getElementsByClassName("rate-text");
let ratingBox = document.getElementById("rating-box");
let thankyouBox = document.getElementById("thankyou-box");

let selectedListElement = null;
let rateValue = "";
const selectRate = (e) => {
  let currentListElement = e.target;
  rateValue = currentListElement.dataset.rate;
  if (currentListElement === selectedListElement) {
    return;
  }
  if (selectedListElement) {
    selectedListElement.classList.remove("rating-list__item--active");
  }

  currentListElement.classList.add("rating-list__item--active");
  console.log(rateValue);
  selectedListElement = currentListElement;
};

rateItem.forEach((element) => {
  element.addEventListener("click", selectRate);
});

const updateRate = (e) => {
  e.preventDefault();
  if (selectedListElement) {
    rate.setAttribute("value", rateValue);
    ratingBox.style.display = "none";
    thankyouBox.style.display = "block";
    rateText[0].textContent = rateValue;
    setTimeout(() => {
      form.submit();
    }, 4000);
  } else {
    window.alert("Please select your rating.");
  }
};

form.addEventListener("submit", updateRate);
