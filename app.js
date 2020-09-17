const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const header = document.querySelector('.header.container');


document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".container").classList.toggle("change");
  });

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
document.querySelector(".scroll-btn").addEventListener("click", () => {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});

