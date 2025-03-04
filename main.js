function startTime() {
  const tomorrow = new Date();
  let h = tomorrow.getHours();
  let m = tomorrow.getMinutes();
  let s = tomorrow.getSeconds();
  let time =  h + ":" + m + ":" + s;

  const element = document.getElementById("clock");
  element.innerHTML = time;
}

   
setInterval(startTime, 1000);




function sliderFn() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let i = 0;

    // Find show-slide index
    slides.forEach((slide, index) => {
        
        if (slide.classList.contains("show-slide")){
            currentSlide = i;
        } 
        
         i++;
    });



    function renderSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add("show-slide");
            } else {
                slide.classList.remove("show-slide");
            }
        });
    }


    function goToNextSlide() {
        if (currentSlide === slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        console.log(currentSlide);
        renderSlides();
    }

    goToNextSlide();    


    }


    setInterval(sliderFn, 5000);
