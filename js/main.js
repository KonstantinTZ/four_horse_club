import Slider from '../js/slider.js'

let slider1 = null

document.addEventListener('DOMContentLoaded', checkMediaQuery())



    // в зависимости от изначальной ширины экрана задаём параметры
    function checkMediaQuery() {
        if (window.innerWidth < 768) {
            slider1 = new Slider(document.querySelector('.carousel'), {
                inFrame: 1, // два элемента в кадре
                offset: 1, // смещать на один элемент
            })
        } else if (window.innerWidth > 768) {
            slider1 = new Slider(document.querySelector('.carousel'), {
                inFrame: 3, // два элемента в кадре
                offset: 1, // смещать на один элемент
            })
           

        }


    }
    // window.addEventListener('resize', checkMediaQuery);


