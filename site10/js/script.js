//! Fade Down
$('#textBox').animate({ top: '+=100px', opacity: 1 }, "slow");

//! Fade Right
$('#imgFade').animate({ right: '+=100px', opacity: 1 }, "slow");

//! Logo click reload
$('.logo').click(() => {
    window.location.reload();
})

//! Nav click
$('.list').click((event) => {
    if (event.target.innerText == 'Home') {
        window.location.reload();
    } else if (event.target.innerText == 'Menu') {
        changePage(event.target.innerText);
    } else if (event.target.innerText == 'About us') {
        changePage(event.target.innerText);
    } else if (event.target.innerText == 'Contact') {
        changePage(event.target.innerText);
    }
});

//! Change the Page
function changePage(text) {
    let list = document.querySelector('#textBox h2');
    list.innerHTML = text;
    list.style.color = '#017143';
    list.style.fontWeight = '700';

    //! Delete not needed Elements
    // $('#btn').remove();
    $('.thumb').remove();
    $('.sci').remove();
    $('.circle').remove();


    //! SetPicture
    if (text === 'Menu') {
        imgSlider('img/menu.jpeg');
    } else if (text === 'About us') {
        imgSlider('img/about.jpg');
    } else if (text === 'Contact') {
        imgSlider('img/contact.jpeg');
    }

    $('#textBox').css("top", "-100px");
    $('#textBox').css("opacity", "0");
    $('#textBox').animate({ top: '+=100px', opacity: 1 }, "slow");
}

//! Change Pictures 
function imgSlider(anything) {
    let pic = document.querySelector('.sturbucks');
    if (anything == 'img/img2.png') {
        pic.style.maxWidth = '345px';
    } else {
        pic.style.maxWidth = '500px';
    }

    if (anything.includes('img/img')) {
        pic.style.animation = 'animate 3s linear infinite';
    } else {
        pic.style.animation = 'none';
        pic.style.right = '-100px';
        pic.style.opacity = '0';
        $('.sturbucks').animate({ right: '+=100px', opacity: 1 }, 'slow');
    }
    pic.src = anything;
}

//! Change Color Of Background
function changeColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//! Dark Mode
$('#btn').click(() => {
    let meta = document.querySelectorAll('meta')[2].content;
    if (meta == 'dark') {
        document.querySelectorAll('meta')[2].content = 'light';
        $('#btn').text('Dark Mode');
        document.querySelector('.content .textBox h2').classList.toggle('dark');
        document.querySelector('.content .textBox p').classList.toggle('dark');
    } else {
        document.querySelectorAll('meta')[2].content = 'dark';
        $('#btn').text('Light Mode');
        document.querySelector('.content .textBox h2').classList.toggle('dark');
        document.querySelector('.content .textBox p').classList.toggle('dark');
    }
});