import { enhance } from "./utils";

export default enhance("link-dropdown", element => {
  const label = document.querySelector(".link-dropdown__label");

  label.addEventListener("click", event => {
    event.preventDefault();
    element.classList.toggle("active");
  });

  document.addEventListener("click", event => {
    if (element !== event.target && !element.contains(event.target)) {
      element.classList.remove("active");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      element.classList.remove("active");
    }
  });
});
