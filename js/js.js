/***************************/

//TOGGLER
const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav-menu');
const sliderSection = document.querySelector('.slider');
const industrialDrop = document.querySelector('.industrial-drop');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.close-submenu');
const footer = document.querySelector('footer');
const textSliderSection = document.querySelector('#text-slider-section');
const htmlFreeze = document.querySelector('html');

//On click add class for dropmenu
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    htmlFreeze.classList.toggle('freeze-me');
    toggleButton.classList.toggle('open');
    sliderSection.classList.toggle('opacity-me');
    textSliderSection.classList.toggle('opacity-me');
    footer.classList.toggle('opacity-me');
});

//industrial drop on resize
industrialDrop.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        subMenu.classList.toggle('active');
    };
});

//Remove classes on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navList.classList.remove('active');
        subMenu.classList.remove('active');
        sliderSection.classList.remove('opacity-me');
        textSliderSection.classList.remove('opacity-me');
        footer.classList.remove('opacity-me');
        toggleButton.classList.remove('open');
        htmlFreeze.classList.remove('freeze-me');
    }
});

/***************************************/

//SLIDER
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next-red');
const prev = document.querySelector('#prev-red');

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
};

// Button events
next.addEventListener('click', () => {
    nextSlide();
});

prev.addEventListener('click', () => {
    prevSlide();
});

/***************************************/

// TEXT SLIDER

const nextOrange = document.querySelector('#next-orange');
const prevOrange = document.querySelector('#prev-orange');
let currentSlide = 1;

const showSlide = (slideIndex) => {
    const slideText = document.getElementsByClassName('slides');
    //if the slideIndex exceeds the slides count we need to reset the currentSlide to 1
    if (slideIndex > slideText.length) {
        currentSlide = 1
    }
    //If the slideIndex becomes zero or lesser, reset the currentSlide to slides length
    if (slideIndex < 1) {
        currentSlide = slideText.length;
    }
    //This resetting makes the previous and next actions to iterate through the existing slides like infinite
    for (let i = 0; i < slideText.length; i++) {
        slideText[i].style.display = 'none';
    }
    slideText[currentSlide - 1].style.display = 'block';
}

// Function to show the slide one at a time
const nextSlideText = () => {
    showSlide(currentSlide += 1);
}

const previousSlide = () => {
    showSlide(currentSlide -= 1);
}

// Button events & add the previous and next functionality to the carousel
window.onload = () => {
    showSlide(currentSlide);
    prevOrange.addEventListener('click', () => {
        previousSlide();
    })
    nextOrange.addEventListener('click', () => {
        nextSlideText();
    })
}