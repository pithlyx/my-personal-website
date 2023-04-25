function nextSlide() {
    let currentSlide = document.querySelector('.slide.active');
    if (currentSlide.nextElementSibling) {
        currentSlide.classList.remove('active');
        currentSlide.nextElementSibling.classList.add('active');
    }
    let element = document.querySelector('.slide.active');
    element.scrollIntoView({behavior: "smooth"});  
}

function previousSlide() {
    let currentSlide = document.querySelector('.slide.active');
    if (currentSlide.previousElementSibling) {
        currentSlide.classList.remove('active');
        currentSlide.previousElementSibling.classList.add('active');
    }
    let element = document.querySelector('.slide.active');
    element.scrollIntoView({behavior: "smooth"});  
}
