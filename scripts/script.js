const navigationButton = document.querySelector(".navigation__button");
const navigation = document.querySelector(".navigation");

navigationButton.addEventListener("click", () => {
  navigation.classList.toggle("navigation--open");
  navigationButton.classList.toggle("navigation__button--open");
});
