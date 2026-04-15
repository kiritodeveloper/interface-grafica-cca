const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let activeIndex = 0;
let timer = null;

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (index === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ver imagen ${index + 1}`);
    dot.type = 'button';
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function updateActiveSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
  activeIndex = index;
}

function nextSlide() {
  const nextIndex = (activeIndex + 1) % slides.length;
  updateActiveSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  updateActiveSlide(prevIndex);
}

function goToSlide(index) {
  updateActiveSlide(index);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

createDots();
resetTimer();
