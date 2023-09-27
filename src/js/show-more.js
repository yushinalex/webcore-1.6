const showMoreButton = (className, number, text1, text2) => {

    const showMore = document.querySelector(`.${className}__button`);
    let list = document.querySelector(`.${className}__list`);
    let hidden = list.querySelectorAll(`.${className}__item:nth-child(n + ${number})`);

    showMore.addEventListener('click', function () {
        let notHidden = list.querySelectorAll(`.${className}__item--visible`);
        if (notHidden.length) {
            for (let i = 0; i < notHidden.length; i++) {
                notHidden[i].classList.remove(`${className}__item--visible`);
            }
            showMore.textContent = text1;
            showMore.classList.remove(`${className}__button--hide`);
        } else {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].classList.add(`${className}__item--visible`);
            }
            showMore.textContent = text2;
            showMore.classList.add(`${className}__button--hide`);
        }
    });
}


showMoreButton('brands', 7, 'Показать все', 'Скрыть');
showMoreButton('devices', 4, 'Показать все', 'Скрыть');