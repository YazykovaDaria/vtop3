const createImage = (src, alt, className) => {
  const image = new Image();

  image.src = src;
  image.alt = alt;
  if (className) {
    image.classList.add(className);
  }
  return image;
};

export default createImage;
