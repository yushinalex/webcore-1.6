
let readMore = document.querySelector('.about__button');
let hidden1 = document.querySelector('.about__text--hidden-on-phone');
let hidden2 = document.querySelector('.about__text--hidden-on-pad');
let hidden3 = document.querySelector('.about__text--hidden-on-desktop');

readMore.addEventListener('click', function() {
    let notHidden1 = document.querySelectorAll('.about__text--hidden-on-phone--visible');
    if (notHidden1.length) {
        hidden1.classList.remove('about__text--hidden-on-phone--visible');
        hidden2.classList.remove('about__text--hidden-on-pad--visible');
        hidden3.classList.remove('about__text--hidden-on-desktop--visible');
        readMore.textContent = 'Читать далее';
        readMore.classList.remove('about__button--hide');
    } else {
        hidden1.classList.add('about__text--hidden-on-phone--visible');
        hidden2.classList.add('about__text--hidden-on-pad--visible');
        hidden3.classList.add('about__text--hidden-on-desktop--visible');
        readMore.textContent = 'Скрыть';
        readMore.classList.add('about__button--hide');
    }
});
