const tabs = document.querySelector('.tabs');
const closeMenu = document.querySelector('.close_menu');
const openMenu = document.querySelector('.open_menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
	tabs.style.display = 'flex';
	tabs.style.top = '0';
}
function close() {
	tabs.style.top = '-100%';
}
