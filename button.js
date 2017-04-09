var button = document.querySelector('#btn');
button.addEventListener('click', closePopup);

var closeBtn = document.querySelector('#close_btn');
close_btn.addEventListener('click', closePopup);

function closePopup(e) {
	document.querySelector('#popup').classList.toggle('hide');
}