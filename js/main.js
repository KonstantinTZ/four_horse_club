import ParticipantsBigSlider from './participantsBigSlider.js'
import StepsSlider from './stepsSlider.js';
import ParticipantsSmallSlider from './participantsSmallSlider.js'

let participantsSmallSlider = null
let participantsBigSlider = null
let stepsSlider = null


document.addEventListener('DOMContentLoaded', function() {
    stepsSlider = new StepsSlider(document.querySelector('.steps-carousel'));
    participantsBigSlider = new ParticipantsBigSlider(document.querySelector('.participants-big-carousel'), {
                        inFrame: 3, // два элемента в кадре
                        offset: 1, // смещать на один элемент
                    });
    participantsSmallSlider = new ParticipantsSmallSlider(document.querySelector('.participants-small-carousel'), {
        inFrame: 1, // два элемента в кадре
        offset: 1, // смещать на один элемент
    });
});


   


