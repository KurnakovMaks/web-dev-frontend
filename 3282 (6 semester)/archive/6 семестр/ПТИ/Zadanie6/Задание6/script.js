function slideVariation(sliderID, slideDirection) { 
    var actualSlide=document.getElementById(sliderID);
    var slides = actualSlide.getElementsByClassName('slider_img');
    
    for(var i=0;i<slides.length;i++){
    
        if (slides[i].classList.contains('slider_img_active')){
            slides[i].classList.remove('slider_img_active');
            slides[i].classList.add('slider_img_inactive');
            if (slideDirection=='top') {
                if(i==0){
                    i=slides.length-1;
                } else {
                    i--;
    
                }
                slides[i].classList.remove('slider_img_inactive');
                slides[i].classList.add('slider_img_active');
                break;
                } else {
                
                if(i==slides.length-1) {
                    i=0;
                } else {
                    i++;
                }
                slides[i].classList.remove('slider_img_inactive');
                slides[i].classList.add('slider_img_active');
                break;
            
                }
            }
        }
    }