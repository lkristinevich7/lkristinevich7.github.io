//Date
let date = new Date(Date.now()).toDateString()
let data = document.getElementsByClassName('date-container')[0];
data.innerText=date

// // debugger
// //Create close button for list elements
// let list = document.getElementsByTagName('LI')
// // renderElement()
// // function renderElement(){
//     // let newlist;
//     for(let i=0; i<list.length; i++){
//         let closeEl = createElement();
//         list[i].appendChild(closeEl)
//     }
//     // return newlist
// // }

// function createElement(){
//     let span = document.createElement('SPAN');
//     span.classList.add('closeElement');
//     let text= '-';
//     span.innerText=text;
//     return span
// }

// //create event , closing element
// let closingElement=document.getElementsByClassName('closeElement')
// hideElement()
// function hideElement(){
//     let result;
//     for(let i=0; i<closingElement.length; i++){
//         result = closingElement[i].addEventListener('click', function(){
//             let myList = this.parentElement;
//             myList.style.display='none'
//         })
//     }
//     return result
// }

// // create checked event
// let unoderedList=document.getElementById("todolist")
// // console.log(unoderedList)
// unoderedList.addEventListener('click', function(ev){
//     // console.log('test')
//     if(ev.target.tagName==="LI"){
//         ev.target.classList.toggle('checked') 
//     }
    
// },false)
// // toogleClass()
// // function toogleClass(){
// //     let toggleElement
// //     for(let i=0; i<list.length; i++){
// //          toggleElement = list[i].addEventListener('click', function(){
// //              this.classList.toggle('checked')

// //         })
// //     }
// //     return toggleElement
// // }

// addElement()
// let addButton=document.querySelector('button');
// addButton.addEventListener('click', addElement)
// // let unoderedList =document.getElementById("todolist")
// console.log(addElement())
// function addElement(){
    
//     let liItem=document.createElement('LI');
//     let text= document.getElementById("inputValue").value;
//     liItem.innerText=text;
//     if(text===''){
//         console.log('no')
//     }else{
//         unoderedList.appendChild(liItem)
//     }
//     text.value=""
//    createElement()
//    hideElement()
//     var newSpan= createElement();
//     unoderedList.appendChild(newSpan)
// }


// Create a "close" button and append it to each list item
renderElements()
function renderElements(){
    var myNodelist = document.getElementsByTagName("LI");
    let newresult;
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var newSpan = createClose()
        newresult = myNodelist[i].appendChild(newSpan);
    }
    return newresult
}

function createClose(){
  var span = document.createElement("SPAN");
  var txt = "-";
  span.className = "close";
  span.innerText=txt;
  return span
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
hidediv()
function hidediv(){
    var i;
    let result;
    for (i = 0; i < close.length; i++) { 
        result = close[i].addEventListener('click', function() {
        var div = this.parentElement;
        div.style.display = "none";
    })
}
    return result
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button

var addbtn =document.getElementsByClassName("add")[0];
addbtn.addEventListener('click', newElement)
// document.getElementById("inputValue").value = "";

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputValue").value;
  li.innerText=inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todolist").appendChild(li);
  }
  document.getElementById("inputValue").value = "";
  var newSpan= createClose()
  li.appendChild(newSpan);

  hidediv()
}

document.getElementById("inputValue").value = "";

