const createElement = (tagName, className, textContent, onClickHandler) => {
  const element = document.createElement(tagName);

  if (className) {
    className.split(' ').forEach((name) => {
      element.classList.add(name);
    });
  }
  if (textContent) {
    element.innerHTML = textContent;
  }
  if (onClickHandler) {
    element.addEventListener('click', onClickHandler);
  }
  return element;
};

export default createElement;
