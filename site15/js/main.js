
let btnMenu = document.querySelector('.header-btn-menu');

let change = () => {
    btnMenu.classList.toggle('hide');
    document.querySelector('.header-mobile-nav').classList.toggle('hide');
    document.querySelector('.mobile').addEventListener('click', hide);

    function hide() {
        let nav = document.querySelector('.header-mobile-nav');
        nav.classList.remove('hide');
    }
}

btnMenu.addEventListener('click', change);