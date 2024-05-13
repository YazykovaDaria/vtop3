import goHeader from './modules/header';
import goPopup from "./modules/popup";

const app = () => {
  goHeader();
  goPopup();
};

app();

// document.body.classList.add("popup-opened");
// document.body.clientWidth > width ? document.body.style.paddingRight = `${document.body.clientWidth - width}px` : null;
