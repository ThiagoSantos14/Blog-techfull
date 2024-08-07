const nav = document.querySelector('.navColor');
const titulo1 = document.querySelector('.titulo1');
const titulo2 = document.querySelector('.titulo2');
const titulo3 = document.querySelector('.titulo3');
const titulo4 = document.querySelector('.titulo4');
const titulo5 = document.querySelector('.titulo5');
const titulo6 = document.querySelector('.titulo6');
const titulo7 = document.querySelector('.titulo7');
const btnDarkMode = document.querySelector('.btnDarkMode');
const body = document.querySelector('.body');

btnDarkMode.addEventListener("click", function(event) {
    event.preventDefault();

    nav.classList = 'linkTop2';
    titulo1.style.color = 'black';
    titulo2.style.color = 'black';
    titulo3.style.color = 'black';
    titulo4.style.color = 'black';
    titulo5.style.color = 'black';
    titulo6.style.color = 'black';
    titulo7.style.color = 'black';
    body.style.color = 'white';
    body.style.background = 'black';
});

btnDarkMode.addEventListener("dblclick", function(event) {
    event.preventDefault();

    nav.classList = 'linkTop';
    titulo1.style.color = 'black';
    titulo2.style.color = 'black';
    titulo3.style.color = 'black';
    titulo4.style.color = 'black';
    titulo5.style.color = 'black';
    titulo6.style.color = 'black';
    titulo7.style.color = 'black';
    body.style.color = 'black';
    body.style.background = 'white';
});
