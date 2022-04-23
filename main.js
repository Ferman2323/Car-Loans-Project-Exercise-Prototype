"use strict";

const navbar0 = document.querySelector(".navbar-nav");
const navbar1 = document.querySelector(".navbar-nav2");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", function () {
  navbar0.classList.add("hidden");
  navbar1.classList.remove("hidden");
});
btnClose.addEventListener("click", function () {
  navbar0.classList.remove("hidden");
  navbar1.classList.add("hidden");
});
