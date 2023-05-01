"use strict";

const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");

const navigation1 = document.querySelector("#section--1");
const navigation2 = document.querySelector("#section--2");

const navItems = document.querySelectorAll(".navigation__link");
const checkbox = document.querySelector(".navigation__checkbox");

// paragraph
const paragraph = document.querySelector(".paragraph");
const paragraph2 = document.querySelector(".paragraph2");

// variables Carrousel
const carrousel = document.querySelector(".carrousel");
const cardsContainer = document.querySelector(".carrousel__container--cards");
const prevBtn = document.querySelector(".carrousel__btn--prev");
const nextBtn = document.querySelector(".carrousel__btn--sig");
const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth;
const cardsCount = cards.length;
const cardContainerWidth = cardWidth * cardsCount;
let cardsShown = Math.floor(carrousel.offsetWidth / cardWidth);
let cardsLeft = cardsCount - cardsShown;
let cardIndex = 0;

// Carrousel
nextBtn.addEventListener("click", function () {
  if (cardIndex < cardsLeft) {
    cardIndex++;
    cardsContainer.style.marginLeft = `-${cardIndex * cardWidth}px`;
  } else {
    // si el usuario está en el último card, no avanzar más
    cardIndex = cardsLeft;
  }
});

prevBtn.addEventListener("click", function () {
  if (cardIndex > 0) {
    cardIndex--;
    cardsContainer.style.marginLeft = `-${cardIndex * cardWidth}px`;
  } else {
    // si el usuario está en el primer card, no retroceder más
    cardIndex = 0;
  }
});

let selectedBtn = null;

// Dark mode
const $themeBtn = document.querySelector("#dark-mode");
const $selectors = document.querySelectorAll("[data-dark]");

// navigation
document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      checkbox.checked = false;
      background.classList.remove("navigation__background--open");
    }
  });

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    checkbox.checked = false;
    background.classList.remove("navigation__background--open");
  });
});

//Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
};

const THRESHOLD = 0.15;
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: THRESHOLD,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
  //observer.unobserve(entry.target);
});

// Dark mode
const light = "💡";
const dark = "🔦";
const darkBlue = "#333";
const pink = "#faf4ee";

const lightMode = () => {
  $selectors.forEach((el) => el.classList.remove("dark-mode"));
  $themeBtn.textContent = dark;
  paragraph.style.color = darkBlue;
  paragraph2.style.color = darkBlue;
  localStorage.setItem("theme", "light");
};

const darkMode = () => {
  $selectors.forEach((el) => el.classList.add("dark-mode"));
  $themeBtn.textContent = light;
  paragraph.style.color = pink;
  paragraph2.style.color = pink;
  localStorage.setItem("theme", "dark");
};

const toggleMode = () => {
  if ($themeBtn.textContent === dark) {
    darkMode();
  } else {
    lightMode();
  }
};

const setMode = () => {
  const theme = localStorage.getItem("theme") || "light";
  if (theme === "light") {
    lightMode();
  } else {
    darkMode();
  }
};

const init = () => {
  setMode();
  $themeBtn.addEventListener("click", toggleMode);
};

init();

//console.log(init);

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 100);
});
