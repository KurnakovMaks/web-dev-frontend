function slideChange(sliderId, slideDirection) {
  var currentSlider = document.getElementById(sliderId);
  var slides = currentSlider.getElementsByClassName("slider_slide");

  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("slider_slide_active")) {
      slides[i].classList.remove("slider_slide_active");
      slides[i].classList.add("slider_slide_inactive");

      if (slideDirection == "left") {
        if (i == 0) {
          i = slides.length - 1;
        } else {
          i--;
        }
      } else {
        if ((i = slides.length - 1)) {
          i = 0;
        } else {
          i++;
        }
      }
      slides[i].classList.remove("slider_slide_inactive");
      slides[i].classList.add("slider_slide_active");
      break;
    }
  }
}
