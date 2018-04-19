import { bindHandlers, executeEnhancers, makeEnhancers, makeHandlers } from "./utils";

import toggleMobileMenu from "./toggleMobileMenu";
import { footer, languageSwitch } from "./footer";

const handlers = makeHandlers([toggleMobileMenu]);

const enhancers = makeEnhancers([footer]);

const main = () => {
  bindHandlers(handlers);
  executeEnhancers(enhancers);
};

if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main);
}
