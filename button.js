var button = document.querySelector('#btn');
button.addEventListener('click', createPopup);

function createPopup() {
	var popup = document.createElement('div');
	popup.id = 'popup';

	var closeBtn = document.createElement('button');
	closeBtn.id = 'close_btn';
	closeBtn.textContent = '✖';
	closeBtn.addEventListener('click', function closePopup(e) {
		document.querySelector('#popup').remove();
	});
	popup.appendChild(closeBtn);

	var iframe = document.createElement('iframe');
	iframe.width="560";
	iframe.height="315";
	iframe.src="https://www.youtube.com/embed/xsZSXav4wI8?autoplay=1";
	iframe.frameborder="0";
	allowfullscreen=true;
	popup.appendChild(iframe);

	document.body.appendChild(popup);
}