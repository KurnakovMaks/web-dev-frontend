function slideVariation(sliderID, slideDirection) {
  var actualSlide = document.getElementById(sliderID);
  var slides = actualSlide.getElementsByClassName("slider_slide");

  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("slider_slide_on")) {
      slides[i].classList.remove("slider_slide_on");
      slides[i].classList.add("slider_slide_off");
      if (slideDirection == "left") {
        if (i == 0) {
          i = slides.length - 1;
        } else {
          i--;
        }
        slides[i].classList.remove("slider_slide_off");
        slides[i].classList.add("slider_slide_on");
        break;
      } else {
        if (i == slides.length - 1) {
          i = 0;
        } else {
          i++;
        }
        slides[i].classList.remove("slider_slide_off");
        slides[i].classList.add("slider_slide_on");
        break;
      }
    }
  }
}
