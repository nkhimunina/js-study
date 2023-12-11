function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');
    
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });
    
            slide.classList.add('active');
        })
    }
}

slidesPlugin(4);