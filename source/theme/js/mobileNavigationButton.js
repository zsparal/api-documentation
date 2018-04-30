import { enhance } from "./utils";

export default enhance("mobile-navigation-button", () => {
  const navigationTrigger = document.querySelector(".js-toggle-mobile-nav");
  const mobileSidebar = document.querySelector(".js-mobile-sidebar");

  navigationTrigger.addEventListener("click", event => {
    event.preventDefault();
    mobileSidebar.classList.toggle("is-visible");
    navigationTrigger.classList.toggle("is-opened");
  });
});
