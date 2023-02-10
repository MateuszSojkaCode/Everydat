const burgerBtn = document.querySelector(".nav__burgerBtn");
const mobileNav = document.querySelector(".nav__list");

function showNav() {
	mobileNav.classList.toggle("showNav");
}

burgerBtn.addEventListener("click", showNav);

const swiper = new Swiper(".mySwiper", {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 20,
	// Responsive breakpoints
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 25,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  pagination: {
    el: '.swiper-pagination',
  },
});
