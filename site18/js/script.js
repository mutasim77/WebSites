let navBtn = document.querySelector('#nav-btn');
let navbar = document.querySelector('.navbar');
let navPicture = document.querySelector('#nav-btn-img');

navBtn.addEventListener('click', () => {
    if (!navbar.classList.contains('open')) {
        navbar.classList.toggle('open');
        navPicture.src = 'img/btnClose.png';
        document.body.classList.toggle('hidden');
    } else {
        navbar.classList.toggle('open');
        navPicture.src = 'img/btn.png';
        document.body.classList.toggle('hidden');
    }
});
