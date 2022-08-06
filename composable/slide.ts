export function startSlide(dc) {
  const slider = dc.querySelector(".slider");
  const sliderWrapper = dc.querySelector(".slider-wrapper");

  let slideLength = Array.from(slider.children).length;
  let currentSlide = 0;

  function nextSlide(slide: number) {
    Array.from(slider.children).forEach((item: any, index) => {
      item.style.transform = `translateX(${120 * (index - slide)}%)`;
    });
  }

  nextSlide(0); // initial slide on mounted

  var stopSliding = null;

  function startAutoSliding() {
    stopSliding = setInterval(() => {
      currentSlide++;
      if (currentSlide >= 0 && currentSlide < slideLength) {
        nextSlide(currentSlide);
      } else {
        currentSlide = 0;
        nextSlide(currentSlide);
      }
    }, 4000);
  }

  // sliderWrapper.addEventListener("mouseover", (event) => {
  //   console.log("mouseover");
  //   event.stopPropagation();
  //   clearInterval(stopSliding);
  // });

  // sliderWrapper.addEventListener("mouseleave", (event) => {
  //   event.stopPropagation();
  //   console.log("mouseleave");
  //   startAutoSliding();
  // });
  startAutoSliding();
}
