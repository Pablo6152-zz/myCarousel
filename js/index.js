const slides = document.getElementsByClassName("carousel-item")
let currentSlide = 0
const totalSlides = slides.length

document.getElementById("btn-slide-prev").addEventListener("click", prevSlide)
document.getElementById("btn-slide-next").addEventListener("click", nextSlide)

function hideCurrentSlide(){
    for (let slide of slides){
        slide.classList.add("carousel-item-hidden")
        slide.classList.remove("carousel-item-shown")
    }
}
function prevSlide(){
    hideCurrentSlide()

    if(currentSlide === 0){
        currentSlide = 2
    } else {
        currentSlide--
    }

    slides[currentSlide].classList.add("carousel-item-shown")
    slides[currentSlide].classList.remove("carousel-item-hidden")
}
function nextSlide(){
    hideCurrentSlide()

    if(currentSlide === totalSlides - 1){
        currentSlide = 0
    } else {
        currentSlide++
    }

    slides[currentSlide].classList.add("carousel-item-shown")
    slides[currentSlide].classList.remove("carousel-item-hidden")  
}