import { bindHandlers, executeEnhancers, makeEnhancers, makeHandlers } from './utils';

import navLoggedIn from './navLoggedIn';
import productsNavigation from './productsNavigation';
import subNavigation from './subNavigation';
import mobileNavigationButton from './mobileNavigationButton';
import toggleMobileNavigation from './mobileNavigation';
import toggleClass from './toggleClass';
import exampleSwitcher from './exampleSwitcher';
import linkDropdown from './linkDropdown';
import sidebar from './sidebar';

const handlers = makeHandlers([toggleClass, toggleMobileNavigation]);
const enhancers = makeEnhancers([
  navLoggedIn,
  productsNavigation,
  subNavigation,
  mobileNavigationButton,
  sidebar,
  linkDropdown,
  exampleSwitcher,
]);

const main = () => {
  bindHandlers(handlers);
  executeEnhancers(enhancers);
};

if (document.readyState !== 'loading') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
