import { handle } from "./utils";

export default handle("toggle-mobile-menu", element => {
  console.log("Toggling mobile menu");
  document.body.classList.toggle("mobile-menu-opened");
});
