'use strict'

// console.log(document.getElementsByClassName('container')[0]);
document.getElementsByClassName('container')[0].addEventListener('click', (e) => {
    // console.log(e.target.nodeName === 'H2');
    if(e.target.nodeName === 'H2'){
        const paragraphs = document.querySelectorAll('.container p');

        for (let i = 0; i<paragraphs.length; i++){
            paragraphs[i].classList.remove('visible');
        }
        e.target.nextElementSibling.classList.toggle('visible');

    //    debugger
    }
})