
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
	menu.classList.add('is-open');
	menuClose.classList.add('is-open');
})

menuClose.addEventListener('click', () => {
	menu.classList.remove('is-open');
	menuClose.classList.remove('is-open');
})