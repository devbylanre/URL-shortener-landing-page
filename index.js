const menuToggle = () => {
	let menu = document.querySelector('#menu');
	if(menu.className === 'header__menu__ul') {
		menu.className += ' flex';
	}else {
		menu.className = 'header__menu__ul';
	}
}



document.querySelector('#hamburgerIcon').addEventListener('click', menuToggle)
