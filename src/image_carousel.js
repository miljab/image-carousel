export function imageCarousel(slider, previousButton, nextButton, imgWidth) {
  const sliderWidth = parseInt(slider.scrollWidth);
  slider.style.right = 0;

  nextButton.addEventListener("click", () => {
    nextImg(slider, sliderWidth, imgWidth);
  });

  previousButton.addEventListener("click", () => {
    previousImg(slider, sliderWidth, imgWidth);
  });
}

function nextImg(slider, sliderWidth, imgWidth) {
  if (parseInt(slider.style.right) < sliderWidth - imgWidth) {
    slider.style.right = `${parseInt(slider.style.right) + imgWidth}px`;
  }
}

function previousImg(slider, sliderWidth, imgWidth) {
  if (parseInt(slider.style.right) > 0) {
    slider.style.right = `${parseInt(slider.style.right) - imgWidth}px`;
  }
}
