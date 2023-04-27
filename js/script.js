const dotBtn1 = document.querySelector(".dot-1");
const dotBtn2 = document.querySelector(".dot-2");
const dotBtn3 = document.querySelector(".dot-3");

const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");

const navigation1 = document.querySelector("#section--1");
const navigation2 = document.querySelector("#section--2");

const dotBtn = document.querySelectorAll(".navigation__dots-btn");
const navItems = document.querySelectorAll(".navigation__link");
const checkbox = document.querySelector(".navigation__checkbox");
const background = document.querySelector(".navigation__background");

// cards
const carrousel = document.querySelector(".carrousel");
const cardsContainer = document.querySelector(".carrousel-cards");
const prevBtn = document.querySelector(".carrousel-prev");
const nextBtn = document.querySelector(".carrousel-sig");
const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth;
const cardsCount = cards.length;
const cardContainerWidth = cardWidth * cardsCount;
let cardsShown = Math.floor(carrousel.offsetWidth / cardWidth);
let cardsLeft = cardsCount - cardsShown;
let cardIndex = 0;

nextBtn.addEventListener("click", function () {
  if (cardIndex < cardsLeft) {
    cardIndex++;
    cardsContainer.style.marginLeft = `-${cardIndex * cardWidth}px`;
  } else {
    cardIndex = 0;
    cardsContainer.style.marginLeft = `0px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (cardIndex > 0) {
    cardIndex--;
    cardsContainer.style.marginLeft = `-${cardIndex * cardWidth}px`;
  } else {
    cardIndex = cardsLeft;
    cardsContainer.style.marginLeft = `-${cardsCount * cardWidth}px`;
  }
});

let selectedBtn = null;

// Scroll

window.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;

  if (
    scrollPosition >= section1.getBoundingClientRect().top &&
    scrollPosition < section2.getBoundingClientRect().top
  ) {
    updateSelectedBtn(dotBtn1);
  } else if (
    scrollPosition >= section2.getBoundingClientRect().top &&
    scrollPosition < section3.getBoundingClientRect().top
  ) {
    updateSelectedBtn(dotBtn2);
  } else if (scrollPosition >= section3.getBoundingClientRect().top) {
    updateSelectedBtn(dotBtn3);
  }
});

function updateSelectedBtn(btn) {
  if (selectedBtn && selectedBtn !== btn) {
    // add this condition to remove the class only if the selected button is different from the previous one
    selectedBtn.classList.remove("navigation__dots-btn--fill");
  }
  selectedBtn = btn;
  selectedBtn.classList.add("navigation__dots-btn--fill");
}

dotBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (selectedBtn) {
      selectedBtn.classList.remove("navigation__dots-btn--fill");
    }
    selectedBtn = btn;
    selectedBtn.classList.add("navigation__dots-btn--fill");
  });
});

// dots

dotBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    section1.scrollIntoView({ behavior: "smooth", offsetTop: 100 });
  });
});

dotBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    section2.scrollIntoView({ behavior: "smooth", offsetTop: 100 });
  });
});

dotBtn3.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    section3.scrollIntoView({ behavior: "smooth", offsetTop: 100 });
  });
});

// navigation

document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    checkbox.checked = false;
    background.classList.remove("navigation__background--open");
  });
});
