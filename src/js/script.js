const burgerBtn = document.querySelector('.nav__burgerBtn')
const mobileNav = document.querySelector('.nav__list')

function showNav() {
    mobileNav.classList.toggle('showNav')
}

burgerBtn.addEventListener('click', showNav)