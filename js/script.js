"use strict"

const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function() {
    preloaderEl.classList.add("hide-preloader");
  });
};

const pricingCard = () => {
  const sliderContainer = document.querySelector(".slider");
  const slider = document.querySelector(".slider__slide");
  const price = document.querySelector(".pricing__price");
  const checkbox = document.querySelector(".switch__checkbox");
  const option = document.querySelector(".pricing__option");

  const setPrice = () => {
    price.innerText = `$${slider.value}.00`;
  }

  const switchYearly = () => {
    slider.min = 90;
    slider.max = 270;
    option.innerText = "/year";
    slider.value = 90;
    sliderContainer.reset();
  };

  const switchMonthly = () => {
    slider.min = 10;
    slider.max = 30;
    option.innerText = "/month";
    slider.value = 10;
    sliderContainer.reset();
  };

  slider.addEventListener("input", setPrice);

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      switchYearly();
      setPrice();
    } else {
      switchMonthly();
      setPrice();
    }
  });
};

const init = () => {
  preloader();
  pricingCard();
};

window.addEventListener("DOMContentLoaded", init);