window.addEventListener('DOMContentLoaded', () => {
    //! Tabs
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabConten() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabConten();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabConten();
                    showTabContent(i);
                }
            });
        }
    });


    //! Timer Counter

    const deadline = '2023-01-16';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


    //! Modal

    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelector('[data-close]');

    //* Function that open modal
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    //? open modal using btns
    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            openModal();
        });
    })

    //* Function that close modal
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    //? Close modal using close button
    modalCloseBtn.addEventListener('click', closeModal)

    //? Close modal when clicked out of modal window
    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    //? Close modal when esc button was clicked;
    document.addEventListener('keydown', (event) => {
        if (event.code = 'escape' && modal.classList.contains('show')) {
            closeModal();
        }
    })

    //? Open modal window using setTImeout;
    const modalTimerId = setTimeout(openModal, 5000);

    //* Function for opening modal by scrolling;
    function openModalByScroll() {
        // window.pageYoffset => it's the same scrollY
        // document.documentElement ==> All element from our document
        // clientHeight ==> height from our content including paddings
        // scrollHeight ==> height of an element's content including content not visible on the screen due to overflow
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }
    //? Open modal when user scrolls to the end of the page;
    window.addEventListener('scroll', openModalByScroll);
});