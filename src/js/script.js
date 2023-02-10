const burgerBtn = document.querySelector(".nav__burgerBtn");
const mobileNav = document.querySelector(".nav__list");
const dropdowns = document.querySelectorAll('.footer__dropdown')

function showNav() {
	mobileNav.classList.toggle("showNav");
}

burgerBtn.addEventListener("click", showNav);

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.footer__select')    
  const caret = dropdown.querySelector('.footer__caret')    
  const menu = dropdown.querySelector('.footer__list')    
  const options = dropdown.querySelectorAll('.footer__link')    
  const selected = dropdown.querySelectorAll('.footer__selected')    

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
    menu.classList.toggle('menu-open')
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('selected-clicked');
      caret.classList.remove('caret-rotate')
      menu.classList.remove('menu-open')

      options.forEach(option => {
        option.classList.remove('active')
      })
      option.classList.add('active')
    })
  })
})









// slider

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
