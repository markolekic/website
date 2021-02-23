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
const htmlFreeze = document.querySelector('html')

//On click add class for dropmenu
toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active');
  toggleButton.classList.toggle('open');
  footer.classList.toggle('opacity-me');
  htmlFreeze.classList.toggle('freeze-me');
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
    footer.classList.remove('opacity-me');
    toggleButton.classList.remove('open');
    htmlFreeze.classList.remove('freeze-me');
  }
});

/********/

//ACCORDIAN

const accordionBtns = document.querySelectorAll(".accordion");

//go through each accordion button one by one
accordionBtns.forEach((accordion) => {
  accordion.addEventListener('click', (e) => {
    //Use the classlist dom method in combination with the toggle method
    e.target.classList.toggle("is-open");
    //it allows us to work with the div that has the content that we want to display
    let content = e.target.nextElementSibling;
    //set the max-height based on whether the current value of the max-height css property
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is closed we set the max-height of the currently hidden text inside the accordion from 0 to the scroll height of the content inside the accordion
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  })
});

/*******/

// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  grabCursor: false,
  loop: true,
  navigation: {
    nextEl: "#b-next",
    prevEl: "#b-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 1.5
    },
    1020: {
      slidesPerView: 3
    }
  }
});

/****Smooth scroll****/

//select links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', (e) => {
//     //prevent default
//     e.preventDefault();

//     //get attribute where we want ot scroll
//     document.querySelector(e.target.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });