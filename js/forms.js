/**********TOGGLER*****************/

const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav-menu');
const sliderSection = document.querySelector('.slider');
const industrialDrop = document.querySelector('.industrial-drop');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.close-submenu');
const footer = document.querySelector('footer');
const textSliderSection = document.querySelector('#text-slider-section');
const opacity = document.querySelector('.opacity-me');
const hero = document.getElementById('hero-section');
const buttonsSteps = document.getElementById('buttons-steps');
const stepSection = document.getElementById('step-section');
const htmlFreeze = document.querySelector('html');

//const body = document.querySelector('body');

//On click add class for dropmenu
toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    //   body.classList.toggle('overflow');
    toggleButton.classList.toggle('open');
    footer.classList.toggle('opacity-me');
    hero.classList.toggle('opacity-me');
    buttonsSteps.classList.toggle('opacity-me');
    stepSection.classList.toggle('opacity-me');
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
        footer.classList.remove('opacity-me');
        hero.classList.remove('opacity-me');
        buttonsSteps.classList.remove('opacity-me');
        stepSection.classList.remove('opacity-me');
        htmlFreeze.classList.remove('freeze-me');
    };
});

/****************Crazy forms***********************/

//forms
const commercialForm = document.querySelector('.commercial-form');
const personalInfoForm = document.querySelector('.personal-info-form');
const donationInfoForm = document.querySelector('.donation-info-form');
const paymentInfoForm = document.querySelector('.payment-info-form');
const confirmation = document.querySelector('.confirmation');
const selectForm = document.querySelectorAll('.changing-buttons');

selectForm.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'first-btn') {
            console.log('first');
            commercialForm.classList.add('active-form');
            personalInfoForm.classList.remove('active-form');
            donationInfoForm.classList.remove('active-form');
            paymentInfoForm.classList.remove('active-form');
            confirmation.classList.remove('active-form');
            e.target.classList.add('active-step');
            e.target.nextElementSibling.classList.remove('active-step');
            e.target.nextElementSibling.classList.add('next-step');
        }
        if (e.target.id === 'second-btn') {
            console.log('second');
            commercialForm.classList.remove('active-form');
            personalInfoForm.classList.add('active-form');
            donationInfoForm.classList.remove('active-form');
            paymentInfoForm.classList.remove('active-form');
            confirmation.classList.remove('active-form');
            e.target.classList.add('active-step');
            e.target.classList.remove('next-step');
            e.target.previousElementSibling.classList.add('previous-step');
            e.target.previousElementSibling.classList.remove('active-step');
            e.target.nextElementSibling.classList.add('next-step');
        }
        if (e.target.id === 'third-btn') {
            console.log('third');
            commercialForm.classList.remove('active-form');
            personalInfoForm.classList.remove('active-form');
            donationInfoForm.classList.add('active-form');
            paymentInfoForm.classList.remove('active-form');
            confirmation.classList.remove('active-form');
            e.target.classList.add('active-step');
            e.target.classList.remove('next-step');
            e.target.previousElementSibling.classList.add('previous-step');
            e.target.previousElementSibling.classList.remove('active-step');
            e.target.nextElementSibling.classList.add('next-step');
        }
        if (e.target.id === 'forth-btn') {
            console.log('forth');
            commercialForm.classList.remove('active-form');
            personalInfoForm.classList.remove('active-form');
            donationInfoForm.classList.remove('active-form');
            paymentInfoForm.classList.add('active-form');
            confirmation.classList.remove('active-form');
            e.target.classList.add('active-step');
            e.target.classList.remove('next-step');
            e.target.previousElementSibling.classList.add('previous-step');
            e.target.previousElementSibling.classList.remove('active-step');
            e.target.nextElementSibling.classList.add('next-step');
        }
        if (e.target.id === 'fifth-btn') {
            commercialForm.classList.remove('active-form');
            personalInfoForm.classList.remove('active-form');
            donationInfoForm.classList.remove('active-form');
            paymentInfoForm.classList.remove('active-form');
            confirmation.classList.add('active-form');
            e.target.classList.add('active-step');
            e.target.classList.remove('next-step');
            e.target.previousElementSibling.classList.add('previous-step');
            e.target.previousElementSibling.classList.remove('active-step');
        }
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.getElementById('first-btn').innerHTML = '1.';
        document.getElementById('second-btn').innerHTML = '2.';
        document.getElementById('third-btn').innerHTML = '3.';
        document.getElementById('forth-btn').innerHTML = '4.';
        document.getElementById('fifth-btn').innerHTML = '5.';

    } else {
        document.getElementById('first-btn').innerHTML = '1. Donate';
        document.getElementById('second-btn').innerHTML = '2. Personal';
        document.getElementById('third-btn').innerHTML = '3. Donation info';
        document.getElementById('forth-btn').innerHTML = '4. Payment';
        document.getElementById('fifth-btn').innerHTML = '5. Confirmation';

    };
});