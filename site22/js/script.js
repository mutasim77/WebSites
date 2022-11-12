//! Refrashe Page
function onReload() {
    $('.glass').css('opacity', '0');
    $(".glass").animate({ opacity: '1' }, 1500);
    $('.glass h1').css({
        'top': '-50px',
        'opacity': '0'
    });

    setTimeout(() => {
        $(".glass h1").animate({ top: '+=50px', opacity: '1' }, 1500);
    }, 900)
}
//! Window reload
window.onload = onReload();


//! Buttons Click
$('li').on('click', (event) => {
    let element = event.target.textContent;
    if (element == 'Upcoming') {
        showEvents(element);
    } else if (element == 'Games') {
        showEvents(element);
    } else if (element == 'Streams') {
        showEvents(element);
    } else if (element == 'Library') {
        showEvents(element);
    }
});

//! Target Events
function showEvents(element) {
    showEffect();
    showMain(element);
    if (element == 'Upcoming') {
        $('.top h1').text('Upcomings');
    } else if (element == 'Games') {
        $('.top h1').text('Games');
    } else if (element == 'Streams') {
        $('.top h1').text('Streams');
    } else if (element == 'Library') {
        $('.top h1').text('Library');
    }
};

//! Effects Animation
function showEffect() {
    $('.top h1').css({
        'top': '-50px',
        'opacity': '0'
    });
    $(".glass h1").animate({ top: '+=50px', opacity: '1' }, 'slow');

    $('.main').css({
        'left': '+100px',
        'opacity': '0'
    })
    $('.main').animate({
        left: '-=100px',
        opacity: '1'
    }, 'slow');

};

function showMain(element) {
    document.querySelectorAll('.main').forEach(item => {
        item.classList.add('hide');
    });
    $(`#${element}`).removeClass('hide');
};



