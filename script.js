// Pop Up Button
function explore(title, description) {
    let name = prompt("What is your name?");
    
    while (!name) {
        name = prompt("Please enter your name:");
        if (name === null) {
            return;
        }
    }

    const popupBody = document.getElementById("popupBody");
    document.getElementById('popup').style.display = 'flex';
    popupBody.innerHTML = `
        <h3>${title}, ${name}</h3>
        <br>
        <p>${description}</p>
        <br>
        <p> Created by Azelt </p>
        `;
}

// Close Popup Button
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close popup when clicking outside
document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Food Image Slider
const slides = document.querySelectorAll('#food figure');
let slideIndex = 0;
let intervalId = 0;

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 10000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if (index < 0){
        slideIndex = slide.length - 1;
    }

    slides.forEach(slide =>{ 
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// Novel Section
const readBoxes = document.querySelectorAll('.read-box');

readBoxes.forEach(readBox => {
    const buttons = readBox.querySelectorAll('.button-box button');
    const figures = readBox.querySelectorAll('figure');

    function showFigures(startIndex, endIndex) {
        figures.forEach(figure => {
            figure.style.display = 'none';
        });
        for (let i = startIndex; i <= endIndex; i++) {
            if (figures[i]) {
                figures[i].style.display = 'block';
            }
        }
    }

    showFigures(0, 1);

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            if (index === 0) {
                showFigures(0, 1);
            } else if (index === 1) {
                showFigures(2, 3);
            } else if (index === 2) {
                showFigures(4, 5);
            }
        });
    });

    if (buttons[0]) {
        buttons[0].classList.add('active');
    }
});

// Watch Section Swiper
document.querySelectorAll('.anime, .kdrama').forEach(function(sliderElement) {
    const wrapper = document.createElement('div');
    wrapper.className = 'swiper-wrapper';
    
    // Move all figures into swiper slides div element
    const figures = Array.from(sliderElement.querySelectorAll('figure'));
    figures.forEach(function(figure) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.appendChild(figure);
        wrapper.appendChild(slide);
    });
    
    // Add pagination div element
    const pagination = document.createElement('div');
    pagination.className = 'swiper-pagination';
    
    sliderElement.innerHTML = '';
    sliderElement.appendChild(wrapper);
    sliderElement.appendChild(pagination);
    sliderElement.classList.add('swiper');
    
    new Swiper(sliderElement, {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1,},
            768: {slidesPerView: 2,},
            991: {slidesPerView: 5,},
        }
    });
});

// Scroll to Top
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTop.style.display = 'block';
        document.querySelector('.navbar').style.background = 'hsla(240, 86%, 26%, 0.8)';
    } else {
        scrollTop.style.display = 'none';
        document.querySelector('.navbar').style.background = 'none';
    }
});

scrollTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
    });
});