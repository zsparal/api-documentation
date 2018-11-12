import { enhance } from './utils';

// Gets all the codeblocks present and hides all of them except the one from the argument
const hideCodeBlocks = language => {
  const codeBlocks = Array.from(document.querySelectorAll('[id^="request-"]'));
  codeBlocks.forEach(block => {
    const elementId = `request-${language.toLowerCase()}`;
    if (block.id !== elementId) block.classList.add('hidden');
    else block.classList.remove('hidden');
  });
};

export default enhance('example-switcher', element => {
  // Gets stored language if present
  const storedLanguage = localStorage.getItem('preferedLanguage');
  const language = storedLanguage && storedLanguage !== 'undefined' ? storedLanguage : 'curl';
  const selectedLanguage = document.getElementById(`example-switch-${language}`);

  // Sets initial state: selected and language on switcher and hiding all other blocks
  selectedLanguage && selectedLanguage.classList.add('selected');
  hideCodeBlocks(language);

  // Adds onclick listeners to switches
  const exampleSwitches = Array.from(element.children);
  exampleSwitches.forEach(link => {
    const { id } = link;
    const language = id.replace('example-switch-', '');
    link.addEventListener('click', () => {
      // Removes selected status from others and adds it to clicked one
      exampleSwitches.forEach(selected => selected.classList.remove('selected'));
      link.classList.add('selected');
      // Hides all the blocks except the clicked one
      hideCodeBlocks(language);
      // Saves language to storage
      localStorage.setItem('preferedLanguage', language);
    });
  });
});
