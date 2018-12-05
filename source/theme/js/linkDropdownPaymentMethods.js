import { enhance } from './utils';
import Dropkick from 'dropkickjs';

const DEFAULT_METHOD = 'bancontact';

export const linkDropdownPaymentMethods = enhance('payment-method-switcher', element => {
  element.addEventListener('change', () => {
    element.childNodes.forEach(method => {
      const selectedElement = document.getElementById(method.value);
      if (method.value !== element.value) {
        selectedElement.classList.add('u-screenreader-only');
        selectedElement.setAttribute('aria-hidden', 'true');
      } else {
        selectedElement.classList.remove('u-screenreader-only');
        selectedElement.setAttribute('aria-hidden', 'false');
        localStorage.setItem('preferredPaymentMethod', method.value);
      }
    });
  });

  new Dropkick(element, {
    mobile: false,
  });
});
export const addPaymentMethodDropdown = () => {
  const paymentMethodsBlock = document.querySelectorAll('[id^=payment-method]');
  const storedMethod = localStorage.getItem('preferredPaymentMethod');
  let preferredMethod;
  if (storedMethod && storedMethod !== 'undefined') {
    preferredMethod = storedMethod;
  } else {
    preferredMethod = DEFAULT_METHOD;
  }
  if (paymentMethodsBlock.length) {
    const paymentMethods = paymentMethodsBlock[0].childNodes;
    let options = '';
    paymentMethods.forEach(method => {
      if (method.nodeName === 'DIV') {
        const isSelected = method.id === preferredMethod;
        if (!isSelected) {
          method.classList.add('u-screenreader-only');
          method.setAttribute('aria-hidden', 'true');
        }
        const methodName = method.childNodes[1].textContent.replace('¶', '');
        options += `<option value="${method.id}" ${
          isSelected ? ' selected' : ''
        }>${methodName}</option>`;
      }
    });
    const dropdown = `<select data-enhancer="payment-method-switcher" class="link-dropdown">${options}</select>`;
    paymentMethods[1].insertAdjacentHTML('afterbegin', dropdown);
  }
};
