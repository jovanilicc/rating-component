let rateItem = document.querySelectorAll(".rating-list__item");
let inputItem = document.getElementById("rate");
let form = document.getElementById("rate-form");

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

form.addEventListener("submit", updateRate);
