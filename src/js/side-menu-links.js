const menu = document.querySelector('.side-menu');
const menuList = menu.querySelectorAll('.side-menu__link');

const openLink = () => {

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('click', function() {

            for (let j = 0; j < menuList.length; j++) {
                if (menuList[j].classList.contains('side-menu__link--selected')) {
                    menuList[j].classList.remove('side-menu__link--selected');
                }
            }
        
            menuList[i].classList.add('side-menu__link--selected');
        });
    }

}

openLink();