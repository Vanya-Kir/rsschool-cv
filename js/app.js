const tabs = document.querySelector('.tabs');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  // closeMenu.style.opacity = "1";
	tabs.style.display = 'flex';
	tabs.style.top = '0';
  document.querySelector('.close-menu').style.display = "block";
}
function close() {
	tabs.style.top = '-100%';
}
