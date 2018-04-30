import { handle } from './utils';

const mobileNav = document.querySelector('.js-mobile-navigation');

const NOSCROLL_CLASS = 'u-no-scroll';
const HIDDEN_CLASS = 'is-hidden';
let scrollPosition = 0;

const hideMobileNav = () => {
  document.body.classList.remove(NOSCROLL_CLASS);
  mobileNav.classList.add(HIDDEN_CLASS);
  mobileNav.setAttribute('aria-hidden', 'true');

  document.body.scrollTop = scrollPosition;
  // This line is needed for IE11
  document.body.parentNode.scrollTop = scrollPosition;
  // This line is needed for Firefox because it doesn't scroll the document.body.
  // And we can't remove the line above because although Safari and Chrome recognize
  // the document.documentElement they are unable to scroll it.
  document.documentElement.scrollTop = scrollPosition;
};

export const show = handle('show-mobile-nav', (element, event) => {
  scrollPosition = window.pageYOffset;
  document.body.classList.add(NOSCROLL_CLASS);
  mobileNav.classList.remove(HIDDEN_CLASS);
  mobileNav.setAttribute('aria-hidden', 'false');
  event.preventDefault();
});

export const hide = handle('hide-mobile-nav', (element, event) => {
  hideMobileNav();
  event.preventDefault();
});
