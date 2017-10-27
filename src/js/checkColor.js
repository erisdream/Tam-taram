'use strict';
const image = document.getElementById('image');
const buttonWhite = document.getElementById('radio4');
const buttonYellow = document.getElementById('radio5');
const buttonGreen = document.getElementById('radio6');

function colorWhite() {
    image.src = 'img/tshirt_white.jpg';
}

function colorYellow() {
    image.src = 'img/tshirt_yellow.jpg';
}

function colorGreen() {
    image.src = 'img/tshirt_green.jpg';
}

buttonWhite.addEventListener('click', colorWhite, false);
buttonYellow.addEventListener('click', colorYellow, false);
buttonGreen.addEventListener('click', colorGreen, false);
