$(document).ready(function(){

    function getUserData() {

    $('#button').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(jsonUserData){
        console.log(jsonUserData); });

        $('button').after('<div></div>');
        $('div').attr('id', 'dane-programisty');
        $('div').text(jsonUserData);
    });

    }

    getUserData();

})