const nav = document.querySelector('.nav__burger');
const burgerBtn = document.querySelector('.burger-btn');
const allBurgerItems = document.querySelectorAll('.burger__item');

const year = document.querySelector('.footer__year');

// setting nav-Burger active or not
const handleNav = () => {
	nav.classList.toggle('nav__burger--active');

	allBurgerItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__burger--active');
		});
	});
};

// setting observer section
const handleObserver = () => {
	const currentSection = window.scrollY;

	if (currentSection > 650) {
		burgerBtn.classList.add('burger-btn--active');
	} else {
		burgerBtn.classList.remove('burger-btn--active');
		nav.classList.remove('nav__burger--active');
	}
};

// setting the current year in footer
const date = new Date().getFullYear();
year.textContent = date;

window.addEventListener('scroll', handleObserver);
burgerBtn.addEventListener('click', handleNav);
