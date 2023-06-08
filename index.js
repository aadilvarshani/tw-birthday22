// Add your JavaScript code here

//playing birthday music
window.addEventListener('load', function() {
  var audio = new Audio('HappyBirthday.mp3');
  audio.play();
});

document.addEventListener('DOMContentLoaded', function() {
  var audio = new Audio('HappyBirthday.mp3');
  audio.play();
});



//changing word
const words = ['love✨','hayat✨', 'moon✨', 'tw✨','cutie✨'];
let currentIndex = 0;

function changeWord() {
  const changingWord = document.getElementById('changing-word');
  changingWord.classList.remove('animated-text', 'animated-cursor');
  changingWord.textContent = words[currentIndex];
  changingWord.offsetWidth; // Trigger reflow to restart animation
  changingWord.classList.add('animated-text', 'animated-cursor');
  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(changeWord, 2000);





function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('sparkles').appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

function generateSparkles() {
  setInterval(createSparkle, 20000);
}

generateSparkles();




document.addEventListener("DOMContentLoaded", function() {
  confetti();
});

// Image Lightbox
const photos = document.querySelectorAll('.photo');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    lightbox.classList.add('open');
    lightboxImage.src = photo.querySelector('img').src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('open');
});


// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

// Smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


