'use strict';

const container = document.getElementsByClassName('container')[0]; //const lepszy do odwolania , korzystax
// console.log(container);
container.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.nodeName ==='BUTTON'){
        e.target.style.backgroundColor = e.target.value;

    }
})