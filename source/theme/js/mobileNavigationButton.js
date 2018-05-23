import { debounce } from "lodash";
import { enhance } from "./utils";

const NO_SCROLL_UTILITY_CLASS = "u-no-scroll";
const MOBILE_NAV_BREAKPOINT = 980; // _variables.scss:19

export default enhance("mobile-navigation-button", () => {
  const navigationTrigger = document.querySelector(".js-toggle-mobile-nav");
  const mobileSidebar = document.querySelector(".js-mobile-sidebar");

  navigationTrigger.addEventListener("click", event => {
    event.preventDefault();
    mobileSidebar.classList.toggle("is-visible");
    navigationTrigger.classList.toggle("is-opened");
    document.documentElement.classList.toggle("u-no-scroll");
  });

  const allowScrollingOnDesktop = () => {
    const { documentElement } = document;
    const documentScrollBlocked = documentElement.classList.contains(NO_SCROLL_UTILITY_CLASS);

    if (documentScrollBlocked) {
      requestAnimationFrame(() => {
        const documentWidth = window.innerWidth;

        // If we're on desktop and the mobile nav was previously opened, close it.
        if (documentWidth > MOBILE_NAV_BREAKPOINT) {
          documentElement.classList.remove(NO_SCROLL_UTILITY_CLASS);
          mobileSidebar.classList.remove("is-visible");
          navigationTrigger.classList.remove("is-opened");
        }
      });
    }
  };

  window.addEventListener("resize", debounce(() => allowScrollingOnDesktop(), 200, false));
});
