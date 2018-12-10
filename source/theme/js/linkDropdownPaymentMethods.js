import { enhance } from './utils';
import Dropkick from 'dropkickjs';

const DEFAULT_METHOD = 'bancontact';

// Adds the onchange listener that hides/shows methods based on selection
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
  // Initializes the select element we created
  new Dropkick(element, {
    mobile: false,
  });
});

// Adds the payment method dropdown to the DOM
// We need to do this with JS, as the doc file is compiled from the .rst files
export const addPaymentMethodDropdown = () => {
  //Gets all possible payment methods and the preferred one from storage

  // We need to get the payment methods block (different names in different pages, same prefix)
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

    // Adds the selector option for each method
    paymentMethods.forEach(method => {
      // Inside the block, we are interested in the divs, not the title nor the description
      if (method.nodeName === 'DIV') {
        // Defined which one is selected && hide the rest
        const isSelected = method.id === preferredMethod;
        if (!isSelected) {
          method.classList.add('u-screenreader-only');
          method.setAttribute('aria-hidden', 'true');
        }
        // Build the options, with their names and if they are selected or not
        const methodName = method.childNodes[1].textContent.replace('¶', '');
        options += `<option value="${method.id}" ${
          isSelected ? ' selected' : ''
        }>${methodName}</option>`;
      }
    });
    // Creates select element
    const dropdown = document.createElement('select');
    // Adds attributes
    dropdown.setAttribute('data-enhancer', 'payment-method-switcher');
    dropdown.classList.add('link-dropdown', 'payment-methods');
    // Adds the options we generated before
    dropdown.innerHTML = options;
    // Adds it after the title and description (there are text nodes, that's why the index is 5)
    paymentMethodsBlock[0].insertBefore(dropdown, paymentMethods[5]);
  }
};
