export function imageCarousel(
  slider,
  previousButton,
  nextButton,
  imgWidth,
  nav,
) {
  const sliderWidth = parseInt(slider.scrollWidth);
  slider.style.right = 0;

  const numberOfImages = sliderWidth / imgWidth;
  const navButtons = [];

  for (let i = 0; i < numberOfImages; i++) {
    const navButton = document.createElement("button");
    navButtons.push(navButton);
    navButton.classList.add("nav-button");

    if (i == 0) navButton.style.backgroundColor = "black";
    nav.appendChild(navButton);
  }

  let sliderInterval = startInterval(
    slider,
    sliderWidth,
    imgWidth,
    navButtons,
    numberOfImages,
  );

  for (let i = 0; i < numberOfImages; i++) {
    navButtons[i].addEventListener("click", () => {
      clearInterval(sliderInterval);
      slider.style.right = `${imgWidth * i}px`;
      navUpdate(navButtons, i, numberOfImages);
      sliderInterval = startInterval(
        slider,
        sliderWidth,
        imgWidth,
        navButtons,
        numberOfImages,
      );
    });
  }

  nextButton.addEventListener("click", () => {
    clearInterval(sliderInterval);
    nextImg(slider, sliderWidth, imgWidth, navButtons, numberOfImages);
    sliderInterval = startInterval(
      slider,
      sliderWidth,
      imgWidth,
      navButtons,
      numberOfImages,
    );
  });

  previousButton.addEventListener("click", () => {
    clearInterval(sliderInterval);
    previousImg(slider, imgWidth, navButtons, numberOfImages);
    sliderInterval = startInterval(
      slider,
      sliderWidth,
      imgWidth,
      navButtons,
      numberOfImages,
    );
  });
}

function nextImg(slider, sliderWidth, imgWidth, navButtons, n) {
  if (parseInt(slider.style.right) < sliderWidth - imgWidth) {
    slider.style.right = `${parseInt(slider.style.right) + imgWidth}px`;
    let index = parseInt(slider.style.right) / imgWidth;
    navUpdate(navButtons, index, n);
  }
}

function previousImg(slider, imgWidth, navButtons, n) {
  if (parseInt(slider.style.right) > 0) {
    slider.style.right = `${parseInt(slider.style.right) - imgWidth}px`;
    let index = parseInt(slider.style.right) / imgWidth;
    navUpdate(navButtons, index, n);
  }
}

function navUpdate(buttons, index, n) {
  for (let j = 0; j < n; j++) {
    if (j != index) buttons[j].style.backgroundColor = "white";
    else buttons[index].style.backgroundColor = "black";
  }
}

function startInterval(
  slider,
  sliderWidth,
  imgWidth,
  navButtons,
  numberOfImages,
) {
  return setInterval(() => {
    if (parseInt(slider.style.right) == sliderWidth - imgWidth) {
      slider.style.right = 0;
      navUpdate(navButtons, 0, numberOfImages);
    } else {
      nextImg(slider, sliderWidth, imgWidth, navButtons, numberOfImages);
    }
  }, 5000);
}
