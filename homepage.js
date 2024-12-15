//SIDEBAR
const side_bar_button = document.querySelector('.side-bar-button');
const navLinks = document.querySelector('.nav-links');

side_bar_button.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// BUTTONS
const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

let currentIndex = 0;
const segments = document.querySelectorAll('.segment');
const segmentWidth = segments[0].offsetWidth + 40; // Including margin

rightButton.addEventListener('click', () => {
    if (currentIndex < segments.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${segmentWidth * currentIndex}px)`;
    }
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${segmentWidth * currentIndex}px)`;
    }
});
//EXPLORE
function scrollToCreativeSegments() {
    document.querySelector('#creative-segments').scrollIntoView({
        behavior: 'smooth'
    });
}


