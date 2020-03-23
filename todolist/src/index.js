renderElements()
toogleClass()
hideElement()

//Date
let date = new Date(Date.now()).toDateString()
let data = document.getElementsByClassName('date-container')[0];
data.innerText = date

//Create close button for list elements

function renderElements() {
    let list = document.getElementsByTagName('li')

    let newlist;
    for (let i = 0; i < list.length; i++) {
        let closeEl = createElement();
        newlist = list[i].appendChild(closeEl)
    }
    return newlist
}

function createElement() {
    let span = document.createElement('span');
    span.classList.add('closeElement');
    span.innerHTML = '<i class="fas fa-times"></i>';
    return span
}

//create event , closing element

function hideElement() {
    let closingElement = document.getElementsByClassName('closeElement')
    let result;
    for (let i = 0; i < closingElement.length; i++) {
        result = closingElement[i].addEventListener('click', function () {
            let myList = this.parentElement;
            myList.style.display = 'none'
        })
    }
    return result
}

//create check/uncheck-function

function toogleClass() {
    let toggleElement
    let list = document.getElementsByTagName('LI')
    for (let i = 0; i < list.length; i++) {
        toggleElement = list[i].addEventListener('click', function () {
            this.classList.toggle('checked')
        })
    }
    return toggleElement
}

//add element
let addButton = document.querySelector('button');
let input = document.getElementById("inputValue");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});
addButton.addEventListener('click', addElement)

function addElement() {

    let liItem = document.createElement('li');
    let unoderedList = document.getElementById("todolist")
    let text = document.getElementById("inputValue").value;
    liItem.innerText = text;
    if (text === '') {
        alert('type some text')
    } else {
        unoderedList.appendChild(liItem)
    }
    document.getElementById("inputValue").value = "";

    liItem.appendChild(createElement())
    toogleClass()
    hideElement()
}