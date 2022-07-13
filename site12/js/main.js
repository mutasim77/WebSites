function changeColor(pic , color){
	let picture = document.querySelector('#pic');
	let background = document.querySelector('body');
	picture.setAttribute('src', pic);
	background.style.background = color;
}