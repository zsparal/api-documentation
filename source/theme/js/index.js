import { bindHandlers, executeEnhancers, makeEnhancers, makeHandlers } from "./utils";

const blah = 'blah';

import navLoggedIn from "./navLoggedIn";
import productsNavigation from "./productsNavigation";
import subNavigation from "./subNavigation";
import mobileNavigationButton from "./mobileNavigationButton";
import * as mobileNavigation from "./mobileNavigation";
import toggleClass from "./toggleClass";
import linkDropdown from "./linkDropdown";
import sidebar from "./sidebar";

const handlers = makeHandlers([toggleClass, mobileNavigation.hide, mobileNavigation.show]);
const enhancers = makeEnhancers([
  navLoggedIn,
  productsNavigation,
  subNavigation,
  mobileNavigationButton,
  sidebar,
  linkDropdown
]);

const main = () => {
  bindHandlers(handlers);
  executeEnhancers(enhancers);
};

if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
