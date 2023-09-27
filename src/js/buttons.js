const burger = document.querySelector('.button--burger');
const sideMenu = document.querySelector('.side-menu-bar');
const blur = document.querySelector('.blur-screen');
const container = document.querySelector('.container');
let screen = window.matchMedia('(max-width: 767.98px)');


const burgerButton = () => {

    burger.addEventListener('click', function () {
       sideMenu.classList.add('side-menu-bar--active');
       blur.classList.add('blur-screen--active');
       if(screen.matches) {
         container.classList.add('container--hidden');
       }
    });
}

burgerButton();

const close = sideMenu.querySelector('.button--close');

const closeButtonBurger = () => {

    close.addEventListener('click', function () {
       sideMenu.classList.remove('side-menu-bar--active');
       blur.classList.remove('blur-screen--active');
       if(screen.matches) {
         container.classList.remove('container--hidden');
       }
    });

    blur.addEventListener('click', function () {
        sideMenu.classList.remove('side-menu-bar--active');
        blur.classList.remove('blur-screen--active');
     });
}

closeButtonBurger();


let allModals = document.querySelectorAll('.modal');

const modalOpenButton = (modalClassName, modalButtonName) => {

  const modal = document.querySelector(modalClassName);
  const button = sideMenu.querySelector(modalButtonName);

  button.addEventListener('click', function () {

    window.scrollTo(0, 0);

    for (let i = 0; i < allModals.length; i++) {
      if (allModals[i].classList.contains('modal--active')) {
        allModals[i].classList.remove('modal--active')
      }
    }

     modal.classList.add('modal--active');
     blur.classList.add('blur-screen--active');
     if(screen.matches) {
       container.classList.add('container--hidden');
       sideMenu.classList.remove('side-menu-bar--active');
     }
  });
}

modalOpenButton('.modal--call', '.button--call');
modalOpenButton('.modal--feedback', '.button--chat');

const modalCLoseButton = (modalClassName) => {

  const modal = document.querySelector(modalClassName);
  const button = modal.querySelector('.button--close');
  //let wideScreen = window.matchMedia('(min-width: 1366px)')


  button.addEventListener('click', function () {
     modal.classList.remove('modal--active');
     if (!sideMenu.classList.contains('side-menu-bar--active')) {
      blur.classList.remove('blur-screen--active');
     }
     if(screen.matches) {
       sideMenu.classList.add('side-menu-bar--active');
     }
  });

  blur.addEventListener('click', function () {
    modal.classList.remove('modal--active');
    blur.classList.remove('blur-screen--active');
 });
}

modalCLoseButton('.modal--call');
modalCLoseButton('.modal--feedback');


const modalOpenHeaderButton = (modalClassName, modalButtonName) => {

  const modal = document.querySelector(modalClassName);
  const header = document.querySelector('.header');
  const button = header.querySelector(modalButtonName);


  button.addEventListener('click', function () {
     modal.classList.add('modal--active');
     blur.classList.add('blur-screen--active');
  });
}

modalOpenHeaderButton('.modal--call', '.button--call');
modalOpenHeaderButton('.modal--feedback', '.button--chat');

