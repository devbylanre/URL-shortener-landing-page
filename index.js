const menuToggle = () => {
	let menu = document.querySelector('#menu');
	if(menu.style.display == 'none') {
		menu.style.display = 'flex';
	}else {
		menu.style.display = 'none';
	}
}



document.querySelector('#hamburgerIcon').addEventListener('click', menuToggle)
