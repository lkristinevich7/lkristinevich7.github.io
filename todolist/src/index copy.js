renderElements()
toogleClass()
hideElement()

//Date
let date = new Date(Date.now()).toDateString()
let data = document.getElementsByClassName('date-container')[0];
data.innerText=date

//Create close button for list elements

function renderElements(){
  let list = document.getElementsByTagName('li')
  
  let newlist;
  for(let i=0; i<list.length; i++){
    let closeEl = createElement();
    newlist= list[i].appendChild(closeEl)
  }
  return newlist
}

function createElement(){
    let span = document.createElement('span');
    span.classList.add('closeElement');
    let text= '-';
    span.innerText=text;
    return span
}

//create event , closing element

function hideElement(){
  let closingElement=document.getElementsByClassName('closeElement')
  let result;
  for(let i=0; i<closingElement.length; i++){
      result = closingElement[i].addEventListener('click', function(){
          let myList = this.parentElement;
          myList.style.display='none'
      })
  }
  return result
}

//create check/uncheck-function


function toogleClass(){
    let toggleElement
    let list = document.getElementsByTagName('LI')
    for(let i=0; i<list.length; i++){
         toggleElement = list[i].addEventListener('click', function(){
             this.classList.toggle('checked')
        })
    }
    return toggleElement
}

// let unoderedList=document.getElementById("todolist")
// unoderedList.addEventListener('click', function(ev){
//     if(ev.target.tagName==="LI"){
//         ev.target.classList.toggle('checked') 
//     }
// },false)

//add element
let addButton=document.querySelector('button');
addButton.addEventListener('click', addElement)
function addElement(){
    
    let liItem=document.createElement('LI');
    let unoderedList=document.getElementById("todolist")
    let text= document.getElementById("inputValue").value;
    liItem.innerText=text;
    if(text===''){
        alert('type some text')
    }else{
        unoderedList.appendChild(liItem)
    }
    document.getElementById("inputValue").value = "";
    
    liItem.appendChild(createElement())
    toogleClass()
    hideElement()
}