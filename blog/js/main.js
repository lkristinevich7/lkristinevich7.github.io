

$(document).ready(function(){

$.getJSON('https://jsonplaceholder.typicode.com/posts', function(elem) {
console.log(elem)

for(let i = 95; i < elem.length; i++) {
let singlePostDiv= $('<div></div>').addClass('post');
singlePostDiv.append('<h2>'+ elem[i].title +'</h2>');
singlePostDiv.append('<p>'+ elem[i].body +'</p>');



let postLink = $('<a></a>').attr("href", "").addClass('link').text("Pokaz komentarz");
singlePostDiv.append(postLink);

$('#posts-list').append(singlePostDiv);



}

$('.post').each(function() {
    $('a').click(function(e){
    e.preventDefault();
    console.log('test3');
            
    $.getJSON('https://jsonplaceholder.typicode.com/comments', function(elem){
    console.log(elem); 

            
    $('a').after('<div></div>');
    // $('div').attr('id', 'comment');
    $('div').text('Imie: '+ elem.imie +', Email: '+ elem.body);
    });

}); //
            
    });




});






});