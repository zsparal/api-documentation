import { enhance } from "./utils";

export default enhance("sub-navigation", () => {
  const subNavigation = document.querySelector(".js-sub-navigation");
  const subNavigationItems = document.querySelectorAll(".js-sub-navigation-item");

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      const offsetY = window.pageYOffset;
      if (offsetY > 120) {
        subNavigationItems.forEach(node => node.classList.add("sub-navigation-item--small"));
        subNavigation.classList.add("sub-navigation--small");
      }else{
        subNavigation.classList.remove("sub-navigation--small");
        subNavigationItems.forEach(node => node.classList.remove("sub-navigation-item--small"));
      }
    });
  });
});
