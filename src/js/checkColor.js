'use strict';
const image = document.getElementById('image');
document.addEventListener ('click', function (event) {
    if(event.target.classList.contains('page-main__good-radio--color-white')) {
        image.src = 'img/tshirt_white.jpg';
    }

    if(event.target.classList.contains('page-main__good-radio--color-yellow')) {
        image.src = 'img/tshirt_yellow.jpg';
    }

    if(event.target.classList.contains('page-main__good-radio--color-green')) {
        image.src = 'img/tshirt_green.jpg';
    }

});
