'use strict';
const image = document.getElementById('productImage');
document.addEventListener ('click', function (event) {
   
    if(event.target.getAttribute('value') == 'white') {
        image.src = 'img/tshirt_white.jpg';
    }

    if(event.target.getAttribute('value')== 'yellow') {
        image.src = 'img/tshirt_yellow.jpg';
    }

    if(event.target.getAttribute('value')== 'green') {
        image.src = 'img/tshirt_green.jpg';
    }

});



