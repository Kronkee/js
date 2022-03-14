'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let txt = document.querySelector('.text');
let links = document.querySelectorAll('.nav-link');


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
links.forEach(function (link){
    link.addEventListener('click',(function clickHandler(event) {
        // здесь вызывайте changeText и changeActiveClass, и передавайте
        // им объект события.
        changeActiveClass(event);
        changeText(event);
    }))
})



/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.currentTarget.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    if(event.target.innerText === 'Link 1') {
        txt.textContent = texts['text1'];
    } else if(event.target.innerText === 'Link 2') {
        txt.textContent = texts['text2'];
    }else if(event.target.innerText === 'Link 3') {
        txt.textContent = texts['text3'];
    }
}