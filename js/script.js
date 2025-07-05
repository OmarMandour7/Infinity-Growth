document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".stacked-slider .slide");
  let current = 0;

  function showNextSlide() {
    slides.forEach((slide) => slide.classList.remove("active", "prev"));

    const next = (current + 1) % slides.length;
    slides[next].classList.add("active");
    slides[current].classList.add("prev");

    current = next;
  }

  // Initial state
  slides[current].classList.add("active");
  slides[(current + slides.length - 1) % slides.length].classList.add("prev");

  // Start auto sliding
  setInterval(showNextSlide, 3500);
});

const cards = document.querySelectorAll(".card-content");
  let current = 0;

  setInterval(() => {
    cards.forEach(card => card.classList.remove("hovered"));
    cards[current].classList.add("hovered");
    current = (current + 1) % cards.length;
  }, 3000); 
