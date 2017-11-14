'use strict';
let showMoreStepByStep = document.querySelectorAll('.js-hidden-step-by-step');
let showButtonStepByStep = document.querySelector('.js-load-step-by-step');
let showMoreCraftEducation = document.querySelectorAll('.js-hidden-craft-education');
let showButtonCraftEducation = document.querySelector('.js-load-craft-education');
let showMoreInspiration= document.querySelectorAll('.js-hidden-inspiration');
let showButtonInspiration= document.querySelector('.js-load-inspiration');

showButtonStepByStep.addEventListener('click', function() {
    showMoreStepByStep.forEach(function(item, index) {
        item.classList.remove('js-hidden-step-by-step');
        item.classList.add('js-show-step-by-step');
    });
    showButtonStepByStep.classList.add('js-hidden-step-by-step');
});

showButtonCraftEducation.addEventListener('click', function() {
    showMoreCraftEducation.forEach(function(item, index) {
        item.classList.remove('js-hidden-craft-education');
        item.classList.add('js-show-craft-education');
    });
    showButtonCraftEducation.classList.add('js-hidden-craft-education');
});

showButtonInspiration.addEventListener('click', function() {
    showMoreInspiration.forEach(function(item, index) {
        item.classList.remove('js-hidden-inspiration');
        item.classList.add('js-show-inspiration');
    });
    showButtonInspiration.classList.add('js-hidden-inspiration');
});



