const dotBtn1 = document.querySelector(".dot-1");
const dotBtn2 = document.querySelector(".dot-2");

const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");

const navigation1 = document.querySelector("#section--1");
const navigation2 = document.querySelector("#section--2");

dotBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    section1.scrollIntoView({ behavior: "smooth" });
  }, 100);
});

dotBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  setTimeout(function () {
    section2.scrollIntoView({ behavior: "smooth" });
  }, 100);
});
